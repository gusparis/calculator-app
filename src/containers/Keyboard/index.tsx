import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

import {
  addOperation as addOperationAction,
  addNumber as addNumberAction,
  cleanDisplay as cleanDisplayAction,
} from '../../redux/actions';

import NumPad from '../../components/NumPad';
import Operations from '../../components/Operations';

import styles from './styles';

const Keyboard = () => {
  const dispatch = useDispatch();

  const addNumber = useCallback((number) => dispatch(addNumberAction(number)), [
    dispatch,
  ]);

  const addOperation = useCallback(
    (operation) => dispatch(addOperationAction(operation)),
    [dispatch],
  );
  const cleanDisplay = useCallback(() => dispatch(cleanDisplayAction()), [
    dispatch,
  ]);

  return (
    <View style={styles.keyboardContainer}>
      <NumPad addOperand={addNumber} />
      <Operations addOperation={addOperation} cleanDisplay={cleanDisplay} />
    </View>
  );
};

export default Keyboard;
