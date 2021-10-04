/* eslint-disable no-unused-expressions */
/* eslint-disable sort-keys */
/* eslint-disable sort-imports */
import React from 'react';
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

export const Accordion = (props) => (
    <AccordionWrapper open={props.open}>
        {props.subcategories !== null && (
            <AccordionTitle>
                <StyledLink to={props.url}>{props.accordionTitle}</StyledLink>
                <AccordionIcon
                    open={props.open}
                    onClick={() => props.setOpen(!props.open)}
                    icon={faChevronDown}
                />
            </AccordionTitle>
        )}
        {props.url !== null && props.subcategories === null && (
            <AccordionTitle>
                <StyledLink to={props.url}>{props.accordionTitle}</StyledLink>
            </AccordionTitle>
        )}

        <AccordionList open={props.open}>
            {props.subcategories &&
                props.subcategories.map((subcategory) => (
                    <AccordionItem key={subcategory.id} open={props.open}>
                        <StyledLink to={subcategory.url}>
                            {subcategory.name}
                        </StyledLink>
                    </AccordionItem>
                ))}
        </AccordionList>
    </AccordionWrapper>
);
export function AccordionSection(props) {
    return <StyledAccordionSection>{props.children}</StyledAccordionSection>;
}

Accordion.propTypes = {
    accordionTitle: PropTypes.string.isRequired,
    // Todo : correct "any" type
    subcategories: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
    url: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
    open: PropTypes.bool,
    setOpen: PropTypes.func
};

AccordionSection.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
