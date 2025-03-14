class Stack:
    def __init__(self):
        self.items = []

    # Adiciona um elemento ao topo da pilha
    def push(self, item):
        self.items.append(item)

    # Remove o elemento do topo da pilha
    def pop(self):
        if self.is_empty():
            return "Pilha vazia"
        return self.items.pop()

    # Retorna o elemento do topo da pilha
    def peek(self):
        return self.items[-1]

    # Verifica se a pilha está vazia
    def is_empty(self):
        return len(self.items) == 0

    # Retorna o tamanho da pilha
    def size(self):
        return len(self.items)

# Exemplo de uso
pilha = Stack()
pilha.push(10)
pilha.push(20)
print(pilha.pop())  # 20
print(pilha.peek())  # 10