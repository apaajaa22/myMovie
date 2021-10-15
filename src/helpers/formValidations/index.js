import {ToastAndroid} from 'react-native';
import {storeData} from '../localStorage';

export const formValidations = (formData, navigation, route) => {
  if (formData.firstName.length < 1) {
    ToastAndroid.showWithGravity(
      'First name is required',
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
    );
  } else if (formData.lastname.length < 1) {
    ToastAndroid.showWithGravity(
      'Last name is required',
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
    );
  } else if (formData.jobdesc[0].length < 1) {
    ToastAndroid.showWithGravity(
      'Job desc is required',
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
    );
  } else if (formData.email.length < 1) {
    ToastAndroid.showWithGravity(
      'Email is required',
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
    );
  } else if (!formData.email.includes('@')) {
    ToastAndroid.showWithGravity(
      'Bad email format',
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
    );
  } else if (formData?.address?.length < 1) {
    ToastAndroid.showWithGravity(
      'Address is required',
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
    );
  } else if (formData?.number?.length < 1) {
    ToastAndroid.showWithGravity(
      'Mobile number is required',
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
    );
  } else {
    storeData('user', formData);
    navigation.navigate(route);
  }
};
