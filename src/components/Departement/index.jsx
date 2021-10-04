import React from 'react';

function Departement(props) {
    return (
        <path
            d={props.d}
            data-name={props.dataName}
            data-num={props.dataNum}
            fill={props.fill}
            stroke={props.stroke}
        ></path>
    );
}

export default Departement;
