def busca_binaria(arr, valor):
    inicio = 0
    fim = len(arr) - 1

    while inicio <= fim:
        meio = (inicio + fim) // 2

        if arr[meio] == valor:
            return meio  # Item encontrado
        elif arr[meio] < valor:
            inicio = meio + 1  # Busca na metade direita
        else:
            fim = meio - 1  # Busca na metade esquerda

    return -1  # Não encontrado


# Teste
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
print(busca_binaria(arr, 4))  # Saída: 3 (índice do número 4)
print(busca_binaria(arr, 10))  # Saída: -1 (não encontrado)
