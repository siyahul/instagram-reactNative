import React from "react";
import { Image, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";

const ProfilePicture = ({ uri, size, visited }) => {
  const image = (
    <Image
      style={
        size === "small"
          ? styles.small
          : size === "medium"
          ? styles.medium
          : styles.image
      }
      source={{
        uri: uri,
      }}
    />
  );

  return (
    <View style={styles.container}>
      {!visited ? (
        <LinearGradient
          colors={["#F58529", "#FEDA77", "#DD2A7B", "#8134AF", "#515BD4"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={
            size === "small"
              ? styles.gradientSmall
              : size === "medium"
              ? styles.gradientMedium
              : styles.gradient
          }
        >
          {uri ? image : <View style={styles.image} />}
        </LinearGradient>
      ) : (
        <View
          style={
            size === "small"
              ? styles.viewSmall
              : size === "medium"
              ? styles.viewMedium
              : styles.view
          }
        >
          {uri ? image : <View style={styles.image} />}
        </View>
      )}
    </View>
  );
};

export default ProfilePicture;
