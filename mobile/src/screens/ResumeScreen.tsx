import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export const ResumeScreen = ({navigation}: any) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>ResumeScreen -------!!!</Text>

      <TouchableOpacity onPress={() => navigation.navigate('search')}>
        <Text style={{color: 'green'}}>перейти в каталог</Text>
      </TouchableOpacity>
    </View>
  );
};
