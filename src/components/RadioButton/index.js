import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Gap from '../Gap';

const RadioButton = ({label, active, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.wrapper}>
      <View style={styles.outerRdo}>
        <View style={styles.innerRdo(active)} />
      </View>
      <Gap width={5} />
      <Text style={styles.labelOptions}>{label}</Text>
    </TouchableOpacity>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 50,
  },
  outerRdo: {
    borderWidth: 2,
    borderColor: '#FF7314',
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerRdo: active => ({
    backgroundColor: active ? '#FF7314' : '#393534',
    width: 7,
    height: 7,
    borderRadius: 7 / 2,
  }),
  labelOptions: {
    color: '#F4F4F4',
    fontWeight: '500',
  },
});
