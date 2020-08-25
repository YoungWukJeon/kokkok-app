import React from "react";
import { IonCard, IonIcon, IonImg, IonItem, IonCardContent, IonLabel, IonText } from "@ionic/react";
import { chevronForwardOutline, locationSharp, shareOutline, heart } from "ionicons/icons";

import "./index.scss";

interface TouristAttractionProps {

}

const TouristAttraction: React.FC<TouristAttractionProps> = ({

}) => {
    return (
        <IonCard>
            <IonItem detail={true}>
                <IonLabel>괴산 문화원</IonLabel>
            </IonItem>

            <IonCardContent className="item-content">
                <div className="item-col">
                    <IonImg src={"/assets/images/best01.png"} />
                </div>

                <div className="item-col">
                    <div className="item-area">
                        <IonIcon slot="start" icon={locationSharp} className="location-icon" />
                        <div className="tourist-attraction-address">충북 괴산군 괴산읍 읍내로 268</div>
                    </div>

                    <div className="item-info">
                        <div className="item-area" style={{display: "inline-block"}}>
                            <IonIcon slot="start" icon={shareOutline} className="scrap-icon" />
                            <div className="tourist-attraction-shared-count">2</div>
                        </div>
                        <div className="item-area" style={{display: "inline-block"}}>
                            <IonIcon slot="start" icon={heart} className="heart-icon" />
                            <div className="tourist-attraction-recommend-count">0</div>
                        </div>
                    </div>
                </div>
            </IonCardContent>
        </IonCard>
    );
};

export default TouristAttraction;