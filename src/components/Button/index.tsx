import React from 'react';
import {TextBtnFooter, RectButtonCF} from './styles';
import {TouchableOpacityProps} from 'react-native';

interface Props extends TouchableOpacityProps {
  title: string;
}

const Button: React.FC<Props> = ({title, ...props}) => {
  return (
    <RectButtonCF {...props}>
      <TextBtnFooter>{title}</TextBtnFooter>
    </RectButtonCF>
  );
};

export default Button;
