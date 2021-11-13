/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { ResultsContext } from '../../utils/context/index';
import France from '../../components/France/index';
import { useQuery } from 'react-query';

const fetchResults = async (queryString) => {
    const res = await fetch(`http://localhost:3002/mymap/?${queryString}`);
    const result = await res.json();
    return result;
};

function MyDestination() {
    const { answers, saveAnswers } = useContext(ResultsContext);

    let answersArray = [];
    for (const answer in answers) {
        answersArray.push(answers[answer]);
    }
    const queryString = answersArray.reduce(
        (acc, word, index) =>
            index === 0
                ? acc + `a${index}=${word}`
                : acc + `&a${index}=${word}`,
        ''
    );
    const { status, data, error, isFetching } = useQuery(`results`, () =>
        fetchResults(queryString)
    );
    const results = data;
    return (
        <React.Fragment>
            {status === 'error' && <div>{error.message}</div>}
            {status === 'loading' && <div>Loading data...</div>}
            {status === 'success' && (
                <France title="Ma Destination" results={results} />
            )}
        </React.Fragment>
    );
}

export default MyDestination;
