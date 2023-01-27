import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export const ProfileScreen = ({navigation}: any) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>ProfileScreen -------!!!</Text>

      <TouchableOpacity onPress={() => navigation.navigate('resume')}>
        <Text style={{color: 'green'}}>перейти к резюме</Text>
      </TouchableOpacity>
    </View>
  );
};
