import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = ({onPress, title, alignSelf, primary, width}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button(alignSelf, primary, width)}>
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: (alignSelf, primary, width) => ({
    backgroundColor: primary ? '#FF7314' : '#3C8DAD',
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: alignSelf,
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  }),
  textButton: {
    color: '#F4F4F4',
    fontWeight: '500',
    fontSize: 16,
  },
});
