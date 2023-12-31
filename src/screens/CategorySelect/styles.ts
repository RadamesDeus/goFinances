import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import IconFeather from 'react-native-vector-icons/Feather';
import { FlatList, FlatListProps, TouchableOpacityProps } from 'react-native';

import { CategoryProps } from '.';

interface ActiveProps extends TouchableOpacityProps {
  active?: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`
export const Header = styled.View`
 width: 100%;
 height: ${RFPercentage(15)}px;
 background-color: ${({ theme }) => theme.colors.primary};
 align-items: center;
 justify-content: flex-end;
 padding-bottom: 20px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fontFamily.Regular400};
`

export const Listagem = styled(
  FlatList as new (props: FlatListProps<CategoryProps>) => FlatList<CategoryProps>
).attrs({
  showsVerticalScrollIndicator: false
})``;

export const Category = styled.TouchableOpacity<ActiveProps>`
  flex-direction: row;
  border: #c1c1c1;
  padding: 20px;
  align-items: center;
  
  background-color: ${({ theme, active }) =>
    active ? theme.colors.success_light : theme.colors.background};

  color: ${({ theme }) => theme.colors.text};
`

export const Description = styled.Text`
/* font-size:${RFValue(18)}px; */
`
export const Icon = styled(IconFeather)`
  color: ${({ theme }) => theme.colors.dark};
  font-size:${RFValue(18)}px;
  margin-right: ${RFValue(10)}px;
`;



export const Footer = styled.View`
  align-items: center;
  justify-content: center;
`

export const ButtonFooter = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 95%;
  padding: 20px;
  align-items: center;
  justify-content: center;
  border-Radius: 7px;

`
export const TextBtnFooter = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fontFamily.Regular400};
  color: ${({ theme }) => theme.colors.shape};
`