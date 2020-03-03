import React from 'react';
import { FaPlus, FaSearch, FaCaretDown } from 'react-icons/fa';

import Contact from '../../../components/Contact';

import api from '../../../api';

import {
  Container,
  SearchContainer,
  Search,
  Icon,
  Filter,
  AddChat,
  Text,
} from './styles';

export default function Aside() {
  return (
    <Container>
      <Contact
        profile={false}
        picDimensions={32}
        name="Maurício Rodrigues"
        company="PEÇAZAP"
        pic="https://lh3.googleusercontent.com/a-/AAuE7mC0--qzGsJ2YzLSjn_SVn8ztwtnVYiCxL_gPMGZYw=s96-cc-rg"
      />
      <SearchContainer>
        <Search />
        <Icon>
          <FaSearch style={{ color: '#fff' }} />
        </Icon>
      </SearchContainer>
      <AddChat>
        <Filter>
          <Text>EM ANDAMENTO</Text>
          <FaCaretDown style={{ color: '#007567', cursor: 'pointer' }} />
        </Filter>
        <FaPlus style={{ color: '#fff', cursor: 'pointer' }} />
      </AddChat>
      {api.map(contact => (
        <Contact
          profile={false}
          key={contact.id}
          name={contact.name}
          company={contact.company}
          notification={contact.notification}
          pic={contact.pic}
          picDimensions={48}
        />
      ))}
    </Container>
  );
}
