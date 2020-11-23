import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Image, View } from "react-native";
import HomeScreen from "../Screens/HomeScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

const Stack = createStackNavigator();
const HomeRoute = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            headerTitle: () => (
              <Image
                source={{
                  uri:
                    "https://i.pinimg.com/originals/57/6c/dd/576cdd470fdc0b88f4ca0207d2b471d5.png",
                }}
                style={{
                  width: 90,
                  height: 25,
                  resizeMode: "contain",
                  marginLeft: 0,
                }}
              />
            ),
            headerRight: () => (
              <View style={{ flexDirection: "row" }}>
                <View style={{ paddingHorizontal: 10 }}>
                  <Ionicons name="md-search" size={24} color="black" />
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                  <Ionicons name="ios-paper-plane" size={24} color="black" />
                </View>
              </View>
            ),
          }}
          component={HomeScreen}
        />
      </Stack.Navigator>
    );
  };
export default HomeRoute;
