import * as React from 'react';
import {screen, render} from '@testing-library/react-native';
import {Greeting} from './Greeting.component';

describe('Greeting component', () => {
  it('should render correctly', () => {
    render(<Greeting />);
    expect(screen).toMatchSnapshot();
  });
});
