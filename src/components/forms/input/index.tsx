import React from 'react';
import {TextInputProps} from 'react-native';

import {TextInput} from './styles';

const InputTxt: React.FC<TextInputProps> = ({...props}) => {
  return <TextInput {...props} />;
};

export default InputTxt;
