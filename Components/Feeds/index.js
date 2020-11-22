import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import Post from "../Post";
import Stories from "../Stories";

const Feeds = () => {
  const [posts, setPosts] = useState([
    {
      id: 0,
      user: {
        name: "Siyahul haq",
        photoUrl:
          "https://lh3.googleusercontent.com/ogw/ADGmqu-9wix3NQN3NcKYdi6ZmI172D8umkxAoukmGwOGkg=s83-c-mo",
      },
      image: {
        uri:
          "https://scontent.fmaa1-3.fna.fbcdn.net/v/t1.0-9/90541905_2827298087388869_9195459774542512128_o.jpg?_nc_cat=104&ccb=2&_nc_sid=174925&_nc_ohc=TQFj8pGNeDMAX-pfXLF&_nc_ht=scontent.fmaa1-3.fna&oh=e72f7e7c73d4a7efe512984c1b1af8a8&oe=5FDFBFEB",
        caption: "This is a test instagram clone",
        likesCount: 1243,
        postedAt: "6 min ago",
      },
    },
    {
      id: 1,
      user: {
        name: "Siyahul haq",
        photoUrl:
          "https://lh3.googleusercontent.com/ogw/ADGmqu-9wix3NQN3NcKYdi6ZmI172D8umkxAoukmGwOGkg=s83-c-mo",
      },
      image: {
        uri:
          "https://scontent.fcok4-1.fna.fbcdn.net/v/t1.0-9/86352726_2750487371736608_5748289267239485440_o.jpg?_nc_cat=104&ccb=2&_nc_sid=174925&_nc_ohc=9k3Pdm9ltOIAX8oXvl-&_nc_ht=scontent.fcok4-1.fna&oh=f9170cb1d65e3aacd0fc37590164f771&oe=5FDF7E2F",
        caption: "This is a test instagram clone checking",
        likesCount: 5243,
        postedAt: "50 min ago",
        liked: false,
      },
    },
  ]);
  const handleLike = (id, value) => {
    const newPosts = [...posts];
    newPosts[id].image.liked = value;
    posts[id].image.liked
      ? newPosts[id].image.likesCount++
      : newPosts[id].image.likesCount--;
    setPosts(newPosts);
  };
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <Post post={item} handleLike={handleLike} />}
      keyExtractor={({ id }) => String(id)}
      ListHeaderComponent={Stories}
    />
  );
};

export default Feeds;
