def busca_linear(arr, valor):
    for i in range(len(arr)):
        if arr[i] == valor:
            return i  # Retorna o índice do item encontrado
    return -1  # Retorna -1 se não encontrar

# Teste
arr = [3, 5, 7, 9, 12]
print(busca_linear(arr, 7))  # Saída: 2 (índice do número 7)
print(busca_linear(arr, 10))  # Saída: -1 (não encontrado)
