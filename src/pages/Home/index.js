import React from 'react';

import Aside from './Aside';
import Header from './Header';
import NavIcons from './NavIcons';
import Profile from './Profile';
import ChatContainer from './ChatContainer';
import ChatInput from './ChatInput';

import { Container, MainContainer, MiddleContainer } from './styles';

export default function Home() {
  return (
    <Container>
      <Aside />
      <MainContainer>
        <NavIcons />
        <MiddleContainer>
          <Header />
          <ChatContainer />
          <ChatInput />
        </MiddleContainer>
        <Profile />
      </MainContainer>
    </Container>
  );
}
