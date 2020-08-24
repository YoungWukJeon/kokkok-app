import 'core-js';

import { includesRegionName, pullRegionName } from './index';

describe('AreaListTest', () => {
    test('문자열을 자르고 중복없는 배열로 변환', () => {
        const queryString = "충주시,청주시,영동군,청주시";
        const regions = Array.from(new Set(queryString.split(","))).filter(region => region.trim() !== '');

        expect(regions.length).toEqual(3);
        expect(regions).toEqual(["충주시", "청주시", "영동군"]);
    });

    test('빈 문자열 배열로 변환 처리', () => {
        const queryString = null;
        const queryRegion = queryString !== null ? queryString : "";
        const regions = Array.from(new Set(queryRegion.split(","))).filter(region => region.trim() !== '');

        expect(regions.length).toEqual(0);
    });

    test('특정 지역이 선택되었는지 확인', () => {
        const regions = ["충주시", "청주시", "영동군"];
        const region = "청주시";

        expect(includesRegionName(regions, region)).toBeTruthy();
    });

    test('배열에 새로운 요소를 추가 후 ,로 구분된 문자열로 변환(중복이면 제거)', () => {
        const regions = ["충주시", "청주시"];
        const regionName = "영동군";
        const arr: string[] = Array.from(new Set([...regions, regionName]));

        expect(arr.join(",")).toEqual("충주시,청주시,영동군");
    });

    test('배열에 존재하는 특정 요소 삭제', () => {
        const regions = ["충주시", "청주시", "영동군"];
        const regionName = "청주시";
        const index = regions.findIndex((region) => region === regionName);

        if (index > -1) {
            regions.splice(index, 1);
        }

        expect(regions).toEqual(["충주시", "영동군"]);
    });

    test('배열 요소를 제거한 후 ,로 연결', () => {
        const regions = ["충주시", "청주시", "영동군"];
        const regionName = "청주시";
        const result = pullRegionName(regions, regionName);

        expect(result).toEqual("충주시,영동군");
    });
});