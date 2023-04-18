import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StyledSnackbar from './index.styles';

const Snackbar = ({ children, duration, type }) => {
  const [show, setShow] = useState(true);
  const timeoutDuration =
    duration.unit === 'seconds' ? duration.value * 1000 : duration.value;
  let timeout;

  const icons = {
    warning: '☢️',
    success: '✅',
    info: 'ℹ️',
    error: '⛔️',
  };

  useEffect(() => () => clearTimeout(timeout), []);

  useEffect(() => {
    if (show) {
      timeout = setTimeout(() => {
        setShow(false);
      }, timeoutDuration);
    } else {
      clearTimeout(timeout);
    }
  }, [show]);

  return (
    <StyledSnackbar type={type} show={show}>
      {icons[type]} {children}
    </StyledSnackbar>
  );
};

Snackbar.propTypes = {
  type: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
  children: PropTypes.node.isRequired,
  duration: PropTypes.shape({
    unit: PropTypes.oneOf(['milliseconds', 'seconds']),
    value: PropTypes.number,
  }),
};

Snackbar.defaultProps = {
  type: 'success',
  duration: {
    unit: 'seconds',
    value: 5,
  },
};

export default Snackbar;
