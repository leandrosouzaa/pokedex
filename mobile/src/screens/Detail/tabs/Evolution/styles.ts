import styled from 'styled-components/native';

export const Container = styled.ScrollView`
   flex: 1;
   padding: 8px 0 0 0;
`;

export const PokemonContainer = styled.View`
   padding: 16px;
   align-items: center;
`;

export const PokemonName = styled.Text`
   font-family: 'CircularStd-Book';
   font-size: 14px;

   color: #303943;
`;

export const LevelContainer = styled.View`
   flex-direction: row;
   margin-bottom: 24px;
`;

export const LevelText = styled.Text`
   font-family: 'CircularStd-Bold';
   font-size: 12px;
   color: #303943;
`;
