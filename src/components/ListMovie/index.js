import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import axios from 'axios';
import ModalContent from '../ModalContent';
import {useNavigation} from '@react-navigation/core';

const ListMovies = () => {
  const navigation = useNavigation();
  const [data, setData] = useState();
  const [show, setShow] = useState(false);
  const [img, setImg] = useState('');
  const [title, setTitle] = useState('');
  const [release, setRelease] = useState('');
  const [overview, setOverview] = useState('');
  const [detail, setDetail] = useState({});

  const onDetail = () => {
    setShow(false);
    console.log(detail);
    navigation.navigate('Detail', detail);
  };
  const modalClick = item => {
    setDetail(item);
    setImg(`https://image.tmdb.org/t/p/w500${item.poster_path}`);
    setTitle(item.title);
    setRelease(item.release_date);
    setOverview(item.overview);
    setShow(true);
  };
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => modalClick(item)}>
        <Image
          style={styles.image}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          }}
        />
      </TouchableOpacity>
    );
  };

  const getData = () => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=89ccad7569150e3e3b6909a5fce93a0a&language=en-US&page=1',
      )
      .then(res => {
        setData(res.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Now Playing</Text>
        <FlatList
          data={data?.results}
          renderItem={renderItem}
          numColumns={3}
          keyExtractor={item => item.id}
        />
      </View>
      <ModalContent
        visible={show}
        img={img}
        onPressBackground={() => setShow(false)}
        onPressClose={() => setShow(false)}
        overview={overview}
        release={release}
        title={title}
        onPressDetail={onDetail}
      />
    </>
  );
};

export default ListMovies;

const styles = StyleSheet.create({
  container: {paddingHorizontal: 15},
  title: {
    color: '#F4F4F4',
    marginVertical: 20,
    fontSize: 16,
    fontWeight: '600',
  },
  image: {
    width: 110,
    height: 200,
    margin: 5,
    borderRadius: 8,
  },
});
