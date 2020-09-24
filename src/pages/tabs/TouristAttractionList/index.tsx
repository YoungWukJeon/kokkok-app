import React, {useEffect, useState} from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    useIonViewWillEnter,
    IonSpinner
} from '@ionic/react';

import {useLocation} from "react-router";
import {Link} from "react-router-dom";

import TouristAttraction from "../../../components/TouristAttraction";

import './index.scss';
import InfiniteScroll from "react-infinite-scroll-component";

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

const touristAttractionInfos = [
    {
        no: 1,
        name: "괴산 문화원",
        imageUrl: "/assets/images/best01.png",
        address: "충북 괴산군 괴산읍 읍내로 268",
        sharedCount: 2,
        recommendCount: 0
    },
    {
        no: 2,
        name: "괴산 문화원",
        imageUrl: "/assets/images/best02.png",
        address: "충북 괴산군 괴산읍 읍내로 268",
        sharedCount: 2,
        recommendCount: 0
    },
    {
        no: 3,
        name: "괴산 문화원",
        imageUrl: "/assets/images/best03.png",
        address: "충북 괴산군 괴산읍 읍내로 268",
        sharedCount: 2,
        recommendCount: 0
    },
    {
        no: 4,
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
    const [hasMore, setHasMore] = useState<boolean>(true);

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

    const searchNext = () => {
        console.log("Begin async operation(infinite scroll)");

        setTimeout(() => {
            console.log("Async operation has ended(infinite scroll)");
            insert([
                {
                    no: touristAttractions.length + 1,
                    name: "괴산 문화원",
                    imageUrl: "/assets/images/best01.png",
                    address: "충북 괴산군 괴산읍 읍내로 268",
                    sharedCount: 2,
                    recommendCount: 0
                }
            ]);
        }, 1500);
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

                {/*<IonRefresher onIonRefresh={doRefresh}>*/}
                {/*    <IonRefresherContent />*/}
                {/*</IonRefresher>*/}

                <IonList id="list-container">
                    {/*https://openbase.io/js/react-infinite-scroll-component*/}
                    <InfiniteScroll
                        dataLength={touristAttractions.length}
                        next={searchNext}
                        hasMore={hasMore}
                        loader={
                            <IonSpinner
                                name={"lines-small"}
                                style={{ left: "50%" }}
                            />
                        }
                        // height={300}
                        // pullDownToRefresh={true}
                        // refreshFunction={searchNext}
                        scrollableTarget="list-container"
                    >
                        {touristAttractions.map((touristAttractionInfo, index) => (
                            <TouristAttraction
                                key={index}
                                no={touristAttractionInfo.no}
                                name={touristAttractionInfo.name}
                                imageUrl={touristAttractionInfo.imageUrl}
                                address={touristAttractionInfo.address}
                                sharedCount={touristAttractionInfo.sharedCount}
                                recommendCount={touristAttractionInfo.recommendCount}
                            />
                        ))}
                    </InfiniteScroll>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default TouristAttractionList;