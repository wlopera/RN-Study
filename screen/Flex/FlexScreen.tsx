import React from 'react';
import {StyleSheet, View} from 'react-native';

export const FlexScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rect_1} />
      <View style={styles.rect_2} />
      <View style={styles.rect_3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'column'},
  rect_1: {flex: 1, backgroundColor: 'red'},
  rect_2: {flex: 2, backgroundColor: 'orange'},
  rect_3: {flex: 3, backgroundColor: 'green'},
});
