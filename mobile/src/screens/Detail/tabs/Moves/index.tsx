import React from 'react';

import {ActivityIndicator} from 'react-native';

import {FlatList} from 'react-native-gesture-handler';
import {Container, MoveTable, MoveTitle, MoveValue} from './styles';

interface MovesProps {
   color: string;
   moves: {
      name: string;
      learned_at: number;
      learn_method: string;
   }[];
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
         <MoveTable>
            <MoveTitle>Name</MoveTitle>
            <MoveTitle>Learned At</MoveTitle>
            <MoveTitle>Method</MoveTitle>
         </MoveTable>
         <FlatList
            keyExtractor={(item) => item.name}
            renderItem={({item}) => (
               <MoveTable>
                  <MoveValue>{item.name}</MoveValue>
                  <MoveValue>{item.learned_at}</MoveValue>
                  <MoveValue>{item.learn_method}</MoveValue>
               </MoveTable>
            )}
            data={moves}
         />
      </Container>
   );
};

export default BaseStats;
