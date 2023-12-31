import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import IconFeather from 'react-native-vector-icons/Feather';



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

export const Form = styled.View`
  padding:10px ;
  flex: 1;
`

export const GroupBTN = styled.View`
  margin-Top: 8px;
  flex-direction: row;
  justify-content: space-between;
  
`

export const Button = styled.TouchableOpacity`
  width: 48%;
  flex-direction: row;
  border: ${({ theme }) => theme.colors.text};
  padding: 20px;
  align-items: center;
  justify-content: center;
  border-Radius: 3px;
`

export const Icon = styled(IconFeather)`
  margin-right: 10px;
  font-size: ${RFValue(20)}px;
`

export const TextBtn = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fontFamily.Regular400};
`

export const DropList = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fontFamily.Regular400};
  margin-Top: 20px;
  padding: 20px;
  align-items: center;
  justify-content: center;
  border-Radius: 3px;

`

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
