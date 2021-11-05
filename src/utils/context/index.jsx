import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Handle screening of the answers
export const SurveyContext = createContext();

export const SurveyProvider = ({ children }) => {
    const [activeQuestion, setActiveQuestion] = useState(null);
    return (
        <SurveyContext.Provider value={{ activeQuestion, setActiveQuestion }}>
            {children}
        </SurveyContext.Provider>
    );
};

SurveyProvider.propTypes = {
    children: PropTypes.object
};

// Store the survey's results
export const ResultsContext = createContext();

export const ResultsProvider = ({ children }) => {
    const [answers, setAnswers] = useState({});
    const saveAnswers = (newAnswers) => {
        setAnswers({ ...answers, ...newAnswers });
    };

    return (
        <ResultsContext.Provider value={{ answers, saveAnswers }}>
            {children}
        </ResultsContext.Provider>
    );
};

ResultsProvider.propTypes = {
    children: PropTypes.object
};
