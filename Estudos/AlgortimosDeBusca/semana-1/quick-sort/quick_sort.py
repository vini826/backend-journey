def quick_sort(arr):
    if len(arr) <= 1:
        return arr  # Caso base: lista já ordenada ou vazia
    
    pivot = arr[-1]  # Escolhe o pivô (último elemento)
    left = []
    right = []

    for i in range(len(arr) - 1):
        if arr[i] < pivot:
            left.append(arr[i])
        else:
            right.append(arr[i])

    return quick_sort(left) + [pivot] + quick_sort(right)


# Teste
arr = [3, 6, 8, 10, 1, 2, 1]
print(quick_sort(arr))  # Saída: [1, 1, 2, 3, 6, 8, 10]
