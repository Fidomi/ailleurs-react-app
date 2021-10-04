import France from '../../components/France';
import React from 'react';
import { useParams } from 'react-router-dom';

function ThematicMap() {
    const { theme } = useParams();
    return (
        <div>
            <h1>Le thème est {theme}</h1>
            <France width="500px" height="483px" />
        </div>
    );
}

export default ThematicMap;
