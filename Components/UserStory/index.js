import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import storyData from "../../Datas/story";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

const UserStory = ({ navigation }) => {
  const route = useRoute();
  const [userStories, setUserStories] = useState();
  const [activeStoryIndex, setActiveStoryIndex] = useState();
  useEffect(() => {
    setUserStories(
      storyData.find((storyData) => storyData.user.id === route.params.userId)
    );
    setActiveStoryIndex(0);
  }, [route.params]);

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
        storyData.indexOf(userStories) + 1 >= storyData.length
          ? storyData.length - 1
          : storyData.indexOf(userStories) + 1;

      const nextUserId = storyData[indexOfNextUser].user.id;

      return navigation.setParams({ userId: nextUserId });
    } else setActiveStoryIndex(activeStoryIndex + 1);
  }
  const prevStory = () => {
    if (activeStoryIndex <= 0) {
      const indexOfPrevUser =
        storyData.indexOf(userStories) - 1 < 0
          ? 0
          : storyData.indexOf(userStories) - 1;

      const prevUserId = storyData[indexOfPrevUser].user.id;
      return navigation.setParams({ userId: prevUserId });
      
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
      <TouchableWithoutFeedback onPress={handlePress}>
        <ImageBackground
          source={{ uri: activeStory?.imageUri }}
          imageStyle={{ borderRadius: 10 }}
          style={styles.image}
        />
      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default UserStory;
