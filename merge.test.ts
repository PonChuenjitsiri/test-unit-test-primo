import { merge } from "./mergFunction";

describe("mergeFunction", () => {
    test("merge three sort array are correct", () => {
        const collection_1 = [1, 3, 5];
        const collection_2 = [2, 4, 6];
        const collection_3 = [9, 7, 5];
        expect(merge(collection_1, collection_2, collection_3)).toEqual([1, 2, 3, 4, 5, 5, 6, 7, 9]);
    });
    
    test("handle empty array", () => {
        expect(merge([], [], [3, 2, 1])).toEqual([1, 2, 3]);
        expect(merge([1, 2, 3], [], [])).toEqual([1, 2, 3]);
    });
    
    test("merge array with different length", () => {
        expect(merge([1, 5], [2, 6, 8], [7, 3])).toEqual([1, 2, 3, 5, 6, 7, 8]);
    });
    
    test("merge array duplicate numbers", () => {
        expect(merge([1, 2, 2, 3], [2, 4, 4], [5, 3, 3])).toEqual([1, 2, 2, 2, 3, 3, 3, 4, 4, 5]);
    });
    
    test("merge array only one element each", () => {
        expect(merge([5], [3], [4])).toEqual([3, 4, 5]);
    });
    
    test("merge one array is larger", () => {
        expect(merge([1, 2, 3, 4, 5, 6, 7, 8, 9], [2], [3])).toEqual([1, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9]);
    });
    
    test("merge array with one array is empty", () => {
        expect(merge([], [1, 2, 3], [6, 5, 4])).toEqual([1, 2, 3, 4, 5, 6]);
    });
    
    test("merge array with all array are empty", () => {
        expect(merge([], [], [])).toEqual([]);
    });
    
    test("merge array only zeros", () => {
        expect(merge([0, 0, 0], [0, 0], [0])).toEqual([0, 0, 0, 0, 0, 0]);
    });
    
});