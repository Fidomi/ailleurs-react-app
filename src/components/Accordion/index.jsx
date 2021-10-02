import React, { useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
  StyledAccordionSection,
  AccordionWrapper,
  AccordionTitle,
  AccordionList,
  AccordionItem,
  AccordionIcon,
  StyledLink,
} from "./style.js";

export const Accordion = (props) => {
  const [open, setOpen] = useState(false);
  console.log("props>>>>>>", props);

  return (
    <AccordionWrapper open={open}>
      <AccordionTitle>
        {props.accordionTitle}
        {props.subcategories != null && (
          <AccordionIcon
            open={open}
            onClick={() => setOpen(!open)}
            icon={faChevronDown}
          />
        )}
      </AccordionTitle>
      <AccordionList open={open}>
        {props.subcategories &&
          props.subcategories.map((subcategory) => {
            return (
              <AccordionItem key={subcategory.id} open={open}>
                <StyledLink to={subcategory.url}>{subcategory.name}</StyledLink>
              </AccordionItem>
            );
          })}
      </AccordionList>
    </AccordionWrapper>
  );
};

export const AccordionSection = (props) => {
  return <StyledAccordionSection>{props.children}</StyledAccordionSection>;
};
