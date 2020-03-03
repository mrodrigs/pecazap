import React from 'react';
import { withRouter } from 'react-router-dom';
import { MdPerson, MdLock } from 'react-icons/md';
import { FaArrowRight } from 'react-icons/fa';

import PropTypes from 'prop-types';

import PecaZap from '../../components/Logo/PecaZap';
import Mail from '../../components/Logo/Mail';
import Skype from '../../components/Logo/Skype';
import WhatsApp from '../../components/Logo/WhatsApp';
import Phone from '../../components/Logo/Phone';
import Chat from '../../components/Logo/Chat';

import {
  Container,
  LoginContainer,
  Services,
  Input,
  InputContainer,
  Icon,
  Button,
  Forgot,
} from './styles';

function Login(props) {
  const { history } = props;

  function handleLogin() {
    history.push('/home');
  }

  return (
    <Container>
      <LoginContainer>
        <PecaZap />
        <Services>
          <WhatsApp />
          <Skype />
          <Mail />
          <Phone />
          <Chat />
        </Services>
        <form onSubmit={handleLogin}>
          <InputContainer>
            <Icon>
              <MdPerson />
            </Icon>
            <Input type="text" placeholder="E-mail" />
          </InputContainer>
          <InputContainer>
            <Icon>
              <MdLock />
            </Icon>
            <Input type="password" placeholder="Senha" />
          </InputContainer>
          <Button onClick={handleLogin}>
            ENTRAR
            <FaArrowRight />
          </Button>
        </form>
        <Forgot>Esqueceu a senha?</Forgot>
      </LoginContainer>
    </Container>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Login);
