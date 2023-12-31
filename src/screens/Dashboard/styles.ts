import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import IconFeather from 'react-native-vector-icons/Feather';
import { iListCardItemProps } from '../Dashboard';
import { FlatList, FlatListProps } from 'react-native';
import ButtonIcon from '../../components/ButtonIcon';


export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`
export const ContainerIndicator = styled.View`
  flex: 1;
  justify-content: center;
`
export const Header = styled.View`
 width: 100%;
 height: ${RFPercentage(35)}px;
 background-color: ${({ theme }) => theme.colors.primary};
`
export const PowerIcon = styled(ButtonIcon)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size:${RFValue(24)}px;  
`;

export const ContainerUser = styled.View`
 width: 100%;

 padding: 20px;
 justify-content: space-between;
 flex-direction: row;
 align-items: center;

`
export const UserInfo = styled.View`
 flex-direction: row;
`
export const Photo = styled.Image`
width:${RFValue(48)}px;
height:${RFValue(48)}px;
border-radius: 15px;
margin-right: 16px;
`;

export const User = styled.View`
 
`
export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fontFamily.Regular400};
  margin-bottom: -10px;
`;
export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fontFamily.Bold700};
`;

export const Icon = styled(IconFeather)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size:${RFValue(24)}px;
`;

///######## ContainerCard #############

export const ContainerCard = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 }
})`
 width: 100%;
 position: absolute;
 margin-top: ${RFPercentage(13)}px;

`

export const Transaction = styled.View`
  flex: 1;
  margin-top:  ${RFPercentage(10)}px;
  padding: 0 24px ;
`
export const TitleListagem = styled.Text`
  color: ${({ theme }) => theme.colors.dark};
  font-size:${RFValue(18)}px;
  margin-bottom: ${RFValue(10)}px;
`;

export const Listagem = styled(
  FlatList as new (props: FlatListProps<iListCardItemProps>) => FlatList<iListCardItemProps>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    display: "flex",
    flexGrow: 1,
  },

})``;
