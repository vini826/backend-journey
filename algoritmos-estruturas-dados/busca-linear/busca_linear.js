function buscaLinear(arr, valor) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === valor) {
            return i; // Retorna o índice do item encontrado
        }
    }
    return -1; // Retorna -1 se não encontrar
}

const arr = [3, 5, 7, 9, 12];
console.log(buscaLinear(arr, 7)); // Saída: 2 (índice do número 7)
console.log(buscaLinear(arr, 10)); // Saída: -1 (não encontrado)
