import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useEffect, useState} from 'react/cjs/react.development';
import Button from '../../components/Button';
import Gap from '../../components/Gap';
import Input from '../../components/Input';
import RadioButton from '../../components/RadioButton';
import {formValidations} from '../../helpers/formValidations';
import {getData} from '../../helpers/localStorage';

const Register2 = ({navigation}) => {
  const options = ['Yes', 'No'];
  const [opt, setOpt] = useState('Yes');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [dataForm, setDataForm] = useState({});

  const formData = {
    ...dataForm,
    number,
    address,
    opt,
  };

  const onSubmit = () => {
    formValidations(formData, navigation, 'Confirmation');
  };

  useEffect(() => {
    getData('user').then(form => setDataForm(form));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titlePage}>Sign up</Text>
      <Text style={styles.labelRadioBtn}>Have a Laptop / PC?</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapperRow}>
          {options.map((data, idx) => {
            return (
              <RadioButton
                key={idx}
                label={data}
                active={data === opt}
                onPress={() => {
                  setOpt(data);
                }}
              />
            );
          })}
        </View>
        <Gap height={10} />
        <Input
          title="Address"
          onChangeText={e => setAddress(e)}
          value={address}
          multiline
          numberOfLines={4}
        />
        <Gap height={20} />
        <Input
          title="Mobile number"
          onChangeText={e => setNumber(e)}
          value={number}
          keyboardType="number-pad"
        />
      </ScrollView>
      <View style={styles.wrapperButton}>
        <Button title="Back" width="40%" onPress={() => navigation.goBack()} />
        <Button title="Next" primary width="40%" onPress={onSubmit} />
      </View>
    </View>
  );
};

export default Register2;

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
  labelRadioBtn: {
    color: '#F4F4F4',
    marginBottom: 15,
    fontSize: 14,
    fontWeight: '500',
  },
  wrapperRow: {flexDirection: 'row', alignItems: 'center'},
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
  wrapperButton: {flexDirection: 'row', justifyContent: 'space-between'},
});
