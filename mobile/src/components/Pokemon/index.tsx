/* eslint-disable no-self-compare */
import React, {useEffect, useState, useMemo} from 'react';

import {View, Image} from 'react-native';

import getColorByType from '../../utils/getColorByType';
import api from '../../services/api';

import {
   Container,
   TextID,
   TextName,
   TypeContainer,
   TypeText,
   Content,
   ImageView,
} from './styles';

interface PokemonData {
   data: {
      name: string;
      id: string;
   };
}

interface TypeProps {
   type: {
      name: string;
   };
}

const Pokemon: React.FC<PokemonData> = ({data}) => {
   const [types, setTypes] = useState<TypeProps[]>([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      async function loadTypes(): Promise<void> {
         setLoading(true);
         const response = await api.get(`pokemon/${data.id}`);

         setTypes(response.data.types);
      }

      loadTypes();
   }, [data]);

   const color = useMemo(() => {
      const type = types.find((t) => t.type === t.type);
      setLoading(false);
      return getColorByType(type?.type.name);
   }, [types]);

   const formattedTypes = useMemo(() => {
      const formatted = types.map(({type}) => {
         return {
            name: type.name.replace(/^./, type.name[0].toUpperCase()),
         };
      });

      return formatted;
   }, [types]);

   return (
      <>
         <Container color={color}>
            <TextID>#{data.id.padStart(3, '0')}</TextID>
            <TextName>
               {data.name.replace(/^./, data.name[0].toUpperCase())}
            </TextName>

            <Content>
               <View>
                  {formattedTypes.map((t) => (
                     <TypeContainer key={t.name}>
                        <TypeText>{t.name}</TypeText>
                     </TypeContainer>
                  ))}
               </View>

               <ImageView
                  source={require('../../assets/images/pokeball.png')}
                  imageStyle={{
                     opacity: 0.2,
                     position: 'absolute',
                     height: 83,
                     width: 83,
                     left: undefined,
                     top: undefined,
                  }}>
                  <Image
                     style={{height: 80, width: 80}}
                     source={{
                        uri: `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`,
                     }}
                  />
               </ImageView>
            </Content>
         </Container>
      </>
   );
};

export default Pokemon;
