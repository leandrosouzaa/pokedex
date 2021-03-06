import styled from 'styled-components/native';

interface PokemonInfoProps {
   color: string;
}

export const Container = styled.View<PokemonInfoProps>`
   background: ${(props) => props.color};
   flex: 1;
`;

export const PokemonHeader = styled.ImageBackground<PokemonInfoProps>`
   padding: 80px 24px 224px 24px;

   background: ${(props) => props.color};
`;

export const PokemonGrid = styled.View`
   flex-direction: row;
   justify-content: space-between;
   padding-top: 32px;
`;

export const Name = styled.Text`
   font-family: 'CircularStd-Black';
   color: #fff;
   font-size: 36px;
`;

export const TypeContainer = styled.View`
   height: 24px;
   width: 72px;
   background: rgba(255, 255, 255, 0.2);
   border-radius: 38px;
   align-items: center;
   justify-content: center;
   margin: 8px 8px 0 0;
`;

export const TypeText = styled.Text`
   font-size: 12px;
   font-family: 'CircularStd-Book';
   color: #fff;
`;

export const Id = styled.Text`
   font-family: 'CircularStd-Bold';
   color: #fff;
   font-size: 18px;
   line-height: 50px;
`;

export const PokemonPicture = styled.View`
   align-items: center;
`;

export const PokemonInfo = styled.View`
   border-radius: 25px;
   border-bottom-right-radius: 0;
   border-bottom-left-radius: 0;
   padding-top: 50px;
   background: #fff;
   flex: 1;
   padding: 50px 24px 0 24px;
`;
