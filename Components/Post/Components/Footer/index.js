import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";

const Footer = ({ post }) => {
  const likes =
    String(post.image.likesCount)

    console.log(likes);
  return (
    <View style={styles.container}>
      <Text>{likes} Likes</Text>
      <View style={styles.caption}><Text style={styles.captionUser}>{post.user.name+" "}</Text><Text>{post.image.caption}</Text></View>
      <Text style={styles.time}>{post.image.postedAt}</Text>
    </View>
  );
};

export default Footer;
