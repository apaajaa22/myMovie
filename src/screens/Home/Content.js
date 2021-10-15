import React from 'react';
import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useEffect, useState} from 'react/cjs/react.development';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import ModalContent from '../../components/ModalContent';

const Content = () => {
  const [data, setData] = useState({});
  const [show, setShow] = useState(false);
  const getData = () => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/639721?api_key=89ccad7569150e3e3b6909a5fce93a0a&language=en-US',
      )
      .then(res => {
        setData(res.data);
        console.log(res.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <View>
        <Image
          style={styles.imageHero}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
          }}
        />
        <View style={styles.wrapperGenres}>
          {data.genres?.map(res => {
            return (
              <Text key={res.id} style={styles.textGenres}>
                {res.name}
              </Text>
            );
          })}
        </View>
        <View style={styles.wrapperAction}>
          <View style={styles.wrapperActionOne}>
            <Ionicons name="add" color="#F4F4F4" size={25} />
            <Text style={styles.textWhite}>Daftar Saya</Text>
          </View>
          <View style={styles.wrapperActionTwo}>
            <Ionicons name="play" color="#22211F" size={25} />
            <Text style={styles.textBlack}>Putar</Text>
          </View>
          <TouchableOpacity
            onPress={() => setShow(true)}
            style={styles.wrapperActionOne}>
            <Ionicons
              name="information-circle-outline"
              color="#F4F4F4"
              size={25}
            />
            <Text style={styles.textWhite}>Info</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ModalContent
        img={data.poster_path}
        title={data.original_title}
        release={data.release_date}
        overview={data.overview}
        onPressBackground={() => setShow(false)}
        onPressClose={() => setShow(false)}
        visible={show}
      />
    </>
  );
};

export default Content;

const styles = StyleSheet.create({
  wrapperGenres: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textGenres: {
    color: '#F4F4F4',
    marginHorizontal: 10,
    textAlign: 'center',
  },
  wrapperAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    marginTop: 20,
  },
  wrapperActionOne: {alignItems: 'center'},
  textWhite: {
    color: '#F4F4F4',
    fontSize: 12,
  },
  wrapperActionTwo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: -25,
  },
  textBlack: {
    color: '#22211F',
    marginLeft: 5,
    fontWeight: '600',
  },
  imageHero: {
    height: 300,
    width: '100%',
    resizeMode: 'center',
    borderRadius: 10,
  },
});
