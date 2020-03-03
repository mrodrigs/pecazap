import React from 'react';
import { FaImage, FaPaperPlane, FaMicrophone, FaCopy } from 'react-icons/fa';

import { Container, IconContainer, Input } from './styles';

export default function ChatInput() {
  return (
    <Container>
      <Input type="text" placeholder="Digite sua mensagem..." />
      <IconContainer>
        <FaImage style={{ color: '#A7B6C2' }} />
        <FaCopy style={{ color: '#A7B6C2', marginLeft: 20 }} />
        <FaMicrophone style={{ color: '#A7B6C2', marginLeft: 20 }} />
        <FaPaperPlane style={{ color: '#A7B6C2', marginLeft: 20 }} />
      </IconContainer>
    </Container>
  );
}
