import 'core-js';

import { convertArrayDimension } from './index';

describe('HomeTest', () => {
    test('1차원 배열 -> 2차원 배열 변환', () => {
        const bestTouristAttractionInfos = [
            { regionName: "괴산", recommendCount: 6, name: "괴산청결고추박물관", imageUrl: "/assets/images/best01.png" },
            { regionName: "괴산", recommendCount: 3, name: "괴산한지체험박물관", imageUrl: "/assets/images/best02.png" },
            { regionName: "보은", recommendCount: 2, name: "솔향공원", imageUrl: "/assets/images/best03.png" },
            { regionName: "영동", recommendCount: 1, name: "난계국악기체험전수관", imageUrl: "/assets/images/best04.png" }
        ];
    
        const bestTouristAttractions = convertArrayDimension(bestTouristAttractionInfos);

        expect(bestTouristAttractions.length).toEqual(2);
        expect(bestTouristAttractions[0].length).toEqual(2);
        expect(bestTouristAttractions[1].length).toEqual(2);
        expect(bestTouristAttractions.flat()).toEqual(bestTouristAttractionInfos);
    });
});
