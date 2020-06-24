import React from 'react';

import {
   Container,
   Description,
   MeasureContainer,
   MeasureProps,
   MeasureTitle,
   MeasureValue,
   Title,
} from './styles';

interface AboutProps {
   measure: {
      height: number;
      weight: number;
   };
}

const About: React.FC<AboutProps> = ({measure}) => {
   return (
      <Container>
         <Description>
            Bulbasaur can be seen napping in bright sunlight. There is a seed on
            its back. By soaking up the sun's rays, the seed grows progressively
            larger.
         </Description>

         <MeasureContainer>
            <MeasureProps>
               <MeasureTitle>Height</MeasureTitle>
               <MeasureValue>
                  {measure.height / 10} m (
                  {Math.round(3.281 * measure.height) / 10} ft)
               </MeasureValue>
            </MeasureProps>
            <MeasureProps>
               <MeasureTitle>Weight</MeasureTitle>
               <MeasureValue>
                  {measure.weight / 10} kg (
                  {Math.round(2.205 * measure.weight) / 10} lbs)
               </MeasureValue>
            </MeasureProps>
         </MeasureContainer>
         <Title>Breeding</Title>
      </Container>
   );
};

export default About;
