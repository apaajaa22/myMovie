/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../../components/Header';
import YoutubePlayer from 'react-native-youtube-iframe';
import axios from 'axios';
import Icon from 'react-native-vector-icons/AntDesign';

const Detail = ({route}) => {
  const {id, title, overview, release_date, vote_average} = route.params;
  const [link, setLink] = useState('');

  const getDetail = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=89ccad7569150e3e3b6909a5fce93a0a&language=en-US`,
      )
      .then(res => {
        setLink(res?.data?.results[0]?.key);
      });
  };
  useEffect(() => {
    getDetail();
  }, []);
  return (
    <View style={styles.container}>
      <Header back />
      <YoutubePlayer height={300} play={true} videoId={link} />
      <View style={styles.wrapperContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.release}>{release_date}</Text>
        <Text style={styles.overview}>{overview}</Text>
        <View style={styles.wrapperIcon}>
          <Icon name="star" color="#FF7314" size={20} />
          <Text style={styles.vote}>{vote_average}</Text>
        </View>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#22211F',
    flex: 1,
  },
  wrapperContent: {paddingHorizontal: 15},
  title: {
    color: '#F4F4F4',
    fontSize: 22,
    fontWeight: '600',
    marginTop: -50,
    marginBottom: 10,
  },
  release: {color: '#F4F4F4', fontSize: 12},
  overview: {
    color: '#F4F4F4',
    marginTop: 10,
  },
  wrapperIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  vote: {
    color: '#F4F4F4',
    marginLeft: 10,
  },
});
