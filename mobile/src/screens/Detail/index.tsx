import React from 'react';

import {View, Image} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {useRoute} from '@react-navigation/native';

interface RouteParamsProps {
   data: {
      id: number;
      name: string;
   };
}

const Detail: React.FC = () => {
   const {params} = useRoute();

   const routeParams = params as RouteParamsProps;

   return (
      <View>
         <SharedElement id={`pokemon-photo-${routeParams.data.id}`}>
            <Image
               style={{height: 150, width: 150}}
               source={{
                  uri: `https://pokeres.bastionbot.org/images/pokemon/${routeParams.data.id}.png`,
               }}
            />
         </SharedElement>
      </View>
   );
};

export default Detail;
