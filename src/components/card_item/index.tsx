import React from 'react';
import {
  Container,
  HeadCard,
  Footer,
  Title,
  IconCard,
  Amount,
  IconInfo,
  IconDescription,
  DateTime,
} from './styles';

interface Category {
  name: string;
  icon: string;
}

export interface icardItemProps {
  title: string;
  amount: number;
  category: Category;
  date: Date;
  TypeTransaction: 'up' | 'down';
}

interface iCard {
  item: icardItemProps;
}

// const iconTypeTransaction = {
//   coffee: 'coffee',
//   home: 'home',
//   venda: 'dollar-sign',
// };

const CardItem: React.FC<iCard> = ({item}) => {
  return (
    <Container>
      <HeadCard>
        <Title>{item.title}</Title>
      </HeadCard>
      <Amount TypeTransaction={item.TypeTransaction}>
        {item.TypeTransaction === 'down' && '- '}
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(Number(item.amount))}
      </Amount>
      <Footer>
        <IconInfo>
          <IconCard name={item.category.icon} />
          <IconDescription>{item.category.name}</IconDescription>
        </IconInfo>
        <DateTime>
          {new Intl.DateTimeFormat('pt-BR').format(new Date(item.date))}
        </DateTime>
      </Footer>
    </Container>
  );
};

export default CardItem;
