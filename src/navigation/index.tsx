import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Authorized from './stacks/authorized';

const Route = Authorized;

const Router = () => {
  return (
    <NavigationContainer>
      <Route />
    </NavigationContainer>
  );
};

export default Router;
