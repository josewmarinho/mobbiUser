import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from "../screens/InUp/SignInScreen";
import SignUpScreen from "../screens/InUp/SignUpScreen";
import ForgotPasswordScreen from "../screens/InUp/ForgotPasswordScreen";
import SplashScreen from "../screens/InUp/Splash";


const Stack = createStackNavigator();

const AuthRoute = () => {
  return (
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Splash"
      >
        <Stack.Screen name={"Splash"} component={SplashScreen} />
        <Stack.Screen name={"SignIn"} component={SignInScreen} />
        <Stack.Screen name={"SingUp"} component={SignUpScreen} />
        <Stack.Screen name={"ForgotPassword"} component={ForgotPasswordScreen} />

      </Stack.Navigator>
  );
};

export default AuthRoute;
