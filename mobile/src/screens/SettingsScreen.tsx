import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text, TouchableOpacity} from 'react-native';
import {FormikText} from 'src/components/form/fields/FormikText';
import {Formik} from 'formik';

export const SettingsScreen = () => {
  const initialValues = {
    text: '',
  };

  const onSubmit = (val: any) => {
    console.log('onSubmit ', val);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View>
        <Ionicons name="md-location" size={34} color={'blue'} />
      </View>
      <Text>Settingsddd!</Text>

      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({handleSubmit}) => (
          <View>
            <FormikText name="text" />
            <TouchableOpacity onPress={handleSubmit}>
              <Text>send</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};
