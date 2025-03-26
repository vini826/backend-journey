// Comparação de Desempenho em JavaScript

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);
    return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Função para medir o tempo de execução
function measureTime(sortFunction, arr) {
    const start = performance.now();
    sortFunction([...arr]);
    return performance.now() - start;
}

// Gerar uma lista aleatória
const randomList = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));

// Comparar desempenho
const mergeTime = measureTime(mergeSort, randomList);
const bubbleTime = measureTime(bubbleSort, randomList);
const quickTime = measureTime(quickSort, randomList);

console.log(`Merge Sort: ${mergeTime.toFixed(6)} ms`);
console.log(`Bubble Sort: ${bubbleTime.toFixed(6)} ms`);
console.log(`Quick Sort: ${quickTime.toFixed(6)} ms`);