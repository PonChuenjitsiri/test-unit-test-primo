export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    console.log("collections",collection_1, collection_2, collection_3);
    let firstMerge: number[] = [];
    let i = 0, j = 0, k = collection_3.length - 1;
    let reverseCollection3 = [...collection_3].reverse();
    let mergedResult: number[] = [];
    let x = 0, y = 0;

    // Merge 1 and 2
    while (i < collection_1.length && j < collection_2.length) {
        if (collection_1[i] < collection_2[j]) {
            firstMerge.push(collection_1[i++]);
        } else {
            firstMerge.push(collection_2[j++]);
        }
    }
    // Remain value in Coll1 & 2
    while (i < collection_1.length) firstMerge.push(collection_1[i++]);
    while (j < collection_2.length) firstMerge.push(collection_2[j++]);
    console.log("firstMerge",firstMerge);
    // Merge Coll3 to FirsetMerge
    console.log("reverseCollection3",reverseCollection3);
    while (x < firstMerge.length && y < reverseCollection3.length) {
        if (firstMerge[x] < reverseCollection3[y]) {
            mergedResult.push(firstMerge[x++]);
        } else {
            mergedResult.push(reverseCollection3[y++]);
        }
    }
    // Remain from Merge Coll3 to FirsetMerge
    while (x < firstMerge.length) mergedResult.push(firstMerge[x++]);
    while (y < reverseCollection3.length) mergedResult.push(reverseCollection3[y++]);
    console.log(mergedResult);
    return mergedResult;
}
