import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Register from '../screens/Register';
import Register2 from '../screens/Register/Register2';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import Confirmation from '../screens/Register/Confirmation';
const Routes = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({route, navigation}) => ({
          headerShown: false,
          gestureEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        })}
        initialRouteName="Home">
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Register2" component={Register2} />
        <Stack.Screen name="Confirmation" component={Confirmation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
