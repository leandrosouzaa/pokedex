import React, {useState, useEffect} from 'react';

import {useRoute, useNavigation} from '@react-navigation/native';
import {Image, View, TouchableOpacity} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import Icon from 'react-native-vector-icons/Feather';
import {Tab, Tabs, ScrollableTab} from 'native-base';

import api from '../../services/api';
import {About, BaseStats, Evolution} from './tabs';

import {
   Container,
   PokemonInfo,
   Name,
   TypeContainer,
   TypeText,
   Id,
   PokemonGrid,
   PokemonPicture,
   PokemonHeader,
} from './styles';

interface RouteParamsProps {
   data: {
      id: number;
      name: string;
   };
   color: string;
   types: {
      name: string;
   }[];
}

interface StatsProps {
   base_stat: number;
   effort: number;
   stat: {
      name: string;
   };
}

interface MeasuresProps {
   height: number;
   weight: number;
}

interface EggGroupsProps {
   name: string;
}

const Detail: React.FC = () => {
   const {params} = useRoute();
   const {goBack} = useNavigation();
   const {data, color, types} = params as RouteParamsProps;

   const [stats, setStats] = useState<StatsProps[]>([]);
   const [measure, setMeasure] = useState<MeasuresProps>({} as MeasuresProps);
   const [description, setDescription] = useState<string>('');

   useEffect(() => {
      async function loadData(): Promise<void> {
         const response = await api.get(`/pokemon/${data.id}`);
         setStats(response.data.stats);

         const {weight, height} = response.data;
         setMeasure({height, weight});
      }

      loadData();
   }, [data.id]);

   useEffect(() => {
      async function loadSpecieData(): Promise<void> {
         const response = await api.get(`pokemon-species/${data.id}`);

         const {flavor_text} = response.data.flavor_text_entries[0];

         setDescription(
            flavor_text
               .replace(/\n/g, ' ')
               .replace('\u000c', ' ')
               .replace('é', 'E'),
         );
      }

      loadSpecieData();
   }, [data.id]);

   return (
      <Container color={color}>
         <PokemonHeader
            source={require('../../assets/images/Element.png')}
            color={color}
            imageStyle={{
               opacity: 0.6,
               right: 40,
               top: 0,
               marginRight: 20,
            }}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => goBack()}>
               <Icon size={24} color="#fff" name="arrow-left" />
            </TouchableOpacity>
            <PokemonGrid>
               <View>
                  <SharedElement id={`pokemon-title-${data.id}`}>
                     <Name>
                        {data.name.replace(/^./, data.name[0].toUpperCase())}
                     </Name>
                  </SharedElement>
                  <View style={{flexDirection: 'row'}}>
                     {types.map((t) => (
                        <TypeContainer key={t.name}>
                           <TypeText>{t.name}</TypeText>
                        </TypeContainer>
                     ))}
                  </View>
               </View>
               <SharedElement id={`pokemon-id-${data.id}`}>
                  <Id>#{data.id.toString().padStart(3, '0')}</Id>
               </SharedElement>
            </PokemonGrid>
         </PokemonHeader>
         <PokemonInfo>
            <PokemonPicture>
               <SharedElement id={`pokemon-photo-${data.id}`}>
                  <Image
                     style={{
                        height: 224,
                        width: 224,
                        marginTop: -248,
                     }}
                     source={{
                        uri: `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`,
                     }}
                  />
               </SharedElement>
            </PokemonPicture>
            <Tabs
               style={{marginTop: -20}}
               tabBarUnderlineStyle={{
                  backgroundColor: color,
                  borderRadius: 200,
               }}
               tabContainerStyle={{
                  elevation: 0,
                  height: 50,
               }}>
               <Tab
                  tabStyle={{
                     backgroundColor: '#fff',
                     borderColor: '#F4F5F4',
                     borderBottomWidth: 1,
                     borderTopWidth: 0,
                  }}
                  activeTabStyle={{
                     backgroundColor: '#fff',
                  }}
                  activeTextStyle={{
                     fontFamily: 'CircularStd-Book',
                     color: '#303943',
                  }}
                  textStyle={{
                     color: 'rgba(48,57,67, 0.4)',
                     fontFamily: 'CircularStd-Book',
                  }}
                  heading="About">
                  <About description={description} measure={measure} />
               </Tab>
               <Tab
                  tabStyle={{
                     backgroundColor: '#fff',
                     borderColor: '#F4F5F4',
                     borderBottomWidth: 1,
                  }}
                  activeTabStyle={{
                     backgroundColor: '#fff',
                  }}
                  activeTextStyle={{
                     fontFamily: 'CircularStd-Book',
                     color: '#303943',
                  }}
                  textStyle={{
                     color: 'rgba(48,57,67, 0.4)',
                     fontFamily: 'CircularStd-Book',
                  }}
                  heading="Stats">
                  <BaseStats stats={stats} />
               </Tab>
               <Tab
                  tabStyle={{
                     backgroundColor: '#fff',
                     borderColor: '#F4F5F4',
                     borderBottomWidth: 1,
                  }}
                  activeTabStyle={{
                     backgroundColor: '#fff',
                  }}
                  activeTextStyle={{
                     fontFamily: 'CircularStd-Book',
                     color: '#303943',
                  }}
                  textStyle={{
                     color: 'rgba(48,57,67, 0.4)',
                     fontFamily: 'CircularStd-Book',
                  }}
                  heading="Evolution">
                  <Evolution />
               </Tab>
               <Tab
                  tabStyle={{
                     backgroundColor: '#fff',
                     borderColor: '#F4F5F4',
                     borderBottomWidth: 1,
                  }}
                  activeTabStyle={{
                     backgroundColor: '#fff',
                  }}
                  activeTextStyle={{
                     fontFamily: 'CircularStd-Book',
                     color: '#303943',
                  }}
                  textStyle={{
                     color: 'rgba(48,57,67, 0.4)',
                     fontFamily: 'CircularStd-Book',
                  }}
                  heading="Moves">
                  <Evolution />
               </Tab>
            </Tabs>
         </PokemonInfo>
      </Container>
   );
};

export default Detail;
