import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from './routes';
import TabNavigator from './tabs';

const screenOptions = {headerShown: false};
const RootStack = createNativeStackNavigator();

const Route = () => {
  return (
    <RootStack.Navigator screenOptions={screenOptions}>
      <RootStack.Screen name={Routes.HOME} component={TabNavigator} />
    </RootStack.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <Route />
    </NavigationContainer>
  );
};

export default Router;
