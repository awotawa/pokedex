import styled from '@emotion/native';
import {Text, View} from 'react-native';

export const GreetingText = styled(Text)({
  color: 'green',
  textAlign: 'center',
});

export const GreetingView = styled(View)({
  backgroundColor: 'red',
  width: 70,
  height: 70,
  alignItems: 'center',
  justifyContent: 'center',
  margin: 20,
});
