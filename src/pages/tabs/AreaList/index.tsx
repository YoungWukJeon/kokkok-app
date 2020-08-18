import React, {useEffect, useState} from 'react';
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './index.scss';
import {useLocation} from "react-router";

export const includesRegionName = (regions: string[], regionName: string): boolean => {
    return regions.includes(regionName);
};

const regionName = [
    "괴산군", "단양군", "보은군",
    "영동군", "옥천군", "음성군", "제천시",
    "증평군", "진천군", "청주시", "충주시"
];

const AreaList: React.FC = () => {
    const location = useLocation();
    const [regions, setRegions] = useState([] as any);

    useEffect(() => {
        const param = new URLSearchParams(location.search);
        const arr = Array.from(new Set(param.get('region')?.split(","))).filter(region => region.trim() !== '');
        setRegions([...arr]);
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>충북 콕! 콕!</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">관광지 정보 보기</IonTitle>
                    </IonToolbar>
                </IonHeader>

                {/*todo 지역 버튼을 클릭했을 때, 해당 지역이 선택되고 취소되는 토글 형식의 기능이 필요하고 페이지 이동 기능도 필요(새로운 데이터를 가져오는 호출)*/}

                <div className="fixed-region-name-bar">
                    <div className="region-name-area">
                        <span className={"region-name " + (regionName.some(region => includesRegionName(regions, region))? '' : 'selected-region-name')}>전체</span>
                        {regionName.map((region) => (
                            <span className={"region-name " + (includesRegionName(regions, region)? 'selected-region-name': '')}>{region}</span>
                        ))}
                    </div>
                </div>


            </IonContent>
        </IonPage>
    );
};

export default AreaList;
