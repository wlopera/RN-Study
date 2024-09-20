import React from 'react';
import {StyleSheet, View} from 'react-native';

export const HWScreen: React.FC = () => {
  return (
    <View style={styles.flex_p}>
      <View>
        <View style={styles.hw1} />
        <View style={styles.hw2} />
        <View style={styles.hw3} />
      </View>
      <View style={styles.flex_p}>
        <View style={styles.flex1} />
        <View style={styles.flex2} />
        <View style={styles.flex3} />
      </View>
      <View style={styles.flex_p}>
        <View style={styles.por1} />
        <View style={styles.por2} />
        <View style={styles.por3} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hw1: {
    backgroundColor: '#B0E0E6',
    width: 25,
    height: 25,
  },
  hw2: {
    backgroundColor: '#87CEEB',
    width: 50,
    height: 50,
  },
  hw3: {
    backgroundColor: '#4682B4',
    width: 100,
    height: 100,
  },
  flex_p: {
    flex: 1,
  },
  flex1: {
    flex: 1,
    backgroundColor: '#B0E0E6',
  },
  flex2: {
    flex: 2,
    backgroundColor: '#87CEEB',
  },
  flex3: {
    flex: 3,
    backgroundColor: '#4682B4',
  },
  por1: {
    flex: 1,
    backgroundColor: '#9bf4ba',
    height: '15%',
  },
  por2: {
    flex: 2,
    backgroundColor: '#1ade5f',
    width: '66%',
    height: '35%',
  },
  por3: {
    flex: 3,
    backgroundColor: '#046927',
    width: '33%',
    height: '50%',
  },
});
