import React from "react";
import { StyleSheet } from "react-native";
import colors from "./assets/colors/colors";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { createStackNavigator } from "@react-navigation/stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { NavigationContainer } from "@react-navigation/native";
import Home from "./components/Home";
import Liked from "./components/Liked";
import Profile from "./components/Profile";
import Details from "./components/Details";

Entypo.loadFont();
MaterialCommunityIcons.loadFont();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: styles.tabBar,
        activeTintColor: colors.orange,
        inactiveTintColor: colors.gray,
        showLabel: false,
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name='home' size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Liked'
        component={Liked}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name='heart' size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='account' size={32} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='TabNavigator'
          component={TabNavigator}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Details'
          component={Details}
          // options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default App;
