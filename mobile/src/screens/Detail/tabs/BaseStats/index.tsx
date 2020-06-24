import React, {useMemo} from 'react';
import {View, Text} from 'react-native';

interface BaseStatsProps {
   stats: {
      base_stat: number;
      effort: number;
      stat: {
         name: string;
      };
   }[];
}

const BaseStats: React.FC<BaseStatsProps> = ({stats}) => {
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

   return (
      <View>
         {formattedStats.map((s) => (
            <Text>{s?.stat.name}</Text>
         ))}
      </View>
   );
};

export default BaseStats;
