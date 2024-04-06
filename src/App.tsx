import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Root from './navigation/Root';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={DefaultTheme}>
        <Root />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
