/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */

import BackgroundImage from '../../assets/pine-watt-unsplash.jpg';
import device from '../../utils/styles/device';
import styled from 'styled-components';

export const SurveyContainer = styled.form`
    height: 170vh;
    width: 100vw;
    background-image: url(${BackgroundImage});
    background-size: cover;
    background-repeat: space repeat;
    margin: 1rem 0 0 0;
    display: flex;
    flex-direction: column;
    @media ${device.tablet} {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
`;

export const Text = styled.div`
    width: 95vw;
    padding: 2rem 1rem;
    margin: 0 auto;
    @media ${device.tablet} {
        max-width: 65%;
        margin-top: 5%;
    }
`;

export const GroupButtons = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const SetOfQuestions = styled.div`
    display: flex;
    flex-direction: column;
    @media ${device.tablet} {
        flex-direction: row;
        margin: 1rem 5%;
        justify-content: space-between;
    }
`;
