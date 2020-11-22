import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import { styles } from "./style";

const Body = ({ image, id, handleLike }) => {
  const [lastTap, setLastTap] = useState(null);
  const [doubleTap, seDoubleTap] = useState(false);
  const handleDoubleTap = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (lastTap && now - lastTap < DOUBLE_PRESS_DELAY) {
      if (image.liked) {
        null;
      } else {
        handleLike(id, true);
      }
      setLastTap(null);
      seDoubleTap(true);
      setTimeout(() => {
        seDoubleTap(false);
      }, 600);
    } else {
      setLastTap(now);
    }
  };


  return (
    <TouchableWithoutFeedback onPress={handleDoubleTap}>
      <View style={styles.container}>
        {doubleTap ? (
            <View style={styles.heart}>
              <FontAwesomeIcon icon={faHeart} color={"white"} size={60} />
            </View>
        ) : null}
        <Image source={{ uri: image.uri }} style={styles.image} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Body;
