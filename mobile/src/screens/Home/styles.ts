import styled from 'styled-components/native';
import {StatusBar} from 'react-native';

export const Container = styled.ImageBackground`
   flex: 1;
   background: #ffffff;
   padding: 40px 16px 0 16px;
`;

export const Title = styled.Text`
   font-family: 'CircularStd-Black';
   font-size: 30px;
   margin-top: ${StatusBar.currentHeight}px;
   padding: 0 0 40px 0;
`;

export const PokeList = styled.View`
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: space-between;
`;
