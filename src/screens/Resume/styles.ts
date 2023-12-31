import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import IconFeather from 'react-native-vector-icons/Feather';
import { FlatList, FlatListProps } from 'react-native';
import { iListaHistoryCardprops } from '.';
import ButtonIcon from 'src/components/ButtonIcon';
import { BorderlessButton, BorderlessButtonProps } from 'react-native-gesture-handler';



export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

export const DateHistory = styled.View`
flex-direction: row;
margin: 20px 0;
align-items: center;
justify-content: space-around;
width: 100%;
`;

export const DateText = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fontFamily.Regular400};
`;

export const ContainerIndicator = styled.View`
  flex: 1;
  justify-content: center;
`

export const Graphique = styled.View`
margin-bottom: 20px;
`;
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
  FlatList as new (props: FlatListProps<iListaHistoryCardprops>) => FlatList<iListaHistoryCardprops>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    display: "flex",
    flexGrow: 1,
  },

})``;