import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfilePicture from "../ProfilePicture";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { TextInput } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { storyVisited } from "../../Redux/Actions/storyActions";
import ProgressBar from "../ProgressBar";

const UserStory = ({ navigation }) => {
  const route = useRoute();
  const [intervalTime, setIntervalTime] = useState(Date.now());
  const { data } = useSelector((state) => state.stories);
  const dispatch = useDispatch();
  const [userStories, setUserStories] = useState();
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const currentStory = data.find(
    (storyData) => storyData.user.id === route.params.userId
  );
  const [activeTime, setActiveTime] = useState(Date.now());
  useEffect(() => {
    setUserStories(currentStory);
    const currentUserIndex = data.indexOf(currentStory);
    const newStory = [...data];
    newStory[currentUserIndex].visited = true;
    dispatch(storyVisited(newStory));
  }, [route.params]);

  useEffect(() => {
      setActiveTime(Date.now());
      const timeOut = setTimeout(() => {
        setIntervalTime(Date.now());
      }, 5000);
    return ()=>{
      clearTimeout(timeOut);
    };
  }, [activeStoryIndex, route.params]);

  useEffect(() => {
    if (intervalTime > activeTime + 5000) {
      nextStory();
    }
  }, [intervalTime]);

  useEffect(() => {
      if (!userStories) {
        return;
      }
      if (activeStoryIndex < 0) {
        setActiveStoryIndex(0);
        return;
      }
      if (activeStoryIndex >= userStories?.stories?.length) {
        setActiveStoryIndex(userStories.stories.length - 1);
        return;
      }
  }, [activeStoryIndex]);

  function nextStory() {
    if (activeStoryIndex >= userStories.stories.length - 1) {
      const indexOfNextUser =
        data.indexOf(userStories) + 1 >= data.length
          ? data.length - 1
          : data.indexOf(userStories) + 1;

      const nextUserId = data[indexOfNextUser].user.id;

      if (nextUserId !== userStories.user.id) {
        async function next() {
          await navigation.setParams({ userId: nextUserId });
          setActiveStoryIndex(1);
          setActiveStoryIndex(0);
        }
        return next();
      } else {
        return navigation.goBack();
      }
    } else setActiveStoryIndex(activeStoryIndex + 1);
  }
  const prevStory = () => {
    if (activeStoryIndex <= 0) {
      const indexOfPrevUser =
        data.indexOf(userStories) - 1 < 0 ? 0 : data.indexOf(userStories) - 1;
      const prevUserId = data[indexOfPrevUser].user.id;
      async function next() {
        await navigation.setParams({ userId: prevUserId });
        const prevStoryData = await data.find(
          (storyData) => storyData.user.id === prevUserId
        );
        await setActiveStoryIndex(0);
        await setActiveStoryIndex(prevStoryData.stories.length - 1);
      }
      return next();
    } else setActiveStoryIndex(activeStoryIndex - 1);
  };

  const handlePress = (event) => {
    const xAxis = event.nativeEvent.pageX;
    //const yAxis = event.nativeEvent.pageY;
    if (xAxis > Dimensions.get("window").width / 2) {
      nextStory();
    } else {
      prevStory();
    }
  };

  if (!userStories) {
    return <SafeAreaView style={styles.container} />;
  }

  const activeStory = userStories.stories[activeStoryIndex];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="#000" />
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.imageContainer}>
          <ImageBackground
            source={{ uri: activeStory?.imageUri }}
            imageStyle={{ borderRadius: 10 }}
            style={styles.image}
          >
            <View style={styles.timer}>
              {userStories.stories.map((story, index) => {
                return (
                  <React.Fragment key={index}>
                    {index === activeStoryIndex ? (
                      <ProgressBar
                        render={activeStoryIndex}
                        render2={route.params.userId}
                      />
                    ) : index < activeStoryIndex ? (
                      <View style={styles.timerItems} />
                    ) : (
                      <View style={styles.timerNextItems} />
                    )}
                  </React.Fragment>
                );
              })}
            </View>
            <View style={styles.head}>
              <View style={styles.userInfo}>
                <ProfilePicture
                  uri={userStories?.user?.photoUrl}
                  size={"medium"}
                  visited={true}
                />
                <Text style={styles.name}>{userStories?.user?.name}</Text>
                <Text style={styles.timeInfo}>{activeStory?.postedAt}</Text>
              </View>
              <View style={styles.userInfo}>
                <FontAwesomeIcon icon={faEllipsisV} size={16} color={"white"} />
              </View>
            </View>
          </ImageBackground>
          <View style={styles.messageContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Send Message"
              placeholderTextColor="white"
            />
            <Ionicons name="ios-paper-plane" size={30} color="white" />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default UserStory;
