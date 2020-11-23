import React, { useState } from "react";
import { View, FlatList } from "react-native";
import Story from "../Story";
import { styles } from "./styles";
import storyData from "../../Datas/story";
const Stories = () => {
  const [datas, setDatas] = useState(storyData);

  return (
    <View style={styles.container}>
      <FlatList
        data={datas}
        keyExtractor={(item, index) => String(index)}
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <Story
              name={item?.user?.name}
              url={item?.user?.photoUrl}
              index={index}
              id={item?.user?.id}
            />
          );
        }}
      />
    </View>
  );
};

export default Stories;
