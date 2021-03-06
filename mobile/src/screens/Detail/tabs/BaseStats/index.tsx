import React, {useMemo} from 'react';

import {ActivityIndicator} from 'react-native';

import {FlatList} from 'react-native-gesture-handler';
import {
   Container,
   StatsGrid,
   StatsTitle,
   StatsValue,
   StatsValueView,
   StatsValueRepresentation,
} from './styles';

interface BaseStatsProps {
   color: string;
   stats: {
      base_stat: number;
      effort: number;
      stat: {
         name: string;
      };
   }[];
}

const BaseStats: React.FC<BaseStatsProps> = ({color, stats}) => {
   const formattedStats = useMemo(() => {
      const newStats = stats.map((s) => {
         if (s.stat.name === 'special-defense') {
            s.stat.name = 'Sp. Def';
         }

         if (s.stat.name === 'special-attack') {
            s.stat.name = 'Sp. Atk';
         }

         s.stat.name = s.stat.name.replace(/^./, s.stat.name[0].toUpperCase());

         return s;
      });
      return newStats;
   }, [stats]);

   const totalPoints = useMemo(() => {
      const sumPoints = stats.reduce((total, s) => total + s.base_stat, 0);

      return sumPoints;
   }, [stats]);

   if (!formattedStats || !totalPoints) {
      return (
         <Container>
            <ActivityIndicator animating size={50} color={color} />
         </Container>
      );
   }

   return (
      <Container>
         <FlatList
            data={formattedStats}
            showsVerticalScrollIndicator={false}
            keyExtractor={(i) => i.stat.name}
            renderItem={({item}) => (
               <StatsGrid>
                  <StatsTitle>{item.stat.name}</StatsTitle>
                  <StatsValue>{item.base_stat}</StatsValue>
                  <StatsValueView>
                     <StatsValueRepresentation value={item.base_stat} />
                  </StatsValueView>
               </StatsGrid>
            )}
            ListFooterComponent={
               <StatsGrid>
                  <StatsTitle>Total</StatsTitle>
                  <StatsValue>{totalPoints}</StatsValue>
               </StatsGrid>
            }
         />
      </Container>
   );
};

export default BaseStats;
