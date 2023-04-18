import styled from 'styled-components';

export const StyledMessage = styled.div`
  background-color: ${(p) => (p.kind === 'info' ? '#EEE9E4' : '#FEF7E6')};
  border-radius: 1rem;
  display: flex;
  max-width: 26.6rem;
  padding: 1.5rem 2rem;
  width: 100%;
  @media (min-width: 768px) {
    max-width: 45.2rem;
  }
  @media (min-width: 1024px) {
    max-width: 72rem;
  }
`;

export const IconContainer = styled.div`
  margin-right: 1rem;
  padding-top: 0.25rem;
`;
