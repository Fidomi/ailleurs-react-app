/* eslint-disable indent */
import { Accordion, AccordionSection } from '../Accordion/index';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledSideMenu } from './style';
import { menuCategories as sideCategories } from '../../data/menuCategories';

const SideMenu = (props) => {
    console.log('les props dans SideMenu', props);
    return (
        <StyledSideMenu
            open={props.open}
            OnMouseLeave={props.isTablet ? props.setOpen(false) : null}
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
};

SideMenu.propTypes = {
    isTablet: PropTypes.bool,
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.any
};

export default SideMenu;
