import France from '../../components/France';
import React from 'react';
import { useParams } from 'react-router-dom';

function ThematicMap() {
    const { theme } = useParams();
    return (
        <div>
            <h1>Le thème est {theme}</h1>
            <France width="100%" height="auto" />
        </div>
    );
}

export default ThematicMap;
