import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabNavigator from '~/navigation/tabs';
import {Routes} from '../routes';
import {Episode, Serie} from '~/shared/types';
import {EpisodeDetails, SerieDetails} from '~/domains/series';

const screenOptions = {headerShown: false};

export type AuthorizedStackParamList = {
  [Routes.HOME]: undefined;
  [Routes.SERIE_DETAILS]: {
    serie: Serie;
  };
  [Routes.EPISODE_DETAILS]: {
    episode: Episode;
  };
};

const RootStack = createNativeStackNavigator<AuthorizedStackParamList>();

const Authorized = () => {
  return (
    <RootStack.Navigator screenOptions={screenOptions}>
      <RootStack.Screen name={Routes.HOME} component={TabNavigator} />
      <RootStack.Screen name={Routes.SERIE_DETAILS} component={SerieDetails} />
      <RootStack.Screen
        name={Routes.EPISODE_DETAILS}
        component={EpisodeDetails}
      />
    </RootStack.Navigator>
  );
};

export default Authorized;
