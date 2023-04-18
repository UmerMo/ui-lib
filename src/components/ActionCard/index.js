import React from 'react';
import { CardLink, Icon, StyledText, ArrowIcon } from './index.styles';

const ActionCard = ({ path, target, onClick, children, alignment }) => {
  const CardComponent = CardLink;
  return (
    <CardComponent
      to={undefined}
      href={path}
      onClick={() => window.open('https://www.bbc.co.uk', '_blank')}
      target={target}
      alignment={alignment}
    >
      <Icon>👨🏻‍⚕️</Icon>
      <StyledText>{children}</StyledText>
      <ArrowIcon>➡️</ArrowIcon>
    </CardComponent>
  );
};

export default ActionCard;
