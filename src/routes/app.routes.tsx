import React from 'react';
import {useTheme} from 'styled-components';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Dashboard, Register, Resume} from '../screens';

// import { Container } from './styles';

const Tab = createBottomTabNavigator();

const AppRoutes: React.FC = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          height: 88,
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({size, color}) => (
            <IconMaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Register"
        component={Register}
        options={{
          tabBarIcon: ({size, color}) => (
            <IconMaterialIcons name="attach-money" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Resumo"
        component={Resume}
        options={{
          tabBarIcon: ({size, color}) => (
            <IconMaterialIcons name="pie-chart" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppRoutes;
