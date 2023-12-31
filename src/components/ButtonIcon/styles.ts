import styled from 'styled-components/native';
import IconFeather from 'react-native-vector-icons/Feather';
import { RFValue } from 'react-native-responsive-fontsize'

export const Icon = styled(IconFeather)`
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fontFamily.Regular400};
  color: ${({ theme }) => theme.colors.secondary};
`;
