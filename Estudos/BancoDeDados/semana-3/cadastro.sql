-- Criar o banco de dados
CREATE DATABASE user_system;
USE user_system;

-- Criar a tabela de usuários
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Criar a tabela de endereços
CREATE TABLE addresses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    street VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(50) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Inserir alguns usuários
INSERT INTO users (name, email) VALUES 
('João Silva', 'joao@email.com'),
('Maria Souza', 'maria@email.com');

-- Inserir alguns endereços
INSERT INTO addresses (user_id, street, city, state) VALUES 
(1, 'Rua das Flores, 123', 'São Paulo', 'SP'),
(2, 'Avenida Brasil, 456', 'Rio de Janeiro', 'RJ');

-- Consultar usuários e seus endereços
SELECT u.id, u.name, u.email, a.street, a.city, a.state 
FROM users u
LEFT JOIN addresses a ON u.id = a.user_id;
