import React, {useContext} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';

import {Container, Header, Footer, Texto, SubTexto, ViewLogo} from './styles';
import ButtonSignin from 'src/components/ButtonSignin';
import Logo from 'assets/logo.svg';
import GoogleIcon from 'assets/google.svg';
import AppleIcon from 'assets/apple.svg';
import {useAuth} from 'src/hooks/auth';

const Signin: React.FC = () => {
  const {username, signGoogle} = useAuth();
  console.log(username);

  const handleSubmit = () => {
    console.log('start handleSubmit signGoogle');
    signGoogle();
  };

  return (
    <Container>
      <Header>
        <ViewLogo>
          <Logo width={RFValue(120)} height={RFValue(68)} />
        </ViewLogo>
        <Texto>Controle suas finanças de forma muito simples</Texto>
        <SubTexto>Faça seu login com uma das contas abaixo</SubTexto>
      </Header>
      <Footer>
        <ButtonSignin
          svg={GoogleIcon}
          title="Entrar com Google"
          onPress={handleSubmit}
        />
        <ButtonSignin
          svg={AppleIcon}
          title="Entrar com Apple"
          onPress={handleSubmit}
        />
      </Footer>
    </Container>
  );
};

export default Signin;
