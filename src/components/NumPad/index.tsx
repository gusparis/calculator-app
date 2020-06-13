import React from 'react';
import { View } from 'react-native';

import Button from '../Button';

import styles from './styles';

const NUMBERS = [
  ['7', '8', '9'],
  ['4', '5', '6'],
  ['1', '2', '3'],
  ['.', '0', '='],
];

const NumPad = () => (
  <View style={styles.numPadContainer}>
    {NUMBERS.map((numberRow, k) => (
      <View key={`number-button-${k}`} style={styles.numPadRowContainer}>
        {numberRow.map((number, j) => (
          <Button key={`number-button-${j}`} value={number} />
        ))}
      </View>
    ))}
  </View>
);

export default NumPad;
