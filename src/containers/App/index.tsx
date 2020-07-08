import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';

import store from '../../redux/store';

import Keyboard from '../Keyboard';
import Display from '../Display';

const App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Display />
        <Keyboard />
      </View>
    </Provider>
  );
};

export default App;
