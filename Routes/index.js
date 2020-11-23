import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import UserStory from "../Components/UserStory";
import BottomHomeNavigator from "./BottomHomeNavigator";

const Stack = createStackNavigator();
const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={BottomHomeNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="UserStory"
        component={UserStory}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
