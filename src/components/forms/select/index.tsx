import React from 'react';
import {TouchableOpacityProps, View} from 'react-native';

import {Container, InfoCategory, Descrition, Icon} from './styles';
import {CategoryProps} from 'src/screens/CategorySelect';

interface SelectProps extends TouchableOpacityProps {
  category?: CategoryProps;
}

const Select: React.FC<SelectProps> = ({category, ...props}) => {
  return (
    <Container {...props}>
      <InfoCategory>
        {!!category?.icon && <Icon active name={category.icon} />}
        <Descrition active={!!category?.name}>
          {category?.name || 'Categoria'}
        </Descrition>
      </InfoCategory>
      <Icon name="chevron-down" />
    </Container>
  );
};

export default Select;
