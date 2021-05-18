import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export const Button = ({ title, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.btn}
      {...rest}
    >
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    backgroundColor: '#a370f7',
    padding: 10,
    borderRadius: 8,
    marginTop: 24,
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});