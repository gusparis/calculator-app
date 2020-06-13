import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const Button = (props: ButtonProps) => {
  const {
    value,
    action,
    textColor = '#d1d1d6',
    buttonColor = '#3a3a3c',
  } = props;

  //NUMBERS COLOR #3a3a3c
  //OPERATIONS COLOR #ffd60a

  return (
    <TouchableOpacity
      onPress={action}
      style={{ ...styles.buttonContainer, backgroundColor: buttonColor }}
      activeOpacity={0.9}>
      <Text style={{ ...styles.buttonText, color: textColor }}>{value}</Text>
    </TouchableOpacity>
  );
};

interface ButtonProps {
  value: string;
  action?: (value: string) => void;
  textColor?: string;
  buttonColor?: string;
}

export default Button;
