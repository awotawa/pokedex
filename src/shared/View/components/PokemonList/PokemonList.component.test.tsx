import * as React from 'react';
import {screen, render} from '@testing-library/react-native';
import {PokemonList} from './PokemonList.component';

describe('PokemonList component', () => {
  it('should render correctly', () => {
    render(<PokemonList />);
    expect(screen).toMatchSnapshot();
  });
});
