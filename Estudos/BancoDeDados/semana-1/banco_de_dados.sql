-- 1. Criação do Banco de Dados
CREATE DATABASE revisao_sql;
USE revisao_sql;

-- 2. Criação da Tabela "alunos"
CREATE TABLE alunos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    idade INT NOT NULL,
    curso VARCHAR(50) NOT NULL
);

-- 3. Inserção de Registros (INSERT)
INSERT INTO alunos (nome, idade, curso)
VALUES 
    ('Maria Silva', 21, 'Engenharia da Computação'),
    ('Pedro Santos', 23, 'Análise de Sistemas'),
    ('João Oliveira', 22, 'Ciência da Computação');

-- 4. Leitura de Dados (SELECT)
SELECT * FROM alunos;  -- Seleciona todos os registros
SELECT nome, curso FROM alunos;  -- Seleciona campos específicos
SELECT * FROM alunos WHERE idade > 21;  -- Filtra registros por condição

-- 5. Atualização de Dados (UPDATE)
UPDATE alunos
SET curso = 'Engenharia de Software'
WHERE nome = 'Maria Silva';

-- 6. Exclusão de Dados (DELETE)
DELETE FROM alunos WHERE nome = 'João Oliveira';

-- 7. Exibindo todos os registros finais
SELECT * FROM alunos;