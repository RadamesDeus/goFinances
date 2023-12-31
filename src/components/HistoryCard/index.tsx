import React from 'react';

import {Container, Barra, Content, Titulo, Valor} from './styles';

export interface HistoryCardprops {
  cor: string;
  title: string;
  amount: number;
}

const HistoryCard: React.FC<HistoryCardprops> = ({cor, amount, title}) => {
  return (
    <Container>
      <Barra cor={cor} />
      <Content>
        <Titulo>{title}</Titulo>
        <Valor>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(Number(amount))}
        </Valor>
      </Content>
    </Container>
  );
};

export default HistoryCard;
