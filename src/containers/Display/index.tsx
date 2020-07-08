import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import {
  currentOperand as currentOperandSelector,
  previousOperand as previousOperandSelector,
  operation as operationSelector,
} from '../../redux/selectors';

import styles from './styles';

const Display = () => {
  const currentOperand = useSelector(currentOperandSelector) ?? '';
  const previousOperand = useSelector(previousOperandSelector);
  const operation = useSelector(operationSelector);

  const [displayValue, setDisplayValue] = useState('');

  useEffect(() => {
    setDisplayValue(
      operation ? operation.concat(`  ${currentOperand}`) : currentOperand,
    );
  }, [currentOperand, operation]);

  return (
    <View style={styles.displayContainer}>
      <Text style={styles.displayText} selectable>
        {previousOperand}
      </Text>
      <Text style={styles.displayText}>{displayValue}</Text>
    </View>
  );
};

export default Display;
