import React from 'react';
import PropTypes from 'prop-types';

import { Btn } from './styles';

function Button(props) {
  const { children, primary, style } = props;

  return (
    <Btn primary={primary} style={style} type="button">
      {children}
    </Btn>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  style: PropTypes.shape({}),
};

Button.defaultProps = {
  primary: false,
  style: {},
};

export default Button;
