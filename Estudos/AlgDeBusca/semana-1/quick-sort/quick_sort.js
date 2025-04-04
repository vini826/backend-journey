function quickSort(arr) {
    if (arr.length <= 1) {
        return arr; // Caso base: lista já ordenada ou vazia
    }
    
    const pivot = arr[arr.length - 1]; // Escolhe o pivô (último elemento)
    let left = [];
    let right = [];
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [3, 6, 8, 10, 1, 2, 1];
console.log(quickSort(arr)); // Saída: [1, 1, 2, 3, 6, 8, 10]

