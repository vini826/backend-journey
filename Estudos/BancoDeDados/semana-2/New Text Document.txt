# Praticando JOINS e Subqueries em SQL

## 📚 Introdução
Este projeto tem como objetivo revisar e praticar consultas SQL utilizando diferentes tipos de JOINS (INNER JOIN, LEFT JOIN, RIGHT JOIN) e subqueries. Através de exemplos práticos, é possível entender como combinar informações de múltiplas tabelas e realizar consultas mais avançadas.

## 🗂️ Estrutura do Banco de Dados
O projeto usa três tabelas para exemplificar os conceitos:
- **clientes**: Contém informações básicas dos clientes.
- **pedidos**: Registra os pedidos realizados pelos clientes.
- **produtos**: Lista de produtos disponíveis para venda.

O script completo de criação e população das tabelas pode ser encontrado no arquivo `Script_SQL_JOINS_Subqueries.sql`.

## 🔎 Exemplos de Consultas

### INNER JOIN: Clientes com pedidos registrados
```sql
SELECT c.nome, p.data_pedido
FROM clientes c
INNER JOIN pedidos p ON c.id = p.cliente_id;
