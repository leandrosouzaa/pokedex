import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   padding: 16px 0 0 0;
`;

export const MoveTable = styled.View`
   height: 40px;
   flex-direction: row;
   align-items: center;
   border-bottom-width: 1px;
   border-color: #f4f5f4;
`;

export const MoveTitle = styled.Text`
   font-family: 'CircularStd-Book';
   font-size: 16px;
   color: rgba(48, 57, 67, 0.6);
   line-height: 28px;
   width: 33.333%;
   text-align: center;
`;

export const MoveValue = styled.Text`
   width: 33.333%;
   font-family: 'CircularStd-Book';
   font-size: 14px;
   color: rgba(48, 57, 67, 1);
   text-align: center;
`;
