import React, {useEffect, useState} from 'react';

import {View, Image} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

import {useNavigation} from '@react-navigation/native';
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
   name: string;
}

const Pokemon: React.FC<PokemonData> = ({data}) => {
   const [types, setTypes] = useState<TypeProps[]>([]);
   const [color, setColor] = useState('');
   const {navigate} = useNavigation();

   useEffect(() => {
      async function loadTypes(): Promise<void> {
         const response = await api.get(`/pokemon/${data.id}`);

         const formatted = response.data.types.map(({type}) => {
            return {
               name: type.name.replace(/^./, type.name[0].toUpperCase()),
            };
         });

         setColor(getColorByType(formatted[0].name));

         setTypes(formatted);
      }

      loadTypes();
   }, [data]);

   return (
      <Container
         color={color || '#f2f2f2'}
         onPress={() => navigate('Detail', {data})}>
         <TextID>#{data.id.padStart(3, '0')}</TextID>
         <TextName>
            {data.name.replace(/^./, data.name[0].toUpperCase())}
         </TextName>

         <Content>
            <View>
               {types.map((t) => (
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
               <SharedElement id={`pokemon-photo-${data.id}`}>
                  <Image
                     style={{height: 85, width: 85}}
                     source={{
                        uri: `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`,
                     }}
                  />
               </SharedElement>
            </ImageView>
         </Content>
      </Container>
   );
};

export default Pokemon;
