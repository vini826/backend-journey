function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Troca os elementos
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        n--; // Reduz o tamanho da comparação, pois o maior elemento já está ordenado
    } while (swapped);
    return arr;
}

// Teste
console.log(bubbleSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
