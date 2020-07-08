import React, { useCallback } from 'react';
import { View } from 'react-native';

import Button from '../Button';

import styles from './styles';

const OPERATIONS = ['AC', '/', 'x', '-', '+'];

const Operations = (props: OperationsProps) => {
  const { addOperation, cleanDisplay } = props;

  const buttonAction = useCallback(
    (value) => {
      if (value === 'AC') {
        cleanDisplay();
      } else {
        addOperation(value);
      }
    },
    [addOperation, cleanDisplay],
  );

  return (
    <View style={styles.operationsContainer}>
      {OPERATIONS.map((operation, k) => {
        const key = `operation-button-${k}`;
        return <Button key={key} value={operation} action={buttonAction} />;
      })}
    </View>
  );
};

interface OperationsProps {
  addOperation: (operation: string) => void;
  cleanDisplay: () => void;
}

export default Operations;
