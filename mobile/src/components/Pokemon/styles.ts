import styled from 'styled-components/native';

interface ContainerProps {
   color: string;
}

export const Container = styled.View<ContainerProps>`
   background: ${(props) => {
      return props.color;
   }};
   border-radius: 15px;
   width: 49%;
   padding-left: 16px;
`;

export const TextID = styled.Text`
   opacity: 0.2;
   padding: 16px 16px 0 0;
   text-align: right;
   font-size: 16px;
   font-family: 'CircularStd-Bold';
`;

export const TextName = styled.Text`
   color: #fff;
   font-family: 'CircularStd-Bold';
   font-size: 16px;
`;

export const TypeContainer = styled.View`
   height: 24px;
   width: 60px;
   background: rgba(255, 255, 255, 0.2);
   border-radius: 38px;
   align-items: center;
   justify-content: center;
   margin-top: 10px;
`;

export const TypeText = styled.Text`
   font-size: 10px;
   font-family: 'CircularStd-Book';
   color: #fff;
`;

export const Content = styled.View`
   flex-direction: row;
`;

export const ImageView = styled.ImageBackground`
   margin-left: 16px;
   padding-right: 8px;
   flex: 1;
   height: 90px;
`;
