import React from 'react';
import './index.scss';

interface RegionNameProps {
    name: string;
    color: string;
}

const RegionName: React.FC<RegionNameProps> = ({ name, color }) => {
    return (
        <svg width="50" height="50">
            <circle cx="25" cy="25" r="20" fill={color}></circle>
            <circle cx="25" cy="25" r="16" fill="white"></circle>
            <circle cx="25" cy="25" r="14" stroke={color} strokeWidth="1" fill="white"></circle>
            <text x="50%" y="50%" textAnchor="middle" fontSize=".75rem" dy=".3rem" fill="rgb(74, 74, 74)" fontWeight="bold">{name}</text>
        </svg>
    );
};

export default RegionName;