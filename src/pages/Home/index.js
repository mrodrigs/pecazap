import React, { useState, useEffect } from 'react';

import Aside from './Aside';
import Header from './Header';
import NavIcons from './NavIcons';
import Profile from './Profile';
import ChatContainer from './ChatContainer';
import ChatInput from './ChatInput';

import { Container, MainContainer, MiddleContainer } from './styles';

export default function Home() {
  const [screenWidth, setScreenWidth] = useState(null);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  return (
    <Container>
      {screenWidth > 980 ? <Aside /> : null}
      <MainContainer>
        <NavIcons />
        <MiddleContainer>
          <Header />
          <ChatContainer />
          <ChatInput />
        </MiddleContainer>
        {screenWidth > 1270 ? <Profile /> : null}
      </MainContainer>
    </Container>
  );
}
