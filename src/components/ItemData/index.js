import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ItemData = ({title, value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default ItemData;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    color: '#F4F4F4',
    fontWeight: '700',
  },
  value: {
    color: '#F4F4F4',
    fontWeight: '500',
  },
});
