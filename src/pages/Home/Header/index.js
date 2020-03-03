import React from 'react';
import { FaSearch } from 'react-icons/fa';

import Button from '../../../components/Button';

import {
  Container,
  SearchBox,
  SearchContainer,
  SearchIcon,
  ButtonsContainer,
} from './styles';

export default function Header() {
  return (
    <Container>
      <SearchContainer>
        <SearchBox type="text" />
        <SearchIcon>
          <FaSearch style={{ color: '#A7B6C2' }} />
        </SearchIcon>
      </SearchContainer>
      <ButtonsContainer>
        <Button style={{ marginRight: 10 }}>TRANSFERIR</Button>
        <Button primary>FINALIZAR ATENDIMENTO</Button>
      </ButtonsContainer>
    </Container>
  );
}
