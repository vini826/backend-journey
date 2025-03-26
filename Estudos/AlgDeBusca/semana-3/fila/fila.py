class Queue:
    def __init__(self):
        self.items = []

    # Adiciona um elemento ao final da fila
    def enqueue(self, item):
        self.items.append(item)

    # Remove o elemento do início da fila
    def dequeue(self):
        if self.is_empty():
            return "Fila vazia"
        return self.items.pop(0)

    # Retorna o elemento do início da fila
    def front(self):
        return self.items[0]

    # Verifica se a fila está vazia
    def is_empty(self):
        return len(self.items) == 0

    # Retorna o tamanho da fila
    def size(self):
        return len(self.items)

# Exemplo de uso
fila = Queue()
fila.enqueue(10)
fila.enqueue(20)
print(fila.dequeue())  # 10
print(fila.front())  # 20