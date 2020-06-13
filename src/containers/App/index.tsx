import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';

import Keyboard from '../Keyboard';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#d1d1d6',
        }}
      />
      <Keyboard />
    </View>
  );
};

export default App;
