import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useEffect, useState} from 'react/cjs/react.development';
import Button from '../../components/Button';
import ItemData from '../../components/ItemData';
import {getData, removeValue} from '../../helpers/localStorage';

const Confirmation = ({navigation}) => {
  const [form, setForm] = useState({});

  useEffect(() => {
    getData('user').then(res => {
      setForm(res);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titlePage}>Confirmation data of entry</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.flex}>
          <ItemData
            title="Fullname:"
            value={`${form.firstName} ${form.lastname}`}
          />
          {form.jobdesc?.map((data, idx) => {
            return (
              <ItemData key={idx} title="Jobdesc:" value={data?.jobdesc} />
            );
          })}
          <ItemData title="Gender:" value={form.gender} />
          <ItemData title="Have a Laptop/PC:" value={form.opt} />
          <ItemData title="Mobile number" value={form.number} />
          <ItemData title="Address" value={form.address} />
        </View>
      </ScrollView>
      <View style={styles.wrapperButton}>
        <Button title="Back" width="40%" onPress={() => navigation.goBack()} />
        <Button
          title="Submit"
          primary
          width="40%"
          onPress={() => removeValue('user')}
        />
      </View>
    </View>
  );
};

export default Confirmation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#393534',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  flex: {flex: 1},
  titlePage: {
    fontWeight: '500',
    color: '#F4F4F4',
    marginBottom: 30,
    fontSize: 20,
  },
  wrapperButton: {flexDirection: 'row', justifyContent: 'space-between'},
});
