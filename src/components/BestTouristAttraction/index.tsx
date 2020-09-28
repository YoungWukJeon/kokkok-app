import React from "react";
import {IonCard, IonIcon, IonImg} from "@ionic/react";
import {heart} from "ionicons/icons";

import "./index.scss";

interface BestTouristAttractionProps {
    no: number,
    regionName: string;
    recommendCount: number;
    name: string;
    imageUrl: string;
}

const BestTouristAttraction: React.FC<BestTouristAttractionProps> = ({
    no, regionName, recommendCount, name, imageUrl
}) => {
    return (
        <IonCard className="best-tourist-attraction" routerLink={`/touristAttractions/${no}`}>
            <div className="item-area">
                <span className="best-tourist-attraction-region-name">
                  {regionName}
                </span>
            </div>

            <div className="item-area">
                <IonIcon slot="start" icon={heart} className="heart-icon"/>
                <div className="best-tourist-attraction-recommend-count">
                    {recommendCount}
                </div>
            </div>

            <div className="item-area">
                <div className="best-tourist-attraction-name">{name}</div>
            </div>

            <IonImg src={imageUrl}/>
        </IonCard>
    );
};

export default BestTouristAttraction;