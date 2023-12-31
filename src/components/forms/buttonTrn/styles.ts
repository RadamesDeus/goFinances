import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'
import IconFeather from 'react-native-vector-icons/Feather';
import { TouchableOpacityProps } from 'react-native';
import { TrnButton } from '.';

interface activeProps {
  active?: boolean;
  type: TrnButton;
}

interface btnProps extends TouchableOpacityProps, activeProps {}

export const Container = styled.TouchableOpacity<btnProps>`

  width: 48%;
  flex-direction: row;
  border: #c1c1c1;
  padding: 20px;
  align-items: center;
  justify-content: center;
  border-Radius: 3px;
  color: ${({ theme }) => theme.colors.text};
  border-radius: 5px;
${({ active, theme, type }) => active && css`
  background-color:  ${type === 'up' ? theme.colors.success_light : theme.colors.attention_light};
  border: none;
`}

`
export const DescritionText = styled.Text<activeProps>`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fontFamily.Regular400};
  color: ${({ theme }) => theme.colors.text};

  ${({ active, theme }) => active && css`
  color:  ${theme.colors.dark};  
`}

`

export const Icon = styled(IconFeather) <activeProps>`
  color: ${({ theme, type }) => type === 'up' ? theme.colors.success_light : theme.colors.attention_light};
  font-size:${RFValue(24)}px;
  margin-right: ${RFValue(10)}px;

  ${({ active, theme, type }) => active && css`
  color:  ${type === 'up' ? theme.colors.success : theme.colors.attention};
  
`}

  


`;