import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const ModalContent = ({
  visible,
  onPressBackground,
  img,
  title,
  onPressClose,
  release,
  overview,
  onPressDetail,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <TouchableOpacity
        style={styles.heightModal}
        onPress={onPressBackground}
      />
      <View style={styles.wrapperContentModal}>
        <View style={styles.modalWrapperContent}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${img}`,
            }}
            style={styles.imageDetail}
          />
          <View style={{flex: 1}}>
            <View style={styles.wrapperTitle}>
              <Text style={styles.titleDetail}>{title}</Text>
              <TouchableOpacity onPress={onPressClose}>
                <Feather name="x" color="#F4F4F4" size={20} />
              </TouchableOpacity>
            </View>
            <Text style={styles.textRelease}>Release {release}</Text>
            <Text style={styles.textDesc}>{overview}</Text>
          </View>
        </View>
        <View style={styles.wrapperActionDetail}>
          <View style={styles.wrapperActionTwo}>
            <Ionicons name="play" color="#22211F" size={25} />
            <Text style={styles.textBlack}>Putar</Text>
          </View>
          <View style={styles.wrapperActionOne}>
            <Ionicons name="download" color="#F4F4F4" size={25} />
            <Text style={styles.textWhite}>Download</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.wrapperinfo} onPress={onPressDetail}>
          <View style={styles.wrapperinfoSub}>
            <Ionicons
              name="information-circle-outline"
              color="#F4F4F4"
              size={25}
            />
            <Text style={styles.textInfo}>Episode & Informasi</Text>
          </View>
          <Ionicons name="chevron-forward-outline" color="#F4F4F4" size={25} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ModalContent;

const styles = StyleSheet.create({
  wrapperAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    marginTop: 20,
  },
  wrapperActionOne: {alignItems: 'center', marginHorizontal: 20},
  textWhite: {
    color: '#F4F4F4',
    fontSize: 12,
  },
  wrapperActionTwo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 50,
    paddingVertical: 5,
    borderRadius: 5,
  },
  textBlack: {
    color: '#22211F',
    marginLeft: 5,
    fontWeight: '600',
  },
  heightModal: {height: '55%'},
  wrapperContentModal: {
    backgroundColor: '#393534',
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  imageHero: {
    height: 300,
    width: '100%',
    resizeMode: 'center',
    borderRadius: 10,
  },
  imageDetail: {
    height: 180,
    width: 120,
    resizeMode: 'center',
    borderRadius: 10,
    marginRight: 10,
  },
  modalWrapperContent: {
    flexDirection: 'row',
  },
  wrapperTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleDetail: {
    fontWeight: 'bold',
    color: '#F4F4F4',
    fontSize: 16,
  },
  textRelease: {fontSize: 12, color: '#F4F4F4', marginTop: 8},
  textDesc: {color: '#F4F4F4', fontSize: 14, marginTop: 10, fontWeight: '500'},
  wrapperActionDetail: {
    flexDirection: 'row',
    marginTop: 20,
    flex: 1,
  },

  wrapperinfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  wrapperinfoSub: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  textInfo: {
    color: '#F4F4F4',
    marginLeft: 10,
  },
});
