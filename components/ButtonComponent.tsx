import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface ButtonProps {
  name: string;
  pressed: (field: string, valueField: string) => void;
  value: string;
  field: string;
}

export const ButtonComponent: React.FC<ButtonProps> = ({
  name,
  pressed,
  value,
  field,
}) => {
  return (
    <TouchableOpacity
      onPress={() => pressed(field, name)}
      style={styles.container}>
      <Text
        style={
          value === name + '-' + field ? styles.selectButon : styles.button
        }>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    width: '100%',
    padding: 5,
  },
  button: {
    backgroundColor: '#f9eedb',
    height: 35,
    textAlignVertical: 'center',
    paddingLeft: 10,
    color: '#FF7F50',
    borderRadius: 8,
  },
  selectButon: {
    backgroundColor: '#FF7F50',
    height: 35,
    textAlignVertical: 'center',
    paddingLeft: 10,
    color: 'white',
    borderRadius: 8,
  },
});
