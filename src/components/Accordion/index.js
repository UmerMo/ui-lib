import React, { useState } from 'react';
import {
  AccordionWrapper,
  AccordionItem,
  AccordionButton,
  Chevron,
  AccordionContent,
} from './index.styles';

const Accordion = ({ id, title, children }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AccordionWrapper key={`${id}-key`}>
      <AccordionItem expanded={expanded}>
        <AccordionButton
          id={`${id}-header`}
          role="button"
          aria-controls={`${id}-panel`}
          aria-expanded={expanded}
          onClick={() => setExpanded(!expanded)}
        >
          <span>{title}</span>
          <Chevron>{expanded ? '🔼' : '⬇️'}</Chevron>
        </AccordionButton>
      </AccordionItem>
      {expanded && (
        <AccordionContent
          id={`${id}-panel`}
          aria-labelledby={`${id}-header`}
          hidden={!expanded}
        >
          {children}
        </AccordionContent>
      )}
    </AccordionWrapper>
  );
};

export default Accordion;
