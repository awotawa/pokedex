import styled from '@emotion/native';
import {Image, Text, View} from 'react-native';

export const Container = styled(View)({
  flex: 1,
});

export const CardItem = styled(View)({
  width: 300,
  height: 200,
  borderColor: '#20232a',
  borderRadius: 6,
  borderWidth: 2,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
  marginVertical: 8,
  marginHorizontal: 16,
});

export const PokemonImage = styled(Image)({
  width: 150,
  height: 150,
});

export const PokemonName = styled(Text)({
  fontSize: 25,
  fontWeight: 'bold',
  textAlign: 'center',
});
