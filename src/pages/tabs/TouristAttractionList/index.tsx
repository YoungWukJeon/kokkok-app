import React, {useEffect, useState} from 'react';
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList} from '@ionic/react';
import './index.scss';
import {useLocation} from "react-router";
import {Link} from "react-router-dom";

import TouristAttraction from "../../../components/TouristAttraction";

export const includesRegionName = (regions: string[], regionName: string): boolean => {
    return regions.includes(regionName);
};

export const pushRegionName = (regions: string[], regionName: string): string => {
    return Array.from(new Set([...regions, regionName])).join(",")
};

export const pullRegionName = (regions: string[], regionName: string): string => {
    const tempArray = [...regions];
    const index = regions.findIndex((region: string) => region === regionName);

    if (index > -1) {
        tempArray.splice(index, 1);
    }

    return Array.from(new Set(tempArray)).join(",");
};

const regionNames = [
    "괴산군", "단양군", "보은군",
    "영동군", "옥천군", "음성군", "제천시",
    "증평군", "진천군", "청주시", "충주시"
];

const TouristAttractionList: React.FC = () => {
    const location = useLocation();
    const [regions, setRegions] = useState([] as any);

    const routeRegionNames = (regionName: string): string => {
        if (includesRegionName(regions, regionName)) {
            return pullRegionName(regions, regionName);
        }
        return pushRegionName(regions, regionName);
    };

    useEffect(() => {
        const param = new URLSearchParams(location.search);
        const arr =
            Array.from(
                new Set(param.get('region')
                    ?.split(","))
            ).filter(region => region.trim() !== '');

        console.log("init regions", arr);
        setRegions([...arr]);
    }, [location.search]);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>충북 콕! 콕!</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList className="fixed-region-name-bar">
                    <div className="region-name-area">
                        <Link
                            key='전체'
                            to={`/touristAttractionList`}
                        >
                            <span
                                className={"region-name" + (regionNames.some(region => includesRegionName(regions, region))? '' : ' selected-region-name')}
                            >
                                전체
                            </span>
                        </Link>
                        {regionNames.map((region) => (
                            <Link
                                key={region}
                                to={`/touristAttractionList?region=${routeRegionNames(region)}`}
                            >
                                <span
                                    className={"region-name" + (includesRegionName(regions, region)? ' selected-region-name': '')}
                                >
                                    {region}
                                </span>
                            </Link>
                        ))}
                    </div>
                </IonList>

                <IonList id="list-container">
                    <div id="container-wrapper">
                        <TouristAttraction
                            key="괴산 문화원"
                            name="괴산 문화원"
                            imageUrl="/assets/images/best01.png"
                            address="충북 괴산군 괴산읍 읍내로 268"
                            sharedCount={2}
                            recommendCount={0}
                        />
                        <TouristAttraction
                            key="괴산 문화원2"
                            name="괴산 문화원2"
                            imageUrl="/assets/images/best02.png"
                            address="충북 괴산군 괴산읍 읍내로 268"
                            sharedCount={2}
                            recommendCount={0}
                        />
                        <TouristAttraction
                            key="괴산 문화원3"
                            name="괴산 문화원3"
                            imageUrl="/assets/images/best03.png"
                            address="충북 괴산군 괴산읍 읍내로 268"
                            sharedCount={2}
                            recommendCount={0}
                        />
                        <TouristAttraction
                            key="괴산 문화원4"
                            name="괴산 문화원4"
                            imageUrl="/assets/images/best04.png"
                            address="충북 괴산군 괴산읍 읍내로 268"
                            sharedCount={2}
                            recommendCount={0}
                        />
                    </div>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default TouristAttractionList;