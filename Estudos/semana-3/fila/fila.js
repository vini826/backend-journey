class Queue {
    constructor() {
        this.items = [];
    }

    // Adiciona um elemento ao final da fila
    enqueue(element) {
        this.items.push(element);
    }

    // Remove o elemento do início da fila
    dequeue() {
        if (this.items.length === 0) return "Fila vazia";
        return this.items.shift();
    }

    // Retorna o elemento do início da fila
    front() {
        return this.items[0];
    }

    // Verifica se a fila está vazia
    isEmpty() {
        return this.items.length === 0;
    }

    // Retorna o tamanho da fila
    size() {
        return this.items.length;
    }
}

// Exemplo de uso
const fila = new Queue();
fila.enqueue(10);
fila.enqueue(20);
console.log(fila.dequeue()); // 10
console.log(fila.front()); // 20