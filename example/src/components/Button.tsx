import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const Button = ({onPress, text, ...rest}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.buttonContainer}
      {...rest}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
