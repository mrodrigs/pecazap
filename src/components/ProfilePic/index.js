import React from 'react';
import PropTypes from 'prop-types';

function ProfilePic(props) {
  const { src, dimensions } = props;
  return (
    <img
      src={src}
      alt="profilepic"
      style={{
        height: dimensions,
        width: dimensions,
        borderRadius: 120,
      }}
    />
  );
}
ProfilePic.propTypes = {
  src: PropTypes.string,
  dimensions: PropTypes.number.isRequired,
};

ProfilePic.defaultProps = {
  src: 'https://pngimage.net/wp-content/uploads/2019/05/user-png-4.png',
};

export default ProfilePic;
