// In App.js in a new project

import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

interface ComponentProps {
  param: string;
  navigation: any;
}
export const HomeScreen: React.FC<ComponentProps> = ({param, navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Pantalla Principal: {param}</Text>
      <Button
        title="Ver Detalles"
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'Pasar cualquier cosa por aqui',
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
