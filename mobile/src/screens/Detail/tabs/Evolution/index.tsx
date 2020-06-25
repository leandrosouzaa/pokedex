import React, {useEffect, useState} from 'react';

import {View, Text, Image, ActivityIndicator} from 'react-native';
import axios from 'axios';

import Icon from 'react-native-vector-icons/Feather';
import {
   Container,
   PokemonContainer,
   PokemonName,
   LevelContainer,
   LevelText,
} from './styles';

interface EvolutionProps {
   color: string;
   evolutionChain: string;
}

interface PokemonEvolutionProps {
   item: {
      name: string;
   };
   min_level: string;
   pokemon_id: string;
   species_name: string;
}

const Evolution: React.FC<EvolutionProps> = ({color, evolutionChain}) => {
   const [evolutionList, setEvolutionList] = useState<PokemonEvolutionProps[]>(
      [],
   );

   useEffect(() => {
      async function loadEvolution(): Promise<void> {
         if (!evolutionChain) {
            return;
         }

         const response = await axios.get(evolutionChain);

         const evoChain = [];
         let evoData = response.data.chain;

         do {
            const evoDetails = evoData.evolution_details[0];

            evoChain.push({
               species_name: evoData.species.name.replace(
                  /^./,
                  evoData.species.name[0].toUpperCase(),
               ),
               pokemon_id: evoData.species.url.split('/')[
                  evoData.species.url.split('/').length - 2
               ],
               min_level: !evoDetails ? 1 : evoDetails.min_level,
               trigger_name: !evoDetails ? null : evoDetails.trigger.name,
               item: !evoDetails ? null : evoDetails.item,
            });

            evoData = evoData.evolves_to[0];
         } while (!!evoData && evoData.hasOwnProperty('evolves_to'));

         setEvolutionList(evoChain);
      }

      loadEvolution();
   }, [evolutionChain]);

   return (
      <Container
         showsVerticalScrollIndicator={false}
         contentContainerStyle={{alignItems: 'center', paddingBottom: 16}}>
         {evolutionList.map((item, i) => (
            <PokemonContainer>
               {i === 0 ||
                  (i <= evolutionList.length && (
                     <LevelContainer>
                        <Icon color="#DADADA" name="arrow-down" size={14} />
                        <LevelText>
                           {item.min_level || item.item.name}
                        </LevelText>
                     </LevelContainer>
                  ))}
               <Image
                  style={{height: 100, width: 100}}
                  source={{
                     uri: `https://pokeres.bastionbot.org/images/pokemon/${item.pokemon_id}.png`,
                  }}
               />
               <PokemonName>{item.species_name}</PokemonName>
            </PokemonContainer>
         ))}
      </Container>
   );
};

export default Evolution;
