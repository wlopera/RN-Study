// In App.js in a new project

import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

interface ComponentProps {
  route: {
    params: {
      itemId: string;
      otherParam: string;
    };
  };
  navigation: any;
}

export const DetailsScreen: React.FC<ComponentProps> = ({
  route,
  navigation,
}) => {
  console.log(123, route);
  const {itemId, otherParam} = route.params;

  return (
    <View style={styles.container}>
      <Text>Detalles</Text>
      <Text>ItemId: {itemId}</Text>
      <Text>otherParam: {otherParam}</Text>

      <Button
        title="Atras"
        onPress={() => {
          navigation.goBack();
        }}
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
