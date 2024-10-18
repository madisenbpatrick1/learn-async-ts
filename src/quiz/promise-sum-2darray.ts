const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


function sumOfRow(arr: number[][], rowIdx: number): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        if (arr.length > rowIdx) {
            let sum = 0;
            for (let i = 0; i < arr[rowIdx].length; i++) {
                sum += arr[rowIdx][i];
            }
            resolve(sum);
        }
        else {
            reject(`Row index ${rowIdx} must be within 0 ${arr.length}`);
        }
    })
}


async function calculateSum(numArr: number[][]) : Promise<number> {
    if (numArr.length === 0) {
        throw 'cannot calculate sum';
    }
    const rowSumPromises: Promise<number>[] =[];

    for (let x = 0; x < numArr.length; x++) {
        rowSumPromises.push(sumOfRow(numArr, x));
    }
    try {
        const rowSums = await Promise.all(rowSumPromises);
        let totalSum = 0;
        rowSums.forEach((sum) => { totalSum += sum });
        return totalSum;

    } catch (error) {
        console.error(`Error: ${error}`);
        throw error;
    }
}


calculateSum(array2D_1)
.then((totalSum) => {
    console.log(`Total Sum = ${totalSum}`);
})
.catch((error) => {
    console.error(`Error: ${error}`);
});

const empty: number[][] = [];
calculateSum(empty)
.then((totalSum) => {
    console.log(`Total Sum = ${totalSum}`);
})
.catch((error) => {
    console.error(`Error: ${error}`);
});



