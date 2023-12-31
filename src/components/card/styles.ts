import styled, { css } from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import IconFeather from 'react-native-vector-icons/Feather';


interface iTypeProps {
  iconType: 'up' | 'down' | 'total';
}
export const Container = styled.View<iTypeProps>`
  flex: 1;
  background: ${({ theme }) => theme.colors.shape};

  padding: 20px 25px 40px;
  border-radius: 5px;
  width:${RFValue(300)}px;
  height:${RFValue(200)}px;
  margin-right:16px ;
  
  background: ${({ theme, iconType }) =>
    iconType === 'total' ? theme.colors.secondary : theme.colors.shape};

`
export const HeadCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Title = styled.Text <iTypeProps>`
 font-size:${RFValue(12)}px;
 color: ${({ theme, iconType }) =>
    iconType === 'total' ? theme.colors.shape : theme.colors.dark};
 `
export const IconCard = styled(IconFeather) <iTypeProps>`
 font-size:${RFValue(40)}px;
 
  color: ${({ theme, iconType }) => {
    if (iconType === 'up') return theme.colors.success
    if (iconType === 'down') return theme.colors.attention
    if (iconType === 'total') return theme.colors.shape
  }

  };

`
export const Amount = styled.Text<iTypeProps>`
 margin-top:${RFValue(42)}px;
 font-size:${RFValue(24)}px;
 font-family: ${({ theme }) => theme.fontFamily.Bold700};
 
color: ${({ theme, iconType }) => {
    if (iconType === 'up') return theme.colors.success
    if (iconType === 'down') return theme.colors.attention
    if (iconType === 'total') return theme.colors.shape
  }
  };
  
`
export const History = styled.Text<iTypeProps>`
 font-size:${RFValue(8)}px;
 margin-top:${RFValue(-10)}px;

 color: ${({ theme, iconType }) =>
    iconType === 'total' ? theme.colors.shape : theme.colors.text};
 
`