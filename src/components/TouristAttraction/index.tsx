import React from "react";
import { IonCard, IonIcon, IonImg, IonItem, IonCardContent, IonLabel } from "@ionic/react";
import { locationSharp, shareOutline, heart } from "ionicons/icons";

import "./index.scss";

interface TouristAttractionProps {
    no: number,
    name: string,
    imageUrl: string,
    address: string,
    sharedCount: number,
    recommendCount: number
}

const TouristAttraction: React.FC<TouristAttractionProps> = ({
    no, name, imageUrl, address, sharedCount, recommendCount
}) => {
    return (
        <IonCard>
            <IonItem detail={true} lines="full" routerLink={`/touristAttractions/${no}`}>
                <IonLabel>{name}</IonLabel>
            </IonItem>

            <IonCardContent className="item-content">
                <div className="item-col">
                    <IonImg src={imageUrl} />
                </div>

                <div className="item-col">
                    <div className="item-area">
                        <IonIcon slot="start" icon={locationSharp} className="location-icon" />
                        <div className="tourist-attraction-address">{address}</div>
                    </div>

                    <div className="item-info">
                        <div className="item-area" style={{display: "inline-block"}}>
                            <IonIcon slot="start" icon={shareOutline} className="scrap-icon" />
                            <div className="tourist-attraction-shared-count">{sharedCount}</div>
                        </div>
                        <div className="item-area" style={{display: "inline-block"}}>
                            <IonIcon slot="start" icon={heart} className="heart-icon" />
                            <div className="tourist-attraction-recommend-count">{recommendCount}</div>
                        </div>
                    </div>
                </div>
            </IonCardContent>
        </IonCard>
    );
};

export default TouristAttraction;