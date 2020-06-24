import styled from 'styled-components/native';

export const Container = styled.ScrollView`
   padding-top: 24px;
   flex: 1;
`;

export const Description = styled.Text`
   font-family: 'CircularStd-Book';
   color: #303943;
   font-size: 14px;
   line-height: 24px;
   text-align: justify;
`;
export const MeasureContainer = styled.View`
   margin: 8px 0;
   width: 100%;
   flex-direction: row;
   height: 68px;
   align-items: center;
   justify-content: space-around;
`;

export const MeasureProps = styled.View``;

export const MeasureTitle = styled.Text`
   font-family: 'CircularStd-Book';
   font-size: 14px;
   margin-bottom: 8px;
   color: rgba(48, 57, 67, 0.4);
`;

export const MeasureValue = styled.Text`
   font-family: 'CircularStd-Book';
   font-size: 14px;
   color: rgba(48, 57, 67, 1);
`;

export const Title = styled.Text`
   font-family: 'CircularStd-Bold';
   font-size: 16px;
   color: #303943;
`;
