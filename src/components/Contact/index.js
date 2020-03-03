import React from 'react';
import PropTypes from 'prop-types';

import ProfilePic from '../ProfilePic';

import { Container, Info, Name, Company, Notification } from './styles';

function Contact(props) {
  const { picDimensions, name, company, pic, notification, profile } = props;
  return (
    <Container>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <ProfilePic
          dimensions={picDimensions}
          src={pic}
          style={{ objectFit: 'fit' }}
        />
        <Info>
          <Name isProfile={profile}>{name}</Name>
          <Company isProfile={profile}>{company}</Company>
        </Info>
      </div>
      {notification > 0 ? <Notification>{notification}</Notification> : null}
    </Container>
  );
}

Contact.propTypes = {
  picDimensions: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  notification: PropTypes.number,
  pic: PropTypes.string,
  profile: PropTypes.bool.isRequired,
};

Contact.defaultProps = {
  pic: 'https://pngimage.net/wp-content/uploads/2019/05/user-png-4.png',
  notification: 0,
};

export default Contact;
