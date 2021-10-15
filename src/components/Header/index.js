import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Gap from '../Gap';

const Header = ({title, back}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {back ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={20} color="#F4F4F4" />
        </TouchableOpacity>
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}

      <View style={styles.wrapperIcon}>
        <Feather name="search" size={24} color="#F4F4f4" />
        <Gap width={20} />
        <Feather name="user" size={24} color="#F4F4f4" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#22211F',
    paddingHorizontal: 15,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: '#F4F4F4',
    fontWeight: 'bold',
    fontSize: 16,
  },
  wrapperIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
