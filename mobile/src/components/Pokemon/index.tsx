import React from 'react';

import {View, Image} from 'react-native';
import {
   Container,
   TextID,
   TextName,
   TypeContainer,
   TypeText,
   Content,
   ImageView,
} from './styles';

const Pokemon: React.FC = () => (
   <>
      <Container>
         <TextID>#001</TextID>
         <TextName>Bulbassaur</TextName>

         <Content>
            <View>
               <TypeContainer>
                  <TypeText>Grass</TypeText>
               </TypeContainer>

               <TypeContainer>
                  <TypeText>Poison</TypeText>
               </TypeContainer>
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
                     uri:
                        'https://pokeres.bastionbot.org/images/pokemon/22.png',
                  }}
               />
            </ImageView>
         </Content>
      </Container>
   </>
);

export default Pokemon;
