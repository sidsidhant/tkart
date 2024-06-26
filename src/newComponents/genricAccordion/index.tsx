import React, { useState } from "react";
import { Accordion } from "react-bootstrap";

interface AccordionItem {
  header: string;
  content: string;
  index: number;
}

const AccordionComponent: React.FC<AccordionItem> = ({
  header,
  index,
  content,
}) => {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const handleAccordionSelect = (eventKey: string | null) => {
    setActiveKey(eventKey);
  };

  return (
    <Accordion activeKey={activeKey} onSelect={handleAccordionSelect as any}>
      <Accordion.Item eventKey={index.toString()}>
        <Accordion.Header>{header}</Accordion.Header>
        <Accordion.Body>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AccordionComponent;
