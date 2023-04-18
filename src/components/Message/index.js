import React from 'react';
import { StyledMessage, IconContainer } from './index.styles';

const Message = ({ title, children, kind = 'info', headingLevel = 'h3' }) => {
  const Heading = headingLevel;
  return (
    <StyledMessage kind={kind}>
      {kind === 'warning' && <IconContainer>⚠️</IconContainer>}
      <div>
        <Heading className="h5">{title}</Heading>
        <p>{children}</p>
      </div>
    </StyledMessage>
  );
};

export default Message;
