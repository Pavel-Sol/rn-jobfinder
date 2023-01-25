import React from 'react';
import {View, Text} from 'react-native';
import {useAppSelector, useAppDispatch} from 'src/hooks';
import {makeStyle} from './style';

export const CatalogScreen = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(state => state.app.theme);
  const s = makeStyle(theme);

  return (
    <View style={s.container}>
      <Text>CatalogScreen</Text>
    </View>
  );
};
