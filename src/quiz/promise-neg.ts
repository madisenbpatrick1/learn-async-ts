const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

function findNegative(arr: number[][], rowIdx: number): Promise<number[]> {
    return new Promise<number[]>((resolve, reject) => {
        const row = arr[rowIdx];
        const negatives = row.some(num => num < 0);

        if (!negatives) {
            resolve([]);
        } else {
            resolve(row);
        }
    })
}

async function findNegativesInRows(numArr: number[][]): Promise<void> {
    const rowCheck: Promise<number[]> []=[];

    for (let x = 0; x < numArr.length; x++) {
        rowCheck.push(findNegative(numArr, x));
    }
    try {
        const result = await Promise.all(rowCheck);
        result.forEach((row, index) => {
            if (row.length > 0) {
                console.log(`Row ${index} has the following negative numbers: ${row}`);
            }
        });
    } catch (error){
        console.error(`Error: ${error}`);
    }
}

findNegativesInRows(array2D_3)