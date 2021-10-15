import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../../components/Button';
import Gap from '../../components/Gap';
import Input from '../../components/Input';
import {formValidations} from '../../helpers/formValidations';

const Register = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastname, setLastname] = useState('');
  const [jobdesc, setJobdesc] = useState([{jobdesc: ''}]);
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('male');

  const formData = {
    firstName,
    lastname,
    jobdesc,
    email,
    gender,
  };

  const inputForm = (value, idx) => {
    const _jobdesc = [...jobdesc];
    _jobdesc[idx].jobdesc = value;
    setJobdesc(_jobdesc);
  };

  const onAddForm = () => {
    const _jobdesc = [...jobdesc];
    _jobdesc.push({jobdesc: ''});
    setJobdesc(_jobdesc);
  };

  const deleteForm = idx => {
    const _jobdesc = jobdesc.filter((e, index) => index !== idx);
    setJobdesc(_jobdesc);
  };

  const onSubmit = () => {
    formValidations(formData, navigation, 'Register2');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titlePage}>Sign up</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapperRow}>
          <Input
            onChangeText={e => setFirstName(e)}
            value={firstName}
            title="First name"
            row
          />
          <Gap width={15} />
          <Input
            onChangeText={e => setLastname(e)}
            value={lastname}
            title="Last name"
            row
          />
        </View>
        <Gap height={10} />
        {jobdesc.map((data, idx) => {
          return (
            <View key={idx} style={styles.wrapperJobdesc}>
              <Input
                onChangeText={e => inputForm(e, idx)}
                value={data.jobdesc}
                title="Jobdesc"
                row
              />
              <TouchableOpacity onPress={onAddForm} style={styles.wrapperIcon}>
                <Text style={styles.icon}>+</Text>
              </TouchableOpacity>
              {jobdesc.length > 1 && (
                <TouchableOpacity
                  onPress={() => deleteForm(idx)}
                  style={styles.wrapperIcon}>
                  <Text style={styles.icon}>-</Text>
                </TouchableOpacity>
              )}
            </View>
          );
        })}
        <Gap height={20} />
        <Text style={styles.title}>Gender</Text>
        <View style={styles.picker}>
          <Picker
            selectedValue={gender}
            onValueChange={(itemValue, itemIndex) => setGender(itemValue)}>
            <Picker.Item style={styles.pickerItem} label="male" value="male" />
            <Picker.Item label="female" value="female" />
          </Picker>
        </View>
        <Input title="Email" onChangeText={e => setEmail(e)} value={email} />
      </ScrollView>
      <Button
        onPress={onSubmit}
        title="Next"
        alignSelf="flex-end"
        primary
        width="40%"
      />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#393534',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  titlePage: {
    fontWeight: '500',
    color: '#F4F4F4',
    marginBottom: 30,
    fontSize: 20,
  },
  wrapperRow: {flexDirection: 'row'},
  title: {
    color: '#F4F4F4',
    fontWeight: '500',
    marginBottom: 10,
  },
  picker: {
    backgroundColor: '#F4F4F4',
    marginBottom: 10,
    borderRadius: 5,
  },
  pickerItem: {fontSize: 14, color: '#22211F'},
  wrapperJobdesc: {flexDirection: 'row', alignItems: 'center'},
  wrapperIcon: {
    marginTop: 35,
    marginLeft: 10,
  },
  icon: {color: '#F4F4F4', fontSize: 24},
});
