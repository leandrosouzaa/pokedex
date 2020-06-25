import React, {useMemo} from 'react';

import {Text, ActivityIndicator} from 'react-native';

import {Container} from './styles';

interface MovesProps {
   color: string;
   moves: {
      name: string;
      learned_at: number;
      learn_method: string;
   };
}

const BaseStats: React.FC<MovesProps> = ({color, moves}) => {
   if (!moves) {
      return (
         <Container>
            <ActivityIndicator animating size={50} color={color} />
         </Container>
      );
   }

   return (
      <Container>
         <Text>Olá</Text>
      </Container>
   );
};

export default BaseStats;
