import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'
import IconFeather from 'react-native-vector-icons/Feather';


export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fontFamily.Regular400};
  margin-Top: 20px;
  padding: 20px;
  border-Radius: 3px;
`;


export const Descrition = styled.Text<{ active: boolean }>`
  color: ${({ theme, active }) => active ? theme.colors.dark : theme.colors.text};
  margin-left: 20px;  
  font-size:${RFValue(14)}px;
`;

export const Icon = styled(IconFeather) <{ active?: boolean }>`
  color: ${({ theme, active }) => active ? theme.colors.dark : theme.colors.text};
  font-size:${RFValue(25)}px;
  

`;


export const InfoCategory = styled.View`
flex-direction: row;
`;