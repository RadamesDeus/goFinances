import React, {useCallback, useEffect, useState} from 'react';
import {VictoryPie} from 'victory-native';

import {
  Container,
  Header,
  Title,
  DateText,
  Listagem,
  DateHistory,
  Graphique,
  ContainerIndicator,
} from './styles';
import HistoryCard, {HistoryCardprops} from 'src/components/HistoryCard';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {iListCardItemProps} from '../Dashboard';
import {categories} from 'src/utils/categories';
import ButtonIconResumo from 'src/components/ButtonIconResumo';
import {RFValue} from 'react-native-responsive-fontsize';
import theme from 'src/global/theme';
import {ScrollView} from 'react-native-gesture-handler';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {ActivityIndicator, Alert} from 'react-native';

export interface iListaHistoryCardprops extends HistoryCardprops {
  id: string;
  porcent: string;
}

const Resume: React.FC = () => {
  const [indicatorLoaded, setIndicatorLoaded] = useState(false);
  const [listaCard, setListaCard] = useState<iListaHistoryCardprops[]>(
    [] as iListaHistoryCardprops[],
  );

  const [dateResume, setDateResume] = useState<Date>();

  const loadHistoryCard = async () => {
    setIndicatorLoaded(true);
    try {
      const data = await AsyncStorage.getItem('@gofinances:transactions');
      const dataAsyncStorage: iListCardItemProps[] = data
        ? JSON.parse(data)
        : [];

      if (!dateResume) setDateResume(new Date(Date.now()));
      if (!dateResume) return;

      let ResumeGetMonth = dateResume.getMonth();
      let ResumeGetFullYear = dateResume.getFullYear();

      console.log(ResumeGetMonth, ResumeGetFullYear);

      const dataFilter = dataAsyncStorage
        .filter((trans) => trans.TypeTransaction === 'down')
        .filter((trans) => {
          let transDate = new Date(trans.date);
          let transGetMonth = transDate.getMonth();
          let transGetFullYear = transDate.getFullYear();
          if (
            transGetMonth == ResumeGetMonth &&
            transGetFullYear == ResumeGetFullYear
          )
            return trans;
        });

      const TotalSaida = dataFilter.reduce(
        (total, trans) => total + trans.amount,
        0,
      );

      const transactions = categories
        .map<iListaHistoryCardprops>((category) => {
          const amount = dataFilter
            .filter((trans) => trans.category.name === category.name)
            .reduce((total, trans) => total + trans.amount, 0);
          return {
            id: category.key,
            amount: amount,
            cor: category.color,
            title: category.name,
            porcent: ((amount * 100) / TotalSaida).toFixed(2) + '%',
          };
        })
        .filter((trans) => trans.amount > 0);

      setListaCard(transactions);
      setIndicatorLoaded(false);
    } catch (error) {
      console.log('Resume com error:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadHistoryCard();
    }, [dateResume]),
  );

  function handleChageDateHistory(month: number): void {
    if (dateResume) {
      let newDate = dateResume;
      let futureDate = new Date(newDate.setMonth(newDate.getMonth() + month));
      setDateResume(futureDate);
    }
  }

  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>
      <DateHistory>
        <ButtonIconResumo
          NameIcon="chevron-left"
          onPress={() => handleChageDateHistory(-1)}
        />
        <DateText>
          {dateResume &&
            new Intl.DateTimeFormat('pt-BR', {
              year: 'numeric',
              month: 'long',
            }).format(dateResume)}
        </DateText>
        <ButtonIconResumo
          NameIcon="chevron-right"
          onPress={() => handleChageDateHistory(1)}
        />
      </DateHistory>
      {indicatorLoaded ? (
        <ContainerIndicator>
          <ActivityIndicator color="red" />
        </ContainerIndicator>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: useBottomTabBarHeight()}}>
          <Graphique>
            <VictoryPie
              data={listaCard}
              colorScale={listaCard.map((cat) => cat.cor)}
              style={{
                labels: {
                  fontSize: RFValue(18),
                  fontWeight: 'bold',
                  fill: theme.colors.shape,
                },
              }}
              labelRadius={50}
              x="porcent"
              y="amount"
            />
          </Graphique>
          {listaCard.map((card) => (
            <HistoryCard
              cor={card.cor}
              title={card.title}
              amount={card.amount}
              key={card.id}
            />
          ))}
        </ScrollView>
      )}
    </Container>
  );
};

export default Resume;
