# Pilhas e Filas

## Conceitos

### Pilha (Stack)
A estrutura de dados do tipo Pilha segue o princípio **LIFO** (Last In, First Out), ou seja, o último elemento inserido é o primeiro a ser removido. Podemos imaginar uma pilha de pratos: colocamos um prato por cima e retiramos o prato do topo primeiro.

#### Principais operações:
- **push(elemento):** Adiciona um elemento ao topo da pilha.
- **pop():** Remove e retorna o elemento do topo.
- **peek():** Retorna o elemento do topo sem removê-lo.
- **isEmpty():** Verifica se a pilha está vazia.
- **size():** Retorna o número de elementos na pilha.

**Aplicações:**
- Controle de chamadas de funções (stack de recursão);
- Desfazer/refazer ações em editores de texto;
- Algoritmos de backtracking (ex: resolver labirintos).

---

### Fila (Queue)
A estrutura de dados do tipo Fila segue o princípio **FIFO** (First In, First Out), ou seja, o primeiro elemento inserido é o primeiro a ser removido. Podemos imaginar uma fila de atendimento em um banco: quem chega primeiro é atendido primeiro.

#### Principais operações:
- **enqueue(elemento):** Adiciona um elemento ao final da fila.
- **dequeue():** Remove e retorna o elemento do início da fila.
- **front():** Retorna o primeiro elemento sem removê-lo.
- **isEmpty():** Verifica se a fila está vazia.
- **size():** Retorna o número de elementos na fila.

**Aplicações:**
- Sistemas de atendimento (ex: filas de impressão, suporte técnico);
- Controle de processos em sistemas operacionais;
- Algoritmos de busca em grafos (BFS - Breadth-First Search).

---

## Implementação

As Pilhas e Filas podem ser implementadas de diversas formas, como:
- **Usando listas nativas** (ex: listas em Python);
- **Compondo classes específicas** (ex: utilizando classes em Java, C++, etc.);
- **Usando estruturas otimizadas** (ex: deque em Python).

No aprendizado desta semana, implementei ambas as estruturas em diferentes linguagens para reforçar o entendimento e testar suas aplicações em problemas reais.

---

## Conclusão

Ao final dos estudos desta semana, compreendi a importância e a aplicabilidade das Pilhas e Filas. Agora consigo implementar essas estruturas para resolver problemas práticos de forma eficiente, escolhendo a melhor abordagem para cada cenário.