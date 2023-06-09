import React, {useEffect} from 'react';
import {NativeBaseProvider, StatusBar} from 'native-base';
import Router from '~/navigation';
import {themes} from './theme';
import {useSettings} from './hooks/use-settings';

function App() {
  const {loadSettings, theme} = useSettings();

  useEffect(() => {
    loadSettings();
  }, [loadSettings]);

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
