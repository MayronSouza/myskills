import React from 'react';
import { StatusBar } from 'react-native';
import { Home } from './src/pages/Home';

export const App = ()  => {
  return (
    <>
      <StatusBar
        barStyle='light-content'
        backgroundColor='#1f1e25'
      />
      <Home />
    </>
  );
}