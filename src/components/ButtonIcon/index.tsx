import React from 'react';
import {Text, View} from 'react-native';
import {
  BorderlessButton,
  BorderlessButtonProps,
} from 'react-native-gesture-handler';
import IconFeather from 'react-native-vector-icons/Feather';
import {Icon} from './styles';

interface Props extends BorderlessButtonProps {
  NameIcon?: string;
  title?: string;
}

const ButtonIcon: React.FC<Props> = ({NameIcon, title, ...props}) => {
  return (
    <BorderlessButton {...props}>
      {NameIcon && <Icon name={NameIcon} />}
    </BorderlessButton>
  );
};

export default ButtonIcon;
