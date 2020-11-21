import React from "react";
import { Image, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";

const ProfilePicture = ({ uri,size }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#F58529", "#FEDA77", "#DD2A7B", "#8134AF", "#515BD4"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={size === 'small'?styles.gradientSmall:styles.gradient}
      >
        {uri ? (
          <Image
            style={size === 'small'?styles.small:styles.image}
            source={{
              uri: uri,
            }}
          />
        ) : (
          <View style={styles.image} />
        )}
      </LinearGradient>
    </View>
  );
};

export default ProfilePicture;
