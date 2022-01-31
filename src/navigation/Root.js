import React from "react";
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigator from "./Home";
import CustomDrawer from "./CustomDrawer";

const Drawer = createDrawerNavigator();

const DummyScreen = (props) => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>{props.name}</Text>
  </View>
)

const RootNavigator = (props) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={
        (props) => (
          <CustomDrawer {...props} />)
      }>
        <Drawer.Screen name="Inicio" component={HomeNavigator} />

        <Drawer.Screen name="Suas viagens">
           {() => <DummyScreen name={"Suas viagens"} />}
        </Drawer.Screen>

        <Drawer.Screen name="Ajuda">
          {() => <DummyScreen name={"Ajuda"} />}
        </Drawer.Screen>

        <Drawer.Screen name="Carteira">
          {() => <DummyScreen name={"Carteira"} />}
        </Drawer.Screen>

        <Drawer.Screen name="Configurações">
          {() => <DummyScreen name={"Configurações"} />}
        </Drawer.Screen>

      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;