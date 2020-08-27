import React, {useEffect, useState} from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonRefresher,
    IonRefresherContent,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    useIonViewWillEnter
} from '@ionic/react';
import {RefresherEventDetail} from '@ionic/core';

import {useLocation} from "react-router";
import {Link} from "react-router-dom";

import TouristAttraction from "../../../components/TouristAttraction";

import './index.scss';

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

const doRefresh = (event: CustomEvent<RefresherEventDetail>) => {
    console.log("Begin async operation");

    setTimeout(() => {
        console.log("Async operation has ended");
        event.detail.complete();
    }, 2000);
};

const regionNames = [
    "괴산군", "단양군", "보은군",
    "영동군", "옥천군", "음성군", "제천시",
    "증평군", "진천군", "청주시", "충주시"
];

const touristAttractionInfos = [
    {
        // key: "괴산 문화원1",
        name: "괴산 문화원",
        imageUrl: "/assets/images/best01.png",
        address: "충북 괴산군 괴산읍 읍내로 268",
        sharedCount: 2,
        recommendCount: 0
    },
    {
        // key: "괴산 문화원2",
        name: "괴산 문화원",
        imageUrl: "/assets/images/best02.png",
        address: "충북 괴산군 괴산읍 읍내로 268",
        sharedCount: 2,
        recommendCount: 0
    },
    {
        // key: "괴산 문화원3",
        name: "괴산 문화원",
        imageUrl: "/assets/images/best03.png",
        address: "충북 괴산군 괴산읍 읍내로 268",
        sharedCount: 2,
        recommendCount: 0
    },
    {
        // key: "괴산 문화원4",
        name: "괴산 문화원",
        imageUrl: "/assets/images/best04.png",
        address: "충북 괴산군 괴산읍 읍내로 268",
        sharedCount: 2,
        recommendCount: 0
    }
];

const TouristAttractionList: React.FC = () => {
    const location = useLocation();
    const [regions, setRegions] = useState<any[]>([]);
    const [touristAttractions, setTouristAttractions] = useState<any[]>([]);
    const [disableInfiniteScroll, setDisableInfiniteScroll] = useState<boolean>(false);

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

    const insert = (array: any[]) => {
        const res = [];
        if (res.length > -1) {  // 나중에 res.length > 0으로 바꿔야됨
            setTouristAttractions([...touristAttractions, ...array]);
            // console.log('infinite scroll disabled[' + (res.length < 5) + ']');
            // setDisableInfiniteScroll(res.length < 5);   // 이걸로 마지막 목록인지 체크하는 거임
        } else {
            console.log('infinite scroll disabled');
            setDisableInfiniteScroll(true);
        }
    }

    const searchNext = (event: CustomEvent<void>) => {
        console.log("Begin async operation(infinite scroll)");

        setTimeout(() => {
            console.log("Async operation has ended(infinite scroll)");
            insert([
                {
                    // key: "괴산 문화원" + (touristAttractions.length + 1),
                    name: "괴산 문화원",
                    imageUrl: "/assets/images/best01.png",
                    address: "충북 괴산군 괴산읍 읍내로 268",
                    sharedCount: 2,
                    recommendCount: 0
                }
            ]);
            (event.target as HTMLIonInfiniteScrollElement).complete();
        }, 1000);
    };

    useIonViewWillEnter(() => {
        insert(touristAttractionInfos);
    });

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

                <IonRefresher onIonRefresh={doRefresh}>
                    <IonRefresherContent />
                </IonRefresher>

                <IonList id="list-container">
                    <div id="container-wrapper">
                        {touristAttractions.map((touristAttractionInfo, index) => (
                            <TouristAttraction
                                key={index}
                                name={touristAttractionInfo.name}
                                imageUrl={touristAttractionInfo.imageUrl}
                                address={touristAttractionInfo.address}
                                sharedCount={touristAttractionInfo.sharedCount}
                                recommendCount={touristAttractionInfo.recommendCount}
                            />
                        ))}
                    </div>
                </IonList>

                <IonInfiniteScroll
                    threshold="5%"
                    disabled={disableInfiniteScroll}
                    onIonInfinite={(e: CustomEvent<void>) => searchNext(e)}>
                    <IonInfiniteScrollContent
                        loadingSpinner="circular"
                        loadingText="Loading more good doggos..." />
                </IonInfiniteScroll>
            </IonContent>
        </IonPage>
    );
};

export default TouristAttractionList;