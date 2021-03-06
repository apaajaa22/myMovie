import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Register from '../screens/Register';
import Register2 from '../screens/Register/Register2';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import Confirmation from '../screens/Register/Confirmation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Search from '../screens/Search';
import UpComing from '../screens/UpComing';
import TabBar from '../components/TabBar';
import Detail from '../screens/Detail';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        headerShown: false,
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      })}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({route, navigation}) => ({
          headerShown: false,
          gestureEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        })}
        initialRouteName="Register">
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Register2" component={Register2} />
        <Stack.Screen name="Confirmation" component={Confirmation} />
        <Stack.Screen name="MainApp" component={MainApp} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
