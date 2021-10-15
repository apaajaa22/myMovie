import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const Input = ({
  title,
  row,
  value,
  onChangeText,
  multiline = false,
  keyboardType = 'default',
  numberOfLines,
}) => {
  return (
    <View style={styles.container(row)}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input}
        placeholder={`enter your ${title.toLowerCase()}`}
        placeholderTextColor="#393534"
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: row => ({flex: row ? 1 : 0, marginTop: 10}),
  title: {
    color: '#F4F4F4',
    fontWeight: '500',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#F4F4F4',
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#22211F',
  },
});
