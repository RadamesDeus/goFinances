import React from 'react';
import {Text, View} from 'react-native';
import {
  BorderlessButton,
  BorderlessButtonProps,
} from 'react-native-gesture-handler';
import {Icon} from './styles';

interface Props extends BorderlessButtonProps {
  NameIcon?: string;
  title?: string;
}

const ButtonIconResumo: React.FC<Props> = ({NameIcon, title, ...props}) => {
  return (
    <BorderlessButton {...props}>
      {NameIcon && <Icon name={NameIcon} />}
    </BorderlessButton>
  );
};

export default ButtonIconResumo;
