import { Accordion, AccordionSection } from '../Accordion/index';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledSideMenu } from './style';
import { menuCategories as sideCategories } from '../../data/menuCategories';

const SideMenu = (props) => (
    <StyledSideMenu
        open={props.open}
        onClick={props.onClick}
        onMouseLeave={() => {
            props.handleOpen(false);
        }}
    >
        <AccordionSection>
            {sideCategories.map((sideCategory) => (
                <Accordion
                    open={props.open}
                    key={sideCategory.id}
                    subcategories={
                        sideCategory.subcategories
                            ? sideCategory.subcategories
                            : null
                    }
                    url={sideCategory.url ? sideCategory.url : null}
                    accordionTitle={sideCategory.name}
                >
                    {sideCategory.name}
                </Accordion>
            ))}
        </AccordionSection>
    </StyledSideMenu>
);

SideMenu.propTypes = {
    handleOpen: PropTypes.func,
    onClick: PropTypes.func,
    open: PropTypes.bool.isRequired
};

export default SideMenu;
