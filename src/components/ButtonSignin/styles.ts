import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize'


export const RectButtonCF = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.shape};
  width: ${RFPercentage(40)}px;
  padding: 20px;
  align-items: center;
  border-Radius: 7px;
  margin-bottom: 20px;
  flex-direction: row;
`;

export const TextBtnFooter = styled.Text`

  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fontFamily.Regular400};
  color: ${({ theme }) => theme.colors.dark};
`

export const Icon = styled.View`
 flex-grow: 1;
 `;

export const Texto = styled.View`
  flex-grow: 2;
  align-items: center;
`;