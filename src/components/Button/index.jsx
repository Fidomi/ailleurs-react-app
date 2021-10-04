import PropTypes from 'prop-types';
import React from 'react';
import { StyledButton } from './style';

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => (
    <StyledButton
        onClick={onClick}
        type={type}
        buttonSize={buttonSize}
        buttonStyle={buttonStyle}
    >
        {children}
    </StyledButton>
);

Button.propTypes = {
    buttonSize: PropTypes.string.isRequired,
    buttonStyle: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    onClick: PropTypes.func,
    type: PropTypes.string
};
