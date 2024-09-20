import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomePost} from './HomePost';
import {CreatePost} from './CreatePost';
import {LogoTitle} from './LogoTitle';

const Stack = createNativeStackNavigator();

export const PostNavigateScreen: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#caee6d',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomePost}
          options={{
            headerStyle: {
              backgroundColor: '#f4c700',
            },
            headerTintColor: '#fefffc',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 30,
            },
            headerTitle: LogoTitle,
          }}
        />
        <Stack.Screen name="Post" component={CreatePost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
