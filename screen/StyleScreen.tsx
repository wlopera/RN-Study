import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const StyleScreen: React.FC = () => {
  return (
    <View>
      <Text style={styles.color_red}>just red</Text>
      <Text style={styles.color_bigBlue}>just bigBlue</Text>
      <Text style={[styles.color_bigBlue, styles.color_red]}>
        bigBlue, then red
      </Text>
      <Text style={[styles.color_red, styles.color_bigBlue]}>
        red, then bigBlue
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  color_red: {
    color: 'red',
  },
  color_bigBlue: {
    color: 'blue',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
