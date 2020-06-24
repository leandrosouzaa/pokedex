import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
`;

export const StatsGrid = styled.View`
   flex-direction: row;
   align-items: center;
`;

export const StatsTitle = styled.Text`
   font-family: 'CircularStd-Book';
   font-size: 14px;
   color: rgba(48, 57, 67, 0.6);
   line-height: 28px;
   width: 80px;
   margin-right: 8px;
`;

export const StatsValue = styled.Text`
   font-family: 'CircularStd-Book';
   font-size: 14px;
   color: rgba(48, 57, 67, 1);
   line-height: 28px;
   width: 20px;
   margin-right: 8px;
`;

export const StatsValueView = styled.View`
   width: 100%;
   flex: 1;
   background: #f4f5f4;
   height: 5px;
   border-radius: 10px;
`;

export const StatsValueRepresentation = styled.View`
   width: 50%;
   height: 5px;
   background-color: #fb6c6c;
`;
