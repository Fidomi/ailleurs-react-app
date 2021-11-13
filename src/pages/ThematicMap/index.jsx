import React, { useState, useEffect } from 'react';
import France from '../../components/France/index';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const fetchResults = async (routeID) => {
    const res = await fetch(`http://localhost:3002/maps/${routeID}`);
    const result = await res.json();
    return result;
};

const handleMapsTypes = (type) => {
    if (type) {
        switch (type) {
            case 'security':
                return 'danger_total';
            case 'family':
                return 'daily_life_confort';
            case 'environment':
                return 'environmental_health';
            default:
                return 'result';
        }
    }
    return 'result';
};

function ThematicMap() {
    const { type } = useParams();
    const defaultResultWord = handleMapsTypes(type);
    const [resultWord, setResultWord] = useState(defaultResultWord);

    useEffect(() => {
        let result = handleMapsTypes(type);
        setResultWord(result);
    }, [type, resultWord]);

    let { status, data, error } = useQuery(
        `results-${type}`,
        () => fetchResults(type),
        { refetchOnMount: true }
    );
    let results = data;

    return (
        <React.Fragment>
            {status === 'error' && <div>{error.message}</div>}
            {status === 'loading' && <div>Loading data...</div>}
            {status === 'success' && (
                <France
                    title={type}
                    results={results}
                    type={type}
                    resultWord={resultWord}
                    setResultWord={setResultWord}
                />
            )}
        </React.Fragment>
    );
}

export default ThematicMap;
