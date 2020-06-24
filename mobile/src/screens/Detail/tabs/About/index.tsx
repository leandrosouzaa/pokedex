import React, {useMemo} from 'react';

import {
   Container,
   Description,
   MeasureContainer,
   MeasureProps,
   MeasureTitle,
   MeasureValue,
} from './styles';

interface AboutProps {
   measure: {
      height: number;
      weight: number;
   };
   description: string;
}

const About: React.FC<AboutProps> = ({measure, description}) => {
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

   return (
      <Container>
         <Description>{description}</Description>

         <MeasureContainer>
            <MeasureProps>
               <MeasureTitle>Height</MeasureTitle>
               <MeasureValue>{formattedMeasure.formattedHeight}</MeasureValue>
            </MeasureProps>
            <MeasureProps>
               <MeasureTitle>Weight</MeasureTitle>
               <MeasureValue>
                  {measure.weight / 10} kg (
                  {Math.round(2.205 * measure.weight) / 10} lbs)
               </MeasureValue>
            </MeasureProps>
         </MeasureContainer>
      </Container>
   );
};

export default About;
