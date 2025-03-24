
# Comparação de Desempenho (Merge Sort vs Bubble Sort vs Quick Sort) em Python

import time
import random
import Msort

def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)

# Função para medir o tempo de execução
def measure_time(sort_function, arr):
    start_time = time.time()
    sort_function(arr.copy())
    return time.time() - start_time

# Gerar uma lista aleatória
random_list = [random.randint(1, 1000) for _ in range(1000)]

# Comparar desempenho
merge_time = measure_time(Msort.merge_sort, random_list)
bubble_time = measure_time(bubble_sort, random_list)
quick_time = measure_time(quick_sort, random_list)

print(f"Merge Sort: {merge_time:.6f} segundos")
print(f"Bubble Sort: {bubble_time:.6f} segundos")
print(f"Quick Sort: {quick_time:.6f} segundos")