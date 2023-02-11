import React from 'react';
import {SafeAreaView} from 'react-native';

import {Greeting} from './src/shared/View/components/Greeting/Greeting.component';

const App = () => {
  return (
    <SafeAreaView>
      <Greeting />
    </SafeAreaView>
  );
};

export default App;
