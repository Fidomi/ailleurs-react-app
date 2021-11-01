/* eslint-disable function-paren-newline */
import { Answer, AnswerLabel, Container } from './style';
import PropTypes from 'prop-types';
import React from 'react';

const AnswersContainer = (props) => {
    function handleSelectChange(event) {
        props.setSelectedAnswer(parseInt(event.target.value, 10));
    }
    return (
        <Container>
            {props.dataAnswers.answers.map((answer, index) => (
                <AnswerLabel
                    key={`answer-${props.questionNumber}-${index}`}
                    htmlFor={`answer-${props.questionNumber}-${index}`}
                >
                    <Answer
                        type="radio"
                        value={index}
                        name={`answer-${props.questionNumber}-${index}`}
                        id={`answer-${props.questionNumber}-${index}`}
                        checked={props.selectedAnswer === index}
                        onChange={handleSelectChange}
                    />
                    {answer.charAt(0).toUpperCase() + answer.substring(1)}
                </AnswerLabel>
            ))}
        </Container>
    );
};

export default AnswersContainer;

AnswersContainer.propTypes = {
    dataAnswers: PropTypes.object,
    questionNumber: PropTypes.number,
    selectedAnswer: PropTypes.number,
    setSelectedAnswer: PropTypes.func
};
