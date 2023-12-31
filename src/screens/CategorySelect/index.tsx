import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

import {
  Container,
  Header,
  Title,
  Listagem,
  Category,
  Description,
  Icon,
  Footer,
  ButtonFooter,
  TextBtnFooter,
} from './styles';
import {categories} from '../../utils/categories';

export interface CategoryProps {
  key: string;
  name: string;
  icon: string;
}

interface Props {
  category?: CategoryProps;
  setCategory: (category: CategoryProps) => void;
  closeModal: () => void;
}

const CategorySelect: React.FC<Props> = ({
  category,
  setCategory,
  closeModal,
}) => {
  const [listCategory, setListCategory] = useState<CategoryProps[]>([]);

  useEffect(() => {
    setListCategory([...categories]);
  }, []);

  const handleSetCategory = (category: CategoryProps) => {
    setCategory(category);
    closeModal();
  };

  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>

      <Listagem
        data={listCategory}
        keyExtractor={(item) => item.key}
        renderItem={({item}) => (
          <Category
            active={item.key === category?.key}
            onPress={() => handleSetCategory(item)}>
            <Icon name={item.icon} />
            <Description>{item.name}</Description>
          </Category>
        )}
      />

      <Footer>
        <ButtonFooter onPress={closeModal}>
          <TextBtnFooter>Selecionar</TextBtnFooter>
        </ButtonFooter>
      </Footer>
    </Container>
  );
};

export default CategorySelect;
