import React, { useState } from "react";
import { FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Post";
import Stories from "../Stories";
import {postUpdate} from '../../Redux/Actions/postActions.js'

const Feeds = () => {
  
  const {posts} =useSelector((state)=>state)
  const {data} = posts;
  const dispatch = useDispatch()

  const handleLike = (id, value) => {
    const newPosts = [...data];
    newPosts[id].image.liked = value;
    data[id].image.liked
      ? newPosts[id].image.likesCount++
      : newPosts[id].image.likesCount--;
  
    dispatch(postUpdate(newPosts));
  };
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Post post={item} handleLike={handleLike} />}
      keyExtractor={({ id }) => String(id)}
      ListHeaderComponent={Stories}
    />
  );
};

export default Feeds;
