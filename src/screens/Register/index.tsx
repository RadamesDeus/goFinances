import React, {useState} from 'react';
import {Alert, Keyboard, Modal, TouchableWithoutFeedback} from 'react-native';
import {useForm, Control} from 'react-hook-form';

import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import {useNavigation} from '@react-navigation/native';

import {Container, Header, Title, Form, GroupBTN, Footer} from './styles';
import ButtonTrn, {TrnButton} from '../../components/forms/buttonTrn';
import Select from '../../components/forms/select';
import CategorySelect, {CategoryProps} from '../CategorySelect';
import InputForm from '../../components/forms/InputForm';
import Button from '../../components/Button';
import {iListCardItemProps} from '../Dashboard';

interface PropsForms {
  name?: string;
  amount?: number;
}
type NavigationProps = {
  navigate: (screen: string) => void;
};

const schema = Yup.object()
  .shape({
    name: Yup.string().required('Nome é obrigatório'),
    amount: Yup.number()
      .typeError('Informe um valor númerico')
      .positive('O valor não pode ser negativo')
      .required('O valor é obrigatório'),
  })
  .required();

const Register: React.FC = () => {
  const [activeTrnbutton, setActiveTrnButton] = useState<TrnButton | null>();
  const [categorySelected, setCategorySelected] = useState<
    CategoryProps | undefined
  >();
  const [showCategorySelect, setShowCategorySelect] = useState(false);
  const navigation = useNavigation<NavigationProps>();
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    resolver: yupResolver<PropsForms>(schema),
  });

  const handleShowCategorySelect = () => {
    setShowCategorySelect(true);
  };

  const handleactiveTrnButton = (trnButton: TrnButton) => {
    setActiveTrnButton(trnButton);
    Keyboard.dismiss();
  };

  const handeCloseModal = () => {
    setShowCategorySelect(false);
  };

  const hendleForm = async (form: PropsForms) => {
    if (!activeTrnbutton) return Alert.alert('Informe uma transação');
    if (!categorySelected) return Alert.alert('Informe uma categoria');

    const newdata: iListCardItemProps = {
      id: uuid.v4().toString(),
      title: form.name || 'Desconhecido',
      amount: form.amount || 0,
      TypeTransaction: activeTrnbutton,
      category: categorySelected,
      date: new Date(),
    };

    try {
      const data = await AsyncStorage.getItem('@gofinances:transactions');

      const dataAsyncStorage = data ? JSON.parse(data) : [];
      const dataFormated = [...dataAsyncStorage, newdata];

      await AsyncStorage.setItem(
        '@gofinances:transactions',
        JSON.stringify(dataFormated),
      );
      reset();
      setActiveTrnButton(null);
      setCategorySelected(undefined);
      navigation.navigate('Dashboard');
    } catch (error) {
      Alert.alert('error Rada: ' + error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>
        <Form>
          <InputForm
            control={control}
            name="name"
            placeholder="Nome"
            autoCapitalize="sentences"
            autoCorrect={false}
            error={errors.name && errors.name.message}
          />
          <InputForm
            control={control}
            name="amount"
            placeholder="Preço"
            keyboardType="numeric"
            error={errors.amount && errors.amount.message}
          />
          <GroupBTN>
            <ButtonTrn
              type="up"
              Descrition="Income"
              active={activeTrnbutton === 'up'}
              onPress={() => handleactiveTrnButton('up')}
            />
            <ButtonTrn
              type="down"
              Descrition="Outcome"
              active={activeTrnbutton === 'down'}
              onPress={() => handleactiveTrnButton('down')}
            />
          </GroupBTN>
          <Select
            onPress={handleShowCategorySelect}
            category={categorySelected}
          />
        </Form>
        <Footer>
          <Button title="Enviar" onPress={handleSubmit(hendleForm)} />
        </Footer>
        <Modal visible={showCategorySelect}>
          <CategorySelect
            category={categorySelected}
            setCategory={setCategorySelected}
            closeModal={handeCloseModal}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Register;
