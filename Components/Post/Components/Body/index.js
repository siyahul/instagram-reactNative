import React, { useState } from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { styles } from "./style";

const Body = ({ image,id }) => {
  const [lastTap,setLastTap] = useState(null);
  const handleDoubleTap = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (lastTap && now - lastTap < DOUBLE_PRESS_DELAY) {
      console.log("like",id);
      setLastTap(null)
    } else {
      setLastTap(now);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={handleDoubleTap}>
      <Image source={{ uri: image }} style={styles.image} />
    </TouchableWithoutFeedback>
  );
};

export default Body;
