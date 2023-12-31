import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';

import theme from './src/global/theme';
import AppRoutes from './src/routes/app.routes';
import {StatusBar} from 'react-native';
import Signin from 'src/screens/Signin';
import {AuthProvider} from 'src/hooks/auth';

const goFinances = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <StatusBar barStyle="light-content" />
          <AuthProvider>
            <Signin />
          </AuthProvider>
        </NavigationContainer>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default goFinances;
