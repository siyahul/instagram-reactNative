import React, { useState } from "react";
import { View, Text } from "react-native";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { styles } from "./style";

const Post = ({post,handleLike}) => {
  
  return (
    <View style={styles.container}>
      <Header uri={post?.user?.photoUrl} name={post?.user?.name}/>
      <Body image={post?.image} id={post?.id} handleLike={handleLike}/>
      <Footer post={post} handleLike={handleLike}/>
    </View>
  );
};

export default Post;
