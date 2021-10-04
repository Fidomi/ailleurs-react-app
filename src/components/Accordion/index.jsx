/* eslint-disable sort-keys */
/* eslint-disable sort-imports */
import React, { useState } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {
    AccordionIcon,
    AccordionItem,
    AccordionList,
    AccordionTitle,
    AccordionWrapper,
    StyledAccordionSection,
    StyledLink
} from './style.js';
import PropTypes from 'prop-types';

export const Accordion = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <AccordionWrapper open={open}>
            <AccordionTitle>
                {props.accordionTitle}
                {props.subcategories !== null && (
                    <AccordionIcon
                        open={open}
                        onClick={() => setOpen(!open)}
                        icon={faChevronDown}
                    />
                )}
            </AccordionTitle>
            <AccordionList open={open}>
                {props.subcategories &&
                    props.subcategories.map((subcategory) => (
                        <AccordionItem key={subcategory.id} open={open}>
                            <StyledLink to={subcategory.url}>
                                {subcategory.name}
                            </StyledLink>
                        </AccordionItem>
                    ))}
            </AccordionList>
        </AccordionWrapper>
    );
};

export function AccordionSection(props) {
    return <StyledAccordionSection>{props.children}</StyledAccordionSection>;
}

Accordion.propTypes = {
    accordionTitle: PropTypes.string.isRequired,
    // Todo : correct "any" type
    subcategories: PropTypes.oneOfType([PropTypes.object, PropTypes.any])
};

AccordionSection.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
