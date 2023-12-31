import React from 'react';
import {Text, View} from 'react-native';

// import { Container } from './styles';

interface Iwelcone {
  title: string;
}

const Welcone: React.FC<Iwelcone> = ({title}) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default Welcone;
