import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'


export const RectButtonCF = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 95%;
  padding: 20px;
  align-items: center;
  justify-content: center;
  border-Radius: 7px;
`;


export const TextBtnFooter = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fontFamily.Regular400};
  color: ${({ theme }) => theme.colors.shape};
`

