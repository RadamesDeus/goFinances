import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import GoogleIcon from 'assets/google.svg';

import {TextBtnFooter, RectButtonCF, Icon, Texto} from './styles';
import {RFValue} from 'react-native-responsive-fontsize';
import {SvgProps} from 'react-native-svg';

interface Props extends TouchableOpacityProps {
  title: string;
  svg: React.FC<SvgProps>;
}

const ButtonSignin: React.FC<Props> = ({title, svg: Svg, ...props}) => {
  return (
    <RectButtonCF {...props}>
      <Icon>
        <Svg width={RFValue(25)} height={RFValue(25)} />
      </Icon>
      <Texto>
        <TextBtnFooter>{title}</TextBtnFooter>
      </Texto>
    </RectButtonCF>
  );
};

export default ButtonSignin;
