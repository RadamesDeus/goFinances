import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Header = styled.View`
  align-items: center;
  justify-content: flex-end;
  /* width: 100%; */
  height: ${RFPercentage(75)}px;
  background-color: ${({ theme }) => theme.colors.primary};
`
export const Footer = styled.View`
  margin-top: -40px;
  align-items: center;
`;

export const ViewLogo = styled.View`
  
`;


export const Texto = styled.Text`
  margin-top: ${RFValue(40)}px;
  width:${RFPercentage(45)}px; 
  font-size: ${RFValue(24)}px;
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily.Medium500};
  color: ${({ theme }) => theme.colors.shape};
`;
export const SubTexto = styled.Text`
  margin-top: ${RFValue(60)}px;
  margin-bottom: ${RFValue(70)}px;
  
  width:${RFPercentage(30)}px; 
  font-size: ${RFValue(14)}px;
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily.Regular400};
  color: ${({ theme }) => theme.colors.shape};
`;