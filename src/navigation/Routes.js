import React from "react";
import { View, ActivityIndicator } from "react-native";

import { useAuth } from "../hooks/auth";
import { NavigationContainer } from '@react-navigation/native';

import AuthRoute from "./AuthRoute";
import RootNavigator from "./Root";
import HomeNavigator from './Home';

const Routes = () => {

  return (
    <NavigationContainer>
      <RootNavigator />
      <AuthRoute />
    </NavigationContainer>
  )
};

export default Routes;