import styled from 'styled-components/native';

interface StatsValueProps {
   value: number;
}

export const Container = styled.View`
   flex: 1;
   padding-top: 15px;
`;

export const StatsGrid = styled.View`
   flex-direction: row;
   align-items: center;
   margin-bottom: 8px;
`;

export const StatsTitle = styled.Text`
   font-family: 'CircularStd-Book';
   font-size: 14px;
   color: rgba(48, 57, 67, 0.6);
   line-height: 28px;
   width: 80px;
`;

export const StatsValue = styled.Text`
   font-family: 'CircularStd-Book';
   font-size: 14px;
   color: rgba(48, 57, 67, 1);
   line-height: 28px;
   width: 25px;
   margin-right: 8px;
`;

export const StatsValueView = styled.View`
   width: 100%;
   flex: 1;
   background: #f4f5f4;
   height: 5px;
   border-radius: 10px;
`;

export const StatsValueRepresentation = styled.View<StatsValueProps>`
   width: ${(props) => props.value / 1.5}%;
   height: 5px;
   background-color: ${(props) => (props.value >= 75 ? '#4BC07A' : '#fb6c6c')};
`;
