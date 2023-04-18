import styled, { css, keyframes } from 'styled-components';
import { rem } from 'polished';

const animationDurationInSeconds = 1;

const messageType = {
  error: '#FFDEDE',
  info: '#F8FAFF',
  success: '#F2FFF7',
  warning: '#FFF6EF',
};

const borderColor = {
  error: '#DF1E1E',
  info: '#23A6F0',
  success: '#76D8A3',
  warning: '#E77C40',
};

const fadeOut = keyframes`
  from {
    height: ${rem(99)};
    opacity: 1;
    visibility: visible;
    padding-top: ${rem(16)};
    padding-bottom: ${rem(19)};
  }
  to {
    height: 0px;
    opacity: 0;
    visibility: hidden;
    padding-top: ${rem(0)};
    padding-bottom: ${rem(0)};
  }
`;

export default styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ type }) => borderColor[type]};
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  align-items: center;
  background: ${({ type }) => messageType[type]};
  border-style: solid;
  border-color: ${({ type }) => borderColor[type]};
  border-width: 1px;
  border-radius: 5px;
  height: 0;
  padding: ${({ show }) =>
    show
      ? `${rem(16)} ${rem(14)} ${rem(19)} ${rem(14)}`
      : ` 0 ${rem(14)} 0 ${rem(14)}`};
  @media (min-width: 1440px) {
    padding: ${({ show }) =>
      show
        ? `${rem(16)} ${rem(47)} ${rem(19)} ${rem(47)}`
        : `0 ${rem(47)} 0 ${rem(47)}`};
  }
  @media (min-width: 768px) {
    padding: ${({ show }) => (show ? `${rem(19)} 0` : '0')};
    max-width: ${rem(428)};
    margin: 0 auto;
  }
  animation: ${({ show }) =>
    show
      ? 'none'
      : css`
          ${fadeOut} ${animationDurationInSeconds}s linear
        `};
  height: ${({ show }) => (show ? `${rem(40)}` : '0px')};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
`;
