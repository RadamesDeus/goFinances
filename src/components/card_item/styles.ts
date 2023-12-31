import styled, { css } from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import IconFeather from 'react-native-vector-icons/Feather';


interface iTypeProps {
  TypeTransaction: 'up' | 'down';
}

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.shape};

  padding: 30px;
  border-radius: 5px;
  margin: 12px 0 ; 

  
`
export const HeadCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Footer = styled.View`
 margin-top:${RFValue(24)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Title = styled.Text`
 font-size:${RFValue(12)}px;
 `

export const Amount = styled.Text<iTypeProps>`
 font-size:${RFValue(20)}px;
 font-family: ${({ theme }) => theme.fontFamily.Medium500};

  color: ${({ theme, TypeTransaction }) =>
    TypeTransaction === 'up' ? theme.colors.success : theme.colors.attention};

`
export const IconInfo = styled.View`
  flex-direction: row; 
`

export const IconCard = styled(IconFeather)`
 font-size:${RFValue(20)}px;
 color: ${({ theme }) => theme.colors.text};
 `
export const IconDescription = styled.Text`
margin-left:10px ;
 font-size:${RFValue(14)}px;
 color: ${({ theme }) => theme.colors.text};
`
export const DateTime = styled.Text`
 font-size:${RFValue(14)}px;
 color: ${({ theme }) => theme.colors.text};
`


