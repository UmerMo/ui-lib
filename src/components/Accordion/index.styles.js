import styled from 'styled-components';

export const AccordionWrapper = styled.div`
  width: 100%;
  margin: 1rem 0;
`;

export const AccordionItem = styled.div`
  padding: 1.5rem 1rem;
  background-color: white;
  border-radius: ${({ expanded }) => (expanded ? `1rem 1rem 0 0` : '1rem')};
  box-shadow: 0 0.25rem 0.5rem rgba(0, 37, 86, 0.15);
  @media (min-width: 1024px)
    padding: 1.625rem 2rem;
  }
`;

export const AccordionButton = styled.button`
  display: grid;
  grid-template-columns: auto 3rem;
  border: none;
  background-color: white;
  width: 100%;
  color: #001633;
  font-size: 1.125rem;
  font-weight: 500;
  cursor: pointer;
  :focus-visible {
    box-shadow: 0 0 0 4px rgba(0, 88, 230, 0.2);
    outline: none;
  }
`;

export const Chevron = styled.div`
  justify-self: end;
  transition: ease all 400ms;
`;

export const AccordionContent = styled.div`
  padding: 0 1rem 1.5rem;
  background-color: white;
  color: #001633;
  border-radius: 0 0 1rem 1rem;
  box-shadow: 0px 4px 4px rgba(0, 37, 86, 0.15);
  @media (min-width: 1024px) {
    padding: 0 2rem 1.5rem 2rem;
  }
`;
