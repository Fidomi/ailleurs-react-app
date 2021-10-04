import { Accordion, AccordionSection } from '../Accordion/index';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledSideMenu } from './style';
import { menuCategories as sideCategories } from '../../data/menuCategories';

const SideMenu = (props) => (
    <StyledSideMenu open={props.open} onClick={props.onClick}>
        <AccordionSection>
            {sideCategories.map((sideCategory) => (
                <Accordion
                    key={sideCategory.id}
                    subcategories={
                        sideCategory.subcategories
                            ? sideCategory.subcategories
                            : null
                    }
                    accordionTitle={sideCategory.name}
                    onClik={() => console.log(sideCategory.subcategories)}
                >
                    {sideCategory.name}
                </Accordion>
            ))}
        </AccordionSection>
    </StyledSideMenu>
);

SideMenu.propTypes = {
    onClick: PropTypes.func,
    open: PropTypes.bool.isRequired
};

export default SideMenu;
