/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
import { View, Image, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "#000",
        activeBackgroundColor: "#000",
        tabStyle: {
          backgroundColor: "#fff",
        
        }
      }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
        <BottomTab.Screen
          name="TabTwo"
          component={TabTwoScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
              source={require('../assets/images/color.png') }
              width={50}
              height={50}
              resizeMode={'contain'}
            />
            ),
          }}
        />
      <BottomTab.Screen
        name="TabThree"
        component={TabOneScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../assets/images/person.png') }
              width={50}
              height={50}
              resizeMode={'contain'}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabFour"
        component={TabTwoScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="settings" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}
