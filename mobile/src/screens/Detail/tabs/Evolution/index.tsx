import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

interface EvolutionProps {
   color: string;
}

const Evolution: React.FC<EvolutionProps> = ({color}) => {
   if (1) {
      return (
         <View>
            <ActivityIndicator animating size={50} color={color} />
         </View>
      );
   }

   return (
      <View>
         <Text>Evolution</Text>
      </View>
   );
};

export default Evolution;
