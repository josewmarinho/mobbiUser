import React from "react";
import HomeScreen from "../screens/HomeScreen";
import { createStackNavigator } from '@react-navigation/stack'
import DestinationSearch from "../screens/DestinationSearch";
import SearchResults from "../screens/SearchResults";


import SignInScreen from "../screens/InUp/SignInScreen";
import SignUpScreen from "../screens/InUp/SignUpScreen";
import ForgotPasswordScreen from "../screens/InUp/ForgotPasswordScreen";


const Stack = createStackNavigator();

const HomeNavigator = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SignIn"
    >

      <Stack.Screen name={"HomeScreen"} component={HomeScreen} />
      <Stack.Screen name={"DestinationSearch"} component={DestinationSearch} />
      <Stack.Screen name={"SearchResults"} component={SearchResults} />

      <Stack.Screen name={"SignIn"} component={SignInScreen} />
      <Stack.Screen name={"SingUp"} component={SignUpScreen} />
      <Stack.Screen name={"ForgotPassword"} component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;