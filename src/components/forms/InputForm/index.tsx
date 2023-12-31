import React from 'react';
import {TextInputProps} from 'react-native';
import {Controller, Control} from 'react-hook-form';

import {Container, Error} from './styles';
import InputTxt from '../input';

interface Props extends TextInputProps {
  control: Control;
  name: string;
  error?: string;
}

const InputForm: React.FC<Props> = ({control, name, error, ...props}) => {
  return (
    <Container>
      {error && <Error>{error}</Error>}
      <Controller
        control={control}
        name={name}
        render={({field: {onChange, value}}) => (
          <InputTxt onChangeText={onChange} value={value} {...props} />
        )}
      />
    </Container>
  );
};

export default InputForm;
