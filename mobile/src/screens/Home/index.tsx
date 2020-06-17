import React from 'react';

import {Image} from 'react-native';
import {Pokemon} from '../../components';
import {Container, Title, PokeList} from './styles';

const Home: React.FC = () => {
   return (
      <Container
         imageStyle={{
            width: 163,
            height: 192,
            position: 'absolute',
            left: undefined,
         }}
         source={require('../../assets/images/pokeball.jpg')}>
         <Title>Pokedex</Title>
         <PokeList>
            <Pokemon />
            <Pokemon />
         </PokeList>
      </Container>
   );
};

export default Home;
