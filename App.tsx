import React from 'react';
import {NativeBaseProvider} from 'native-base';
import Router from './src/navigation';

function App() {
  return (
    <NativeBaseProvider>
      <Router />
    </NativeBaseProvider>
  );
}

export default App;
