import React from 'react';
import {NativeBaseProvider, StatusBar} from 'native-base';
import Router from '~/navigation';
import {themes} from './theme';

function App() {
  const theme = 'dark';

  return (
    <NativeBaseProvider theme={themes[theme]}>
      <StatusBar
        translucent
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
      />
      <Router />
    </NativeBaseProvider>
  );
}

export default App;
