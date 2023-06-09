import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Routes, Tabs} from './routes';
import Series from '~/domains/series/series-list';

const screenOptions = {headerShown: false};
const RootStack = createNativeStackNavigator();
const MainStack = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <MainStack.Screen name={Tabs.MAIN} component={Series} />
    </MainStack.Navigator>
  );
};

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
