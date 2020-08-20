import React, {useEffect, useState} from 'react';
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './index.scss';
import {useLocation} from "react-router";
import {Link} from "react-router-dom";

export const includesRegionName = (regions: string[], regionName: string): boolean => {
    return regions.includes(regionName);
};

export const pushRegionName = (regions: string[], regionName: string): string => {
    return Array.from(new Set([...regions, regionName])).join(",")
}

const regionNames = [
    "괴산군", "단양군", "보은군",
    "영동군", "옥천군", "음성군", "제천시",
    "증평군", "진천군", "청주시", "충주시"
];

const AreaList: React.FC = () => {
    const location = useLocation();
    const [regions, setRegions] = useState([] as any);

    useEffect(() => {
        const param = new URLSearchParams(location.search);
        const arr =
            Array.from(
                new Set(param.get('region')
                    ?.split(","))
            ).filter(region => region.trim() !== '');

        console.log("init regions", arr);
        setRegions([...arr]);
    }, []);

    const handleRegionNameClick = (event: React.MouseEvent, region: string) => {
        // event.target.
        console.log(event.target);
    };

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

                <div className="fixed-region-name-bar">
                    <div className="region-name-area">
                        <Link
                            key='전체'
                            to={`/areaList`}
                        >
                            <span
                                onClick={(event) => handleRegionNameClick(event, '')}
                                className={"region-name" + (regionNames.some(region => includesRegionName(regions, region))? '' : ' selected-region-name')}
                            >
                                전체
                            </span>
                        </Link>
                        {regionNames.map((region) => (
                            <Link
                                key={region}
                                to={`/areaList?region=${pushRegionName(regions, region)}`}
                                onClick={(event) => handleRegionNameClick(event, region)}
                            >
                                <span

                                    className={"region-name" + (includesRegionName(regions, region)? ' selected-region-name': '')}
                                >
                                    {region}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>


            </IonContent>
        </IonPage>
    );
};

export default AreaList;
