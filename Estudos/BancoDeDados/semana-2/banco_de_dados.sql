-- Script de Criação e População do Banco de Dados

-- Criação das tabelas
CREATE TABLE clientes (
    id INT PRIMARY KEY,
    nome VARCHAR(50)
);

CREATE TABLE produtos (
    id INT PRIMARY KEY,
    descricao VARCHAR(100),
    preco DECIMAL(10, 2)
);

CREATE TABLE pedidos (
    id INT PRIMARY KEY,
    cliente_id INT,
    produto_id INT,
    data_pedido DATE,
    quantidade INT,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id),
    FOREIGN KEY (produto_id) REFERENCES produtos(id)
);

-- Inserção de dados
INSERT INTO clientes VALUES (1, 'Maria'), (2, 'José'), (3, 'Ana');
INSERT INTO produtos VALUES (1, 'Teclado', 150.00), (2, 'Mouse', 75.00);
INSERT INTO pedidos VALUES (1, 1, 1, '2025-03-20', 2), (2, 2, 2, '2025-03-21', 1);

-- INNER JOIN: Clientes com pedidos registrados
SELECT c.nome, p.data_pedido
FROM clientes c
INNER JOIN pedidos p ON c.id = p.cliente_id;

-- LEFT JOIN: Clientes com ou sem pedidos registrados
SELECT c.nome, p.data_pedido
FROM clientes c
LEFT JOIN pedidos p ON c.id = p.cliente_id;

-- RIGHT JOIN: Pedidos feitos, mesmo sem cliente cadastrado
SELECT c.nome, p.data_pedido
FROM pedidos p
RIGHT JOIN clientes c ON c.id = p.cliente_id;

-- Subquery: Clientes com mais de um pedido
SELECT nome
FROM clientes
WHERE id IN (
    SELECT cliente_id
    FROM pedidos
    GROUP BY cliente_id
    HAVING COUNT(*) > 1
);
