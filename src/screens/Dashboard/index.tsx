import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';

import {
  Container,
  Header,
  ContainerUser,
  ContainerCard,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  TitleListagem,
  Transaction,
  Listagem,
  ContainerIndicator,
  PowerIcon,
} from './styles';
import Card from '../../components/card';
import CardItem, {icardItemProps} from '../../components/card_item';
import {Alert} from 'react-native';

export interface iListCardItemProps extends icardItemProps {
  id: string;
}

interface CardTotalItem {
  amount: number;
  data?: Date;
}
interface CardTotal {
  entrada: CardTotalItem;
  saida: CardTotalItem;
  total: CardTotalItem;
}

const Dashboard: React.FC = () => {
  const [listCarditem, setListCarditem] = useState<iListCardItemProps[]>([]);
  const [indicatorLoaded, setIndicatorLoaded] = useState(true);
  const [resumeCardTotal, setResumeCardTotal] = useState<CardTotal>(
    {} as CardTotal,
  );

  const loadTransition = async () => {
    try {
      //await AsyncStorage.removeItem('@gofinances:transactions');
      const data = await AsyncStorage.getItem('@gofinances:transactions');

      let Totals = {
        Entradas: 0,
        Saida: 0,
        UltimaEntrada: null,
        UltimaSaida: null,
        Total: 0,
        periodo: null,
      };

      const dataAsyncStorage: iListCardItemProps[] = data
        ? JSON.parse(data)
        : [];
      let transactions: iListCardItemProps[] = [];
      transactions = dataAsyncStorage.map((trans) => {
        if (trans.TypeTransaction === 'up') {
          Totals.Entradas += trans.amount;
        } else {
          Totals.Saida += trans.amount;
        }

        return trans;
      });

      Totals.Total = Totals.Entradas - Totals.Saida;
      transactions.reverse();
      let UltimaEntrada = transactions.find(
        (trans) => trans.TypeTransaction == 'up',
      );

      let UltimaSaida = transactions.find(
        (trans) => trans.TypeTransaction == 'down',
      );

      setResumeCardTotal({
        entrada: {amount: Totals.Entradas, data: UltimaEntrada?.date},
        saida: {amount: Totals.Saida, data: UltimaSaida?.date},
        total: {amount: Totals.Total, data: transactions[0]?.date},
      });

      setListCarditem([...transactions]);
      setIndicatorLoaded(false);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadTransition();
    }, []),
  );

  const handleLogout = async () => {
    await AsyncStorage.removeItem('@gofinances:transactions');
    loadTransition();
  };

  return (
    <Container>
      {indicatorLoaded ? (
        <ContainerIndicator>
          <ActivityIndicator color="red" />
        </ContainerIndicator>
      ) : (
        <>
          <Header>
            <ContainerUser>
              <UserInfo>
                <Photo
                  source={{
                    uri: 'https://avatars.githubusercontent.com/u/6075631?v=4',
                  }}
                />
                <User>
                  <UserGreeting>Olá,</UserGreeting>
                  <UserName>Radames</UserName>
                </User>
              </UserInfo>
              <PowerIcon NameIcon="power" onPress={handleLogout} />
            </ContainerUser>
          </Header>
          <ContainerCard>
            <Card
              iconType="up"
              amount={resumeCardTotal.entrada.amount}
              title="Entradas"
              lastTransaction={resumeCardTotal.entrada.data}
            />
            <Card
              iconType="down"
              amount={resumeCardTotal.saida.amount}
              title="Saídas"
              lastTransaction={resumeCardTotal.saida.data}
            />
            <Card
              iconType="total"
              amount={resumeCardTotal.total.amount}
              title="Total"
              lastTransaction={resumeCardTotal.total.data}
            />
          </ContainerCard>
          <Transaction>
            <TitleListagem>Listagem</TitleListagem>
            <FlatList
              data={listCarditem}
              renderItem={({item}) => <CardItem key={item.id} item={item} />}
            />
          </Transaction>
        </>
      )}
    </Container>
  );
};

export default Dashboard;
