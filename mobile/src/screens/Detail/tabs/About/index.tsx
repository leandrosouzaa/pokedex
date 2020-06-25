import React, {useMemo} from 'react';

import {ActivityIndicator} from 'react-native';

import {
   Container,
   Title,
   Description,
   MeasureContainer,
   MeasureProps,
   MeasureTitle,
   MeasureValue,
   EggContainer,
   EggTitle,
   EggValue,
} from './styles';

interface AboutProps {
   color: string;
   measure: {
      height: number;
      weight: number;
   };
   description: string;
   eggProps: {
      group: string;
      cycle: string;
   };
}

const About: React.FC<AboutProps> = ({
   color,
   measure,
   description,
   eggProps,
}) => {
   const formattedMeasure = useMemo(() => {
      const newMeasure = {
         ...measure,
         formattedHeight: `${measure.height / 10} m (${
            Math.round(3.281 * measure.height) / 10
         } ft)`,
         formattedWeight: `${measure.weight / 10} m (${
            Math.round(3.281 * measure.weight) / 10
         } ft)`,
      };

      return newMeasure;
   }, [measure]);

   if (!formattedMeasure || description) {
      return (
         <Container>
            <ActivityIndicator animating size={50} color={color} />
         </Container>
      );
   }

   return (
      <Container>
         <Description>{description}</Description>

         <MeasureContainer>
            <MeasureProps>
               <MeasureTitle>Height</MeasureTitle>
               <MeasureValue>
                  {formattedMeasure.formattedHeight || 0}
               </MeasureValue>
            </MeasureProps>
            <MeasureProps>
               <MeasureTitle>Weight</MeasureTitle>
               <MeasureValue>
                  {formattedMeasure.formattedWeight || 0}
               </MeasureValue>
            </MeasureProps>
         </MeasureContainer>
         <Title>Breeding</Title>
         <EggContainer>
            <EggTitle>Egg Groups</EggTitle>
            <EggValue>{eggProps.group || 'None'}</EggValue>
         </EggContainer>

         <EggContainer>
            <EggTitle>Egg Cycle</EggTitle>
            <EggValue>{eggProps.cycle || 'None'}</EggValue>
         </EggContainer>
      </Container>
   );
};

export default About;
