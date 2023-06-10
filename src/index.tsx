import React, {useEffect} from 'react';
import {NativeBaseProvider, StatusBar} from 'native-base';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Router from '~/navigation';
import {themes} from './theme';
import {useSettings} from './hooks/use-settings';
import {useFavorites} from './hooks/use-favorites';

function App() {
  const {loadSettings} = useSettings();
  const {getFavorites} = useFavorites();

  useEffect(() => {
    loadSettings();
    getFavorites;
  }, [loadSettings, getFavorites]);

  return <Router />;
}

const AppWrapper = () => {
  const {theme} = useSettings();
  const queryClient = new QueryClient();

  return (
    <NativeBaseProvider theme={themes[theme]}>
      <QueryClientProvider client={queryClient}>
        <StatusBar
          translucent
          barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
          backgroundColor="transparent"
        />
        <App />
      </QueryClientProvider>
    </NativeBaseProvider>
  );
};

export default AppWrapper;
