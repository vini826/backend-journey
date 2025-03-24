class Stack {
    constructor() {
        this.items = [];
    }

    // Adiciona um elemento ao topo da pilha
    push(element) {
        this.items.push(element);
    }

    // Remove o elemento do topo da pilha
    pop() {
        if (this.items.length === 0) return "Pilha vazia";
        return this.items.pop();
    }

    // Retorna o elemento do topo da pilha
    peek() {
        return this.items[this.items.length - 1];
    }

    // Verifica se a pilha está vazia
    isEmpty() {
        return this.items.length === 0;
    }

    // Retorna o tamanho da pilha
    size() {
        return this.items.length;
    }
}

// Exemplo de uso
const pilha = new Stack();
pilha.push(10);
pilha.push(20);
console.log(pilha.pop()); // 20
console.log(pilha.peek()); // 10