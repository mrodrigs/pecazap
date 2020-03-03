import React from 'react';

import api from '../../../api';

import ProfilePic from '../../../components/ProfilePic';

import {
  Container,
  Date,
  ContactContainer,
  ContactInfo,
  Name,
  Time,
  MessageTriangle,
  MessageContainer,
  FriendMessage,
  FriendContactInfo,
  FriendMessageTriangle,
} from './styles';

const Seen = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ margin: '0 10px' }}
  >
    <path
      d="M15.7805 5.46248L14.5432 4.22516C14.2495 3.93146 13.7745 3.93146 13.484 4.22516L6.00068 11.7084L2.51994 8.22458C2.22624 7.93087 1.75131 7.93087 1.46072 8.22458L0.22028 9.46502C-0.0734267 9.75873 -0.0734267 10.2337 0.22028 10.5274L5.46951 15.7797C5.76322 16.0734 6.23815 16.0734 6.52873 15.7797L15.7774 6.52483C16.0711 6.22799 16.0711 5.75306 15.7805 5.46248ZM5.64761 8.7745C5.84133 8.97134 6.16004 8.97134 6.35376 8.7745L12.8528 2.2692C13.0465 2.07235 13.0465 1.75677 12.8528 1.56305L11.4405 0.147635C11.2468 -0.0492115 10.9281 -0.0492115 10.7344 0.147635L6.00068 4.88132L4.26969 3.1472C4.07597 2.95035 3.75726 2.95035 3.56354 3.1472L2.14812 4.56261C1.9544 4.75946 1.9544 5.07504 2.14812 5.26876L5.64761 8.7745Z"
      fill="#4FC3F7"
    />
  </svg>
);

export default function ChatContainer() {
  return (
    <Container>
      {api[0].messages.map(message =>
        message.isMine ? (
          <ContactContainer>
            <FriendContactInfo>
              <ProfilePic
                dimensions={24}
                src="https://lh3.googleusercontent.com/a-/AAuE7mC0--qzGsJ2YzLSjn_SVn8ztwtnVYiCxL_gPMGZYw=s96-cc-rg"
              />
              <Name style={{ marginRight: 10 }}>Rodrigo</Name>
              <Name style={{ margin: '0px 5px' }}>-</Name>
              <Time>07/10/2019 14h15</Time>
              {Seen}
            </FriendContactInfo>
            <FriendMessageTriangle
              style={{ display: 'flex', alignSelf: 'flex-end' }}
            />
            <FriendMessage>{message.content}</FriendMessage>
          </ContactContainer>
        ) : (
            <ContactContainer>
              <ContactInfo>
                <ProfilePic dimensions={24} src={api[0].pic} />
                <Name style={{ marginLeft: 10 }}>João da Silva</Name>
                <Name style={{ margin: '0px 5px' }}>-</Name>
                <Time>07/10/2019 14h00</Time>
                {Seen}
              </ContactInfo>
              <MessageTriangle />
              <MessageContainer>{message.content}</MessageContainer>
            </ContactContainer>
          )
      )}
      <ContactContainer>
        <FriendContactInfo>
          <ProfilePic
            dimensions={24}
            src="https://lh3.googleusercontent.com/a-/AAuE7mC0--qzGsJ2YzLSjn_SVn8ztwtnVYiCxL_gPMGZYw=s96-cc-rg"
          />
          <Name style={{ marginRight: 10 }}>Maurício Rodrigues</Name>
          <Name style={{ margin: '0px 5px' }}>-</Name>
          <Time>07/10/2019 14h10</Time>
          {Seen}
        </FriendContactInfo>
        <FriendMessageTriangle
          style={{ display: 'flex', alignSelf: 'flex-end' }}
        />
        <FriendMessage>
          Quisque enim purus, hendrerit et volutpat viverra, faucibus non neque.
          Suspendisse quis arcu lacus. Sed tincidunt dui at leo laoreet, vel
          suscipit mauris dignissim. Phasellus ullamcorper orci ac lorem
          ultrices, ac fringilla nisi bibendum.
        </FriendMessage>
      </ContactContainer>
      <ContactContainer>
        <ContactInfo>
          <ProfilePic dimensions={24} src={api[0].pic} />
          <Name style={{ marginLeft: 10 }}>João da Silva</Name>
          <Name style={{ margin: '0px 5px' }}>-</Name>
          <Time>07/10/2019 14h00</Time>
          {Seen}
        </ContactInfo>
        <MessageTriangle />
        <MessageContainer>
          Quisque enim purus, hendrerit et volutpat viverra, faucibus non neque.
          Suspendisse quis arcu lacus. Sed tincidunt dui at leo laoreet, vel
          suscipit mauris dignissim. Phasellus ullamcorper orci ac lorem
          ultrices, ac fringilla nisi bibendum.
        </MessageContainer>
      </ContactContainer>
      <Date>
        Atendimento finalizado em⠀
        <b>07/10/2019</b>
      </Date>
    </Container>
  );
}
