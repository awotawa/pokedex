import styled from '@emotion/native';
import React from 'react';
import {SafeAreaView} from 'react-native';

import {PokemonList} from './src/shared/View/components/PokemonList/PokemonList.component';

const App = () => {
  return (
    <StyledSafeAreaView>
      <PokemonList />
    </StyledSafeAreaView>
  );
};

export default App;

const StyledSafeAreaView = styled(SafeAreaView)({
  flex: 1,
  padding: 24,
  justifyContent: 'center',
  alignItems: 'center',
});
