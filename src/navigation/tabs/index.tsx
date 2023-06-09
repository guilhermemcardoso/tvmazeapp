import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Series} from '~/domains/series';

import {TabBar} from './components';
import {Tabs} from '~/navigation/routes';
import {Favorites} from '~/domains/favorites';
import {People} from '~/domains/people';
import {Settings} from '~/domains/settings';

export type TabStackParamList = {
  [Tabs.SERIES]: undefined;
  [Tabs.FAVORITES]: undefined;
  [Tabs.PEOPLE]: undefined;
  [Tabs.SETTINGS]: undefined;
};

const TabStack = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
  return (
    <TabStack.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
      }}>
      <TabStack.Screen name={Tabs.SERIES} component={Series} />
      <TabStack.Screen name={Tabs.FAVORITES} component={Favorites} />
      <TabStack.Screen name={Tabs.PEOPLE} component={People} />
      <TabStack.Screen name={Tabs.SETTINGS} component={Settings} />
    </TabStack.Navigator>
  );
};

export default TabNavigator;
