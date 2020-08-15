import React, { Fragment } from 'react';

import './index.scss';
import { IonImg } from '@ionic/react';

interface MainImageMenuProps {
    image: string;
    title: string;
    subTitle: string;
    buttonUrl: string;
    buttonName: string;
}

const MainImageMenu: React.FC<MainImageMenuProps> = ({ image, title, subTitle, buttonUrl, buttonName }) => {
    return (
        <Fragment>
            <IonImg alt={title} src={image} className="menu-image"></IonImg>
            <div className="menu-area">
                <div className="menu-title">{title}</div>
                <div className="menu-subtitle">{subTitle}</div>
                <div className="menu-button">
                    <a href={buttonUrl}>{buttonName}</a>
                </div>
            </div>
        </Fragment>
    );
};

export default MainImageMenu;