# Algoritmos de Ordenação e Busca

Este repositório contém implementações de algoritmos de ordenação e busca, com foco no **Merge Sort**, além de comparações de desempenho com outros métodos como **Bubble Sort** e **Quick Sort**.

## Merge Sort

O Merge Sort é um algoritmo de ordenação eficiente que utiliza a técnica **"dividir para conquistar"**. Ele divide a lista em sublistas menores, ordena cada sublista e depois as mescla para obter a lista final ordenada.

### Complexidade
- **Tempo:** O(n log n) no pior caso.
- **Espaço:** O(n) devido ao uso de memória auxiliar para as sublistas.

### Como Funciona?
1. Divide a lista em duas metades.
2. Ordena cada metade recursivamente.
3. Mescla as duas metades ordenadas.

### Vantagens
- Eficiente para grandes conjuntos de dados.
- Estável (não altera a ordem de elementos iguais).

## Comparação de Desempenho

Foram comparados os seguintes algoritmos:
1. **Merge Sort**
2. **Bubble Sort**
3. **Quick Sort**

Resultados:
- Merge Sort e Quick Sort são muito mais rápidos que Bubble Sort para grandes conjuntos de dados.
- Quick Sort geralmente tem melhor desempenho que Merge Sort, mas Merge Sort é mais consistente.

## Como Executar

1. Clone o repositório.
2. Execute os scripts em Python ou JavaScript.
3. Veja os resultados no terminal.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.