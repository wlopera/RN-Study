import React from 'react';
import {Image} from 'react-native';

export const LogoTitle: React.FC = () => {
  return (
    <Image
      style={{width: 50, height: 50}}
      source={require('../../image/react-native.png')}
    />
  );
};
