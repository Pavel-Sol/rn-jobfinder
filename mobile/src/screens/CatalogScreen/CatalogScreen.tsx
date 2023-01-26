import axios from 'axios';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useAppSelector, useAppDispatch} from 'src/hooks';
import {getVacancies} from 'src/redux/asyncActions/vacancyActions';
import {makeStyle} from './style';

export const CatalogScreen = () => {
  const theme = useAppSelector(state => state.app.theme);
  const dispatch = useAppDispatch();
  const vacancies = useAppSelector(state => state.vacancy.vacancies);
  const s = makeStyle(theme);

  console.log('CatalogScreen', vacancies);

  useEffect(() => {
    dispatch(getVacancies(''));
  }, [dispatch]);

  return (
    <View style={s.container}>
      <Text>CatalogScreen</Text>
    </View>
  );
};
