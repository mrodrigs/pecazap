import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaPlus, FaSearch, FaCaretDown } from 'react-icons/fa';

import Contact from '../../../components/Contact';

import {
  Container,
  SearchContainer,
  Search,
  Icon,
  Filter,
  AddChat,
  Text,
  UserContainer,
  LogoutContainer,
  ContactsContainer,
  OuterContainer,
} from './styles';

const loggedUrl = 'http://www.mocky.io/v2/5e5fc82b3100001e29afdf63';
const usersUrl = 'http://www.mocky.io/v2/5e5fefe83300004e0997b721';

export default function Aside() {
  const [loggedUser, setLoggedUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [active, setActive] = useState(0);

  async function handleGetLoggedUser() {
    try {
      const response = await axios.get(loggedUrl);

      if (response.status === 200) {
        setLoggedUser(response.data);
      }
    } catch (err) {
      console.log(err.response.data);
    }
  }

  async function handleGetUsers() {
    try {
      const response = await axios.get(usersUrl);

      if (response.status === 200) {
        setUsers(response.data);
      }
    } catch (err) {
      console.log(err.response.data);
    }
  }

  function handleChangeActive(id) {
    setActive(id);
  }

  useEffect(() => {
    handleGetLoggedUser();
    handleGetUsers();
  }, []);

  return (
    <OuterContainer>
      <Container>
        <UserContainer>
          {loggedUser ? (
            <Contact
              profile={false}
              picDimensions={32}
              name={loggedUser.name}
              company={loggedUser.company}
              pic={loggedUser.pic}
            />
          ) : null}
          <LogoutContainer>
            <Link to="/">
              <FaCaretDown
                style={{
                  color: '#007567',
                  cursor: 'pointer',
                  display: 'flex',
                }}
              />
            </Link>
          </LogoutContainer>
        </UserContainer>
        <SearchContainer>
          <Search />
          <Icon>
            <FaSearch style={{ color: '#fff' }} />
          </Icon>
        </SearchContainer>
        <AddChat>
          <Filter>
            <Text>EM ANDAMENTO</Text>
            <FaCaretDown
              style={{ color: '#007567', cursor: 'pointer', marginLeft: 17 }}
            />
          </Filter>
          <FaPlus style={{ color: '#fff', cursor: 'pointer' }} />
        </AddChat>
      </Container>
      <ContactsContainer>
        {users.map(contact => (
          <Contact
            profile={false}
            key={contact.id}
            name={contact.name}
            company={contact.company}
            notification={contact.notification}
            pic={contact.pic}
            picDimensions={48}
            active={active === contact.id}
            onClick={() => handleChangeActive(contact.id)}
          />
        ))}
      </ContactsContainer>
    </OuterContainer>
  );
}
