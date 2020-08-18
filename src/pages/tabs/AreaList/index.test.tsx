import 'core-js';

import { includesRegionName } from './index';

describe('AreaListTest', () => {
    test('문자열을 자르고 중복없는 배열로 변환', () => {
        const queryString = "충주시,청주시,영동군,청주시";
        const regions = Array.from(new Set(queryString.split(","))).filter(region => region.trim() !== '');

        expect(regions.length).toEqual(3);
        expect(regions).toEqual(["충주시", "청주시", "영동군"]);
    });

    test('빈 문자열 배열로 변환 처리', () => {
        const queryString = null;
        const queryRegion = queryString !== null? queryString: "";
        const regions = Array.from(new Set(queryRegion.split(","))).filter(region => region.trim() !== '');

        expect(regions.length).toEqual(0);
    });

    test('특정 지역이 선택되었는지 확인', () => {
        const regions = ["충주시", "청주시", "영동군"];
        const region = "청주시";

        expect(includesRegionName(regions, region)).toBeTruthy();
    });
});