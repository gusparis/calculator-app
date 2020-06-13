import React from 'react';
import { View } from 'react-native';

import NumPad from '../../components/NumPad';
import Operations from '../../components/Operations';

import styles from './styles';

const Keyboard = () => {
  return (
    <View style={styles.keyboardContainer}>
      <NumPad />
      <Operations />
    </View>
  );
};

export default Keyboard;
