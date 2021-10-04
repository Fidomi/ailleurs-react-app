import colors from '../../utils/styles/colors';
import styled from 'styled-components';

export const ErrorContainer = styled.div`
    width: 92%;
    margin: 30px;
    display: flex;
    flex-direction: column;
    background-color: ${colors.primary};
    align-items: center;
`;

export const ErrorTitle = styled.h1`
    text-align: center;
`;
