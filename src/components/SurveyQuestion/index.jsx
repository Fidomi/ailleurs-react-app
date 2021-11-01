/* eslint-disable no-unused-vars */
/* eslint-disable dot-location */
/* eslint-disable indent */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
import { ChevronIcon, Container, Question, QuestionText } from './style';
import React, { useState } from 'react';
import AnswersContainer from '../AnswersContainer/index';
import PropTypes from 'prop-types';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from 'react-query';

const fetchQuestion = async () => {
    const res = await fetch(`http://localhost:3002/survey/`);
    const result = await res.json();
    return result;
};

const SurveyQuestion = (props) => {
    const { status, data, error, isFetching } = useQuery(`survey`, () =>
        fetchQuestion()
    );
    const [chevronOpen, setChevronOpen] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(0);

    return (
        <Container key={props.questionNumber}>
            {status === 'error' && <div>{error.message}</div>}
            {status === 'loading' && <div>Loading data...</div>}
            {status === 'success' && (
                <Question>
                    <QuestionText htmlFor={props.questionNumber}>
                        {data[props.questionNumber].questionBody
                            .charAt(0)
                            .toUpperCase() +
                            data[props.questionNumber].questionBody.substring(
                                1
                            )}
                        {isFetching && <p>updating...</p>}
                    </QuestionText>
                    <ChevronIcon
                        chevronopen={chevronOpen}
                        onClick={() => {
                            chevronOpen === 0
                                ? setChevronOpen(1)
                                : setChevronOpen(0);
                        }}
                        icon={faChevronDown}
                    />
                </Question>
            )}
            {chevronOpen === 1 && (
                <AnswersContainer
                    name={selectedAnswer}
                    id={props.questionNumber}
                    selectedAnswer={selectedAnswer}
                    setSelectedAnswer={setSelectedAnswer}
                    dataAnswers={data[props.questionNumber]}
                    questionNumber={data[props.questionNumber].questionNumber}
                />
            )}
        </Container>
    );
};

export default SurveyQuestion;

SurveyQuestion.propTypes = {
    questionNumber: PropTypes.number
};
