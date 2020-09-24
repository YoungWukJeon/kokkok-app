import React, {useRef} from "react";
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonListHeader,
    IonSlides,
    IonSlide,
    IonImg,
    IonGrid,
    IonRow,
    IonCol
} from "@ionic/react";

import RegionName from "../../../components/RegionName";
import MainImageMenu from "../../../components/MainImageMenu";
import BestTouristAttraction from "../../../components/BestTouristAttraction";

import "./index.scss";

export const convertArrayDimension = (originalArray: any[]) => {
    const convertedArray: Array<Array<any>> = [];

    originalArray.forEach((element, index) => {
        if (index % 2 > 0) {
            convertedArray.push(originalArray.slice(index - 1, index + 1));
        }
    });

    console.log("convertArrayDimension", "호출!");
    return convertedArray;
};

const menuInfos = [
    {
        imageUrl: "/assets/images/main01.jpg",
        title: "충북의 명소",
        subTitle: "충북 여행을 계획하고 있다면?",
        buttonUrl: "/",
        buttonName: "명소 정보 보기",
    },
    {
        imageUrl: "/assets/images/main07.jpg",
        title: "충북 여행 코스",
        subTitle: "추천 여행 코스가 궁금하다면?",
        buttonUrl: "/",
        buttonName: "코스 정보 보기",
    },
    {
        imageUrl: "/assets/images/main11.jpg",
        title: "충북 여행기",
        subTitle: "여행지에 대한 후기가 궁금하다면?",
        buttonUrl: "/",
        buttonName: "여행기 보기",
    },
    {
        imageUrl: "/assets/images/main10.jpg",
        title: "주변정보 찾기",
        subTitle: "여행에 유용한 주변 정보를 찾는다면?",
        buttonUrl: "/",
        buttonName: "주변정보 찾기",
    },
];

const regionInfos = [
    {
        name: "괴산",
        fullName: "괴산군",
        color: "rgb(148, 153, 210)"
    },
    {
        name: "단양",
        fullName: "단양군",
        color: "rgb(94, 142, 191)"
    },
    {
        name: "보은",
        fullName: "보은군",
        color: "rgb(94, 167, 191)"
    },
    {
        name: "영동",
        fullName: "영동군",
        color: "rgb(94, 191, 142)"
    },
    {
        name: "옥천",
        fullName: "옥천군",
        color: "rgb(142, 191, 94)"
    },
    {
        name: "음성",
        fullName: "음성군",
        color: "rgb(191, 133, 181)"
    },
    {
        name: "제천",
        fullName: "제천시",
        color: "rgb(191, 133, 152)"
    },
    {
        name: "증평",
        fullName: "증평군",
        color: "rgb(191, 159, 133)"
    },
    {
        name: "진천",
        fullName: "진천군",
        color: "rgb(193, 179, 102)"
    },
    {
        name: "청주",
        fullName: "청주시",
        color: "rgb(177, 210, 147)"
    },
    {
        name: "충주",
        fullName: "충주시",
        color: "rgb(147, 210, 175)"
    }
];

const festivalBannerUrls = [
    "/assets/images/festival01.jpg",
    "/assets/images/festival02.jpg",
    "/assets/images/festival03.jpg",
    "/assets/images/festival04.jpg",
    "/assets/images/festival05.jpg",
];

const bestTouristAttractionInfos = [
    {
        no: 1,
        regionName: "괴산",
        recommendCount: 6,
        name: "괴산청결고추박물관",
        imageUrl: "/assets/images/best01.png"
    },
    {
        no: 2,
        regionName: "괴산",
        recommendCount: 3,
        name: "괴산한지체험박물관",
        imageUrl: "/assets/images/best02.png"
    },
    {
        no: 3,
        regionName: "보은",
        recommendCount: 2,
        name: "솔향공원",
        imageUrl: "/assets/images/best03.png"
    },
    {
        no: 4,
        regionName: "영동",
        recommendCount: 1,
        name: "난계국악기체험전수관",
        imageUrl: "/assets/images/best04.png"
    }
];

const menuSlidesOpts = {
    initialSlide: 0,
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 2500,
    }
};

const bannerSlidesOpts = {
    initialSlide: 0,
    speed: 500,
    loop: true,
    autoplay: {
        delay: 2000,
    }
};

const Home: React.FC = () => {
    const menuSlides = useRef(document.createElement("ion-slides"));
    const bannerSlides = useRef(document.createElement("ion-slides"));

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

                <IonSlides
                    onIonSlideDidChange={() => menuSlides.current.startAutoplay()}
                    options={menuSlidesOpts}
                    ref={menuSlides}
                >
                    {menuInfos.map((info) => (
                        <IonSlide>
                            <MainImageMenu
                                image={info.imageUrl}
                                title={info.title}
                                subTitle={info.subTitle}
                                buttonUrl={info.buttonUrl}
                                buttonName={info.buttonName}
                            />
                        </IonSlide>
                    ))}
                </IonSlides>

                <IonList>
                    <IonListHeader className="content-header">지역별 명소</IonListHeader>

                    <div className="region-area">
                        {regionInfos.map((region) => (
                            <RegionName
                                name={region.name}
                                fullName={region.fullName}
                                color={region.color}
                            />
                        ))}
                    </div>
                </IonList>

                <IonList>
                    <IonListHeader className="content-header">
                        다가오는 축제 정보
                    </IonListHeader>
                    <IonSlides
                        onIonSlideDidChange={() => bannerSlides.current.startAutoplay()}
                        options={bannerSlidesOpts}
                        ref={bannerSlides}
                    >
                        {festivalBannerUrls.map((festivalImageUrl) => (
                            <IonSlide>
                                <IonImg
                                    src={festivalImageUrl}
                                    className="banner-festival"
                                />
                            </IonSlide>
                        ))}
                    </IonSlides>
                </IonList>

                <IonList>
                    <IonListHeader className="content-header">BEST 명소</IonListHeader>
                    <IonGrid className="best-tourist-attraction-area">
                        {convertArrayDimension(bestTouristAttractionInfos).map((rowTouristAttractionInfos) => (
                            <IonRow>
                                {rowTouristAttractionInfos.map((touristAttractionInfo) => (
                                    <IonCol>
                                        <BestTouristAttraction
                                            no={touristAttractionInfo.no}
                                            regionName={touristAttractionInfo.regionName}
                                            recommendCount={touristAttractionInfo.recommendCount}
                                            name={touristAttractionInfo.name}
                                            imageUrl={touristAttractionInfo.imageUrl}
                                        />
                                    </IonCol>
                                ))}
                            </IonRow>
                        ))}
                    </IonGrid>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Home;