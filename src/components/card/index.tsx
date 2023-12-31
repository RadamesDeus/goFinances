import React from 'react';
import {Container, HeadCard, Title, IconCard, Amount, History} from './styles';

interface ICard {
  title: string;
  iconType: 'up' | 'down' | 'total';
  amount: number;
  lastTransaction?: Date;
}

const iconTypeTransaction = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign',
};

const Card: React.FC<ICard> = ({title, iconType, amount, lastTransaction}) => {
  const getDateFormatted = (lastTransaction: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(lastTransaction);
  };

  return (
    <Container iconType={iconType}>
      <HeadCard>
        <Title iconType={iconType}>{title}</Title>
        <IconCard name={iconTypeTransaction[iconType]} iconType={iconType} />
      </HeadCard>
      <Amount iconType={iconType}>
        {iconType === 'down' && '- '}
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(Number(amount))}
      </Amount>
      <History iconType={iconType}>
        {lastTransaction &&
          (iconType === 'total'
            ? `01 à ${getDateFormatted(new Date(lastTransaction))}`
            : `Ultima ${
                iconType === 'down' ? 'saída' : 'estrada'
              } ${getDateFormatted(new Date(lastTransaction))}`)}
      </History>
    </Container>
  );
};

export default Card;
