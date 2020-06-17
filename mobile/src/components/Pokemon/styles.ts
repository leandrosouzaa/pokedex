import styled from 'styled-components/native';

export const Container = styled.View`
   background: #46d7ab;
   border-radius: 15px;
   width: 49%;
   padding-left: 16px;
`;

export const TextID = styled.Text`
   opacity: 0.2;
   padding: 16px 16px 0 0;
   text-align: right;
   font-size: 14px;
   font-family: 'CircularStd-Bold';
`;

export const TextName = styled.Text`
   color: #fff;
   font-family: 'CircularStd-Bold';
   font-size: 14px;
`;

export const TypeContainer = styled.View`
   height: 16px;
   width: 40px;
   background: rgba(255, 255, 255, 0.2);
   border-radius: 38px;
   align-items: center;
   justify-content: center;
   margin-top: 10px;
`;

export const TypeText = styled.Text`
   font-size: 8px;
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
