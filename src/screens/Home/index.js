import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Header from '../../components/Header';
import ListMovies from '../../components/ListMovie';
import Content from './Content';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Header title="Home" />
      <Content />
      <ListMovies />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#22211F',
    flex: 1,
  },
});
