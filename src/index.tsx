import React, {useEffect} from 'react';
import {NativeBaseProvider, StatusBar} from 'native-base';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Router from '~/navigation';
import {themes} from './theme';
import {useSettings} from './hooks/use-settings';

function App() {
  const {loadSettings, theme} = useSettings();
  const queryClient = new QueryClient();

  useEffect(() => {
    loadSettings();
  }, [loadSettings]);

  return (
    <NativeBaseProvider theme={themes[theme]}>
      <QueryClientProvider client={queryClient}>
        <StatusBar
          translucent
          barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
          backgroundColor="transparent"
        />
        <Router />
      </QueryClientProvider>
    </NativeBaseProvider>
  );
}

export default App;
