import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  
  background: ${({ theme }) => theme.colors.shape};
  flex-direction: row;
  border-radius: 5px;
  margin: 5px 20px ; 
`;

export const Barra = styled.View<{ cor: string }>`
  width: 5px ;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background: ${({ theme, cor }) => cor};
`;

export const Content = styled.View`
width: 100%;
padding: 25px;
flex-direction: row;
justify-content: space-between;
`;

export const Titulo = styled.Text`
font-size:${RFValue(12)}px;
 font-family: ${({ theme }) => theme.fontFamily.Medium500};
`;

export const Valor = styled.Text`
font-size:${RFValue(12)}px;
 font-family: ${({ theme }) => theme.fontFamily.Bold700};
`;
