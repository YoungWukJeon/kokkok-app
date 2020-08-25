import React from 'react';
import {Link} from 'react-router-dom';

interface RegionNameProps {
    name: string;
    fullName: string;
    color: string;
}

const RegionName: React.FC<RegionNameProps> = ({ name, fullName, color }) => {
    const style = {
        'cursor': 'pointer'
    }

    return (
        <Link to={`/touristAttractionList?region=${fullName}`}>
            <svg width="50" height="50" style={style}>
                <circle cx="25" cy="25" r="20" fill={color} />
                <circle cx="25" cy="25" r="16" fill="white" />
                <circle cx="25" cy="25" r="14" stroke={color} strokeWidth="1" fill="white" />
                <text x="50%" y="50%" textAnchor="middle" fontSize=".75rem" dy=".3rem" fill="rgb(74, 74, 74)" fontWeight="bold">{name}</text>
            </svg>
        </Link>
    );
};

export default RegionName;