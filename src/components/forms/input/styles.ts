import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import IconFeather from 'react-native-vector-icons/Feather';
import { TextInputProps } from 'react-native';


export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: '#c1c1c1'
})`

padding: 20px;
margin-bottom: 20px;
border-Radius: 7px;
font-size: ${RFValue(14)}px;
color: ${({ theme }) => theme.colors.dark};
font-family: ${({ theme }) => theme.fontFamily.Regular400};
background-color: ${({ theme }) => theme.colors.shape};
`