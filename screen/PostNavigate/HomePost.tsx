import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

interface ComponentProps {
  route: {
    params: {
      post: string;
    };
  };
  navigation: any;
}

export const HomePost: React.FC<ComponentProps> = ({route, navigation}) => {
  const post = route.params?.post;
  return (
    <View style={styles.container}>
      <Text>Inicio</Text>
      <Button
        title="Agregar Postal"
        onPress={() => navigation.navigate('Post')}
      />
      {post && <Text>{post}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
