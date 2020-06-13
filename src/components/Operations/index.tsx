import React from 'react';
import { View } from 'react-native';

import Button from '../Button';

import styles from './styles';

const OPERATIONS = ['AC', '/', 'x', '-', '+'];

const Operations = () => (
  <View style={styles.operationsContainer}>
    {OPERATIONS.map((operation, k) => {
      const key = `operation-button-${k}`;
      return <Button key={key} value={operation} />;
    })}
  </View>
);

export default Operations;
