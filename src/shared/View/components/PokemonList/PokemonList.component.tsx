import React from 'react';
import {FlatList} from 'react-native';
import {
  CardItem,
  Container,
  PokemonImage,
  PokemonName,
} from './PokemonList.component.styles';

export interface PokemonData {
  name: string;
  url: string;
}

export interface Pokemon {
  name: string;
  detailUrl: string;
  imageUrl: string;
}

interface PokemonDetailProps {
  item: Pokemon;
}

const extractPokemonOrder = (url: string) => {
  // Other regex possible https://regex101.com/r/hm09P8/1
  const regex = /(?<=\/v2\/pokemon\/)\d+(?=\/$)/;
  const arrMatch = url.match(regex);
  if (!arrMatch) {
    return 132;
  }
  return arrMatch[0];
};

const adaptPokemon = (pokemonData: PokemonData[]): Pokemon[] => {
  return pokemonData.map(data => {
    const id = extractPokemonOrder(data.url);
    return {
      name: data.name,
      detailUrl: data.url,
      imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
    };
  });
};

const PokemonListItem = ({item}: PokemonDetailProps) => {
  return (
    <Container>
      <CardItem>
        <PokemonImage
          source={{
            uri: item.imageUrl,
          }}
        />
        <PokemonName>{item.name}</PokemonName>
      </CardItem>
    </Container>
  );
};

export const PokemonList = () => {
  const pokemons = adaptPokemon(require('./pokedex-data.json'));
  return <FlatList data={pokemons} renderItem={PokemonListItem} />;
};
