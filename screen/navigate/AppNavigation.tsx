// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './HomeScreen';
import {DetailsScreen} from './DetailsScreen';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Inicio'}}
        />
         */}
        <Stack.Screen name="Home" options={{title: 'Inicio'}}>
          {props => <HomeScreen {...props} param="Param enviado por props" />}
        </Stack.Screen>
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
