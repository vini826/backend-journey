function buscaBinaria(arr, valor) {
    let inicio = 0;
    let fim = arr.length - 1;

    while (inicio <= fim) {
        const meio = Math.floor((inicio + fim) / 2);

        if (arr[meio] === valor) {
            return meio; // Item encontrado
        } else if (arr[meio] < valor) {
            inicio = meio + 1; // Busca na metade direita
        } else {
            fim = meio - 1; // Busca na metade esquerda
        }
    }

    return -1; // Não encontrado
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(buscaBinaria(arr, 4)); // Saída: 3 (índice do número 4)
console.log(buscaBinaria(arr, 10)); // Saída: -1 (não encontrado)
