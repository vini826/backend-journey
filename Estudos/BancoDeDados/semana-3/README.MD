# Sistema de Cadastro de Usuários com MySQL

Este repositório contém um script SQL para criar um banco de dados simples no MySQL, incluindo tabelas para usuários e endereços.

## 📌 Tecnologias Utilizadas
- MySQL
- SQL

## 📂 Estrutura do Banco de Dados
O banco de dados `user_system` contém as seguintes tabelas:

### 🧑‍💻 users (Usuários)
| Coluna      | Tipo            | Descrição                        |
|------------|----------------|--------------------------------|
| id         | INT (PK)        | Identificador único           |
| name       | VARCHAR(100)    | Nome do usuário               |
| email      | VARCHAR(100)    | Email único do usuário        |
| created_at | TIMESTAMP       | Data de criação do registro   |

### 📍 addresses (Endereços)
| Coluna  | Tipo         | Descrição                     |
|--------|-------------|-----------------------------|
| id     | INT (PK)    | Identificador único         |
| user_id | INT (FK)    | Referência ao usuário       |
| street | VARCHAR(255) | Nome da rua                |
| city   | VARCHAR(100) | Cidade                     |
| state  | VARCHAR(50)  | Estado                     |



## 🔗 Conectando ao Banco com Aplicações
Se for utilizar em uma aplicação, configure a conexão MySQL com os dados adequados (host, usuário e senha).

---
Feito para aprendizado e prática! 🚀