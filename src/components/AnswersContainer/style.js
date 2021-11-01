/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import { colors } from '../../utils/styles/colors';
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 0.3rem 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
`;

export const Answer = styled.input`
    width: 5%;
`;

export const AnswerLabel = styled.label`
    display: flex;
    flex-flow: row;
    border-radius: 1rem;
    background-color: rgba(10, 10, 10, 0.5);
    font-size: 0.9rem;
    color: ${colors.secondary};
    padding: 1rem;
    margin: 0.5rem 0;
`;
