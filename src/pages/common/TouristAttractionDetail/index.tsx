import React, {useRef} from "react";
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";

import "./index.scss";

// TODO 2020.09.24 21:02: TouristAttraction에서 redirectUrl 올바르게 변경하기
// TODO 2020.09.24 21:02: App에서 Route 탭 올바르게 설정하기
const TouristAttractionDetail: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>충북 콕! 콕!</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {/*<IonHeader collapse="condense">*/}
                {/*    <IonToolbar>*/}
                {/*        <IonTitle size="large">충북 콕! 콕!</IonTitle>*/}
                {/*    </IonToolbar>*/}
                {/*</IonHeader>*/}

                ㅎㅇ


            </IonContent>
        </IonPage>
    );
};

export default TouristAttractionDetail;