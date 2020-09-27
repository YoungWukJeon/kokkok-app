import React from "react";
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar, useIonViewWillEnter
} from "@ionic/react";

import "./index.scss";
import {RouteComponentProps} from "react-router";

const touristAttractionInfo = {
    no: 1,
    name: "괴산 문화원",
    imageUrl: ["/assets/images/best01.png", "/assets/images/best02/png", "/assets/images/best03.png"],
    address: "충북 괴산군 괴산읍 읍내로 268",
    latitude: 36.807167849,
    longitude: 127.7937187832,
    phone: '괴산문화원 043-832-3588',
    intro: '괴산문화원은 지역문화축제와 지역사회발전을 위한 문화활동을 전개해 가는 문화공간이다.',
    time: '09:00~18:00<br />※ 강좌에 따라 변동 가능',
    cost: null,
    kind: 'culture',
    sharedCount: 2,
    recommendCount: 0
};

const touristAttractionComment = {
    no: 1,
    nickname: '',
    kind: 'area',
    itemId: '',
    level: 1,
    parentItemId: '',
    date: '',
    content: ''
};

interface MatchParams {
    id: string
}

const TouristAttractionDetail: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
    const fetchData = () => {
        console.log(match.params.id);
    };

    useIonViewWillEnter(() => {
        fetchData();
    });

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

                <div>

                </div>
            </IonContent>
        </IonPage>
    );
};

export default TouristAttractionDetail;