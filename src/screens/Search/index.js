/* eslint-disable react-hooks/exhaustive-deps */
import {useNavigation} from '@react-navigation/core';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Header from '../../components/Header';
import ModalContent from '../../components/ModalContent';

const Search = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [img, setImg] = useState('');
  const [title, setTitle] = useState('');
  const [release, setRelease] = useState('');
  const [overview, setOverview] = useState('');
  const [detail, setDetail] = useState({});
  const [search, setSearch] = useState('big');

  const modalClick = item => {
    setDetail(item);
    setImg(`https://image.tmdb.org/t/p/w500${item.poster_path}`);
    setTitle(item.title);
    setRelease(item.release_date);
    setOverview(item.overview);
    setShow(true);
  };
  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=89ccad7569150e3e3b6909a5fce93a0a&language=en-US&query=${search}&page=1&include_adult=false`,
      )
      .then(res => {
        setData(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, [search]);
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

  const onDetail = () => {
    setShow(false);
    console.log(detail);
    navigation.navigate('Detail', detail);
  };
  return (
    <>
      <View style={styles.container}>
        <Header title="Search" />
        <View style={styles.wrapperInput}>
          <TouchableOpacity>
            <Icon name="search1" color="#FF7314" size={20} />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="search movie"
            placeholderTextColor="#F4F4F4"
            onChangeText={e => setSearch(e)}
          />
        </View>
        <View style={styles.wrapperFlatlist}>
          <FlatList
            data={data?.results}
            renderItem={renderItem}
            numColumns={3}
            keyExtractor={item => item.id}
          />
        </View>
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

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#22211F',
    flex: 1,
  },
  wrapperInput: {
    backgroundColor: '#393534',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  input: {
    color: '#F4F4F4',
    marginLeft: 5,
  },
  image: {
    width: 110,
    height: 200,
    margin: 5,
    borderRadius: 8,
  },
  wrapperFlatlist: {paddingHorizontal: 10, marginTop: 20, flex: 1},
});
