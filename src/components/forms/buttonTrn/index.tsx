import React from 'react';
import {TouchableOpacityProps, View} from 'react-native';

import {Container, Icon, DescritionText} from './styles';

export type TrnButton = 'up' | 'down';
export interface iBtnTrnProps extends TouchableOpacityProps {
  Descrition: string;
  type: TrnButton;
  active?: boolean;
}

const IconName = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
};

const ButtonTrn: React.FC<iBtnTrnProps> = ({
  Descrition,
  active,
  type,
  ...props
}) => {
  return (
    <Container type={type} active={active} {...props}>
      <Icon type={type} active={active} name={IconName[type]} />
      <DescritionText type={type} active={active}>
        {Descrition}
      </DescritionText>
    </Container>
  );
};

export default ButtonTrn;
