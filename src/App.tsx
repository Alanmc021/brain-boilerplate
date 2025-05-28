/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { useColorScheme } from 'react-native';
import { store } from '@store/index';
import { Navigation } from '@navigation/index';
import { lightTheme, darkTheme } from '@themes/index';
import { AuthProvider } from './contexts/AuthContext'
import './i18n';

function App(): React.JSX.Element {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <AuthProvider>
      <ReduxProvider store={store}>
        <PaperProvider theme={theme}>
          <Navigation />
        </PaperProvider>
      </ReduxProvider>
    </AuthProvider>
  );
}

export default App;
