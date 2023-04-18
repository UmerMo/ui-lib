import styled from 'styled-components';

const cardStyles = ({ alignment }) => `
  background: white;
  display: flex;
  justify-content: space-between;
  text-align: left;
  align-items: ${alignment};
  padding: 21px 28px;
  border-radius: 14px;
  box-shadow: 0px 4px 8px rgba(0, 37, 86, 0.15);
  color: #002556;
  max-width: 1125px;
  :hover {
    cursor: pointer;
    box-shadow: 0 0 0 4px rgba(0, 88, 230, 0.2);
  }
`;

export const CardLink = styled.a`
  ${(props) => cardStyles(props)}
`;

export const Icon = styled.div`
  justify-self: end;
`;

export const StyledText = styled.div`
  padding: 0 16px;
  width: 100%;
`;

export const ArrowIcon = styled.div`
  padding-top: 25px;
  justify-content: center;
`;
