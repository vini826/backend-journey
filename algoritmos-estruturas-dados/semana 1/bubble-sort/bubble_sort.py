def bubble_sort(arr):
    n = len(arr)
    swapped = True
    while swapped:
        swapped = False
        for i in range(n - 1):
            if arr[i] > arr[i + 1]:
                arr[i], arr[i + 1] = arr[i + 1], arr[i]  # Troca os elementos
                swapped = True
        n -= 1  # Reduz a área de varredura
    return arr

# Teste
print(bubble_sort([5, 3, 8, 4, 2]))  # [2, 3, 4, 5, 8]

