## 📂 Estrutura

O projeto contém um banco de dados chamado **escola** com uma tabela **alunos**. A tabela **alunos** foi criada para armazenar informações sobre estudantes, como ID, nome, idade e curso.

### Comandos Utilizados

1. **Criando o Banco de Dados:**

    Antes de criar a tabela, é necessário criar o banco de dados e selecioná-lo para trabalhar. O comando para criar o banco de dados foi:

    ```sql
    CREATE DATABASE escola;
    ```

    Após criar o banco de dados, foi necessário selecionar o banco de dados **escola** para as operações subsequentes:

    ```sql
    USE escola;
    ```

2. **Criando a Tabela:**

    A tabela **alunos** foi criada com os seguintes campos:
    - `id`: Identificador único (inteiro, chave primária)
    - `nome`: Nome do aluno (texto)
    - `idade`: Idade do aluno (inteiro)
    - `curso`: Curso do aluno (texto)

    Comando utilizado para criar a tabela:

    ```sql
    CREATE TABLE alunos (
        id INT PRIMARY KEY,
        nome VARCHAR(50),
        idade INT,
        curso VARCHAR(50)
    );
    ```

3. **Inserindo Dados:**

    Após a criação da tabela, foram inseridos alguns dados de exemplo:

    ```sql
    INSERT INTO alunos (id, nome, idade, curso)
    VALUES (1, 'Maria', 21, 'Engenharia da Computação'),
           (2, 'Pedro', 23, 'Análise de Sistemas');
    ```

4. **Consultando Dados (SELECT):**

    Para consultar todos os registros da tabela **alunos**, utilizamos o seguinte comando:

    ```sql
    SELECT * FROM alunos;
    ```

    Também é possível consultar dados específicos, como o nome e curso de todos os alunos:

    ```sql
    SELECT nome, curso FROM alunos;
    ```

    E filtrar resultados, como por exemplo, alunos com idade maior que 21:

    ```sql
    SELECT * FROM alunos WHERE idade > 21;
    ```

5. **Atualizando Dados (UPDATE):**

    Para atualizar dados, por exemplo, alterar o curso de um aluno:

    ```sql
    UPDATE alunos
    SET curso = 'Ciência da Computação'
    WHERE id = 1;
    ```

6. **Excluindo Dados (DELETE):**

    Para excluir um registro específico de um aluno:

    ```sql
    DELETE FROM alunos WHERE id = 2;
    ```

## 🚀 Como Executar

1. Abra o MySQL ou qualquer outro ambiente SQL de sua preferência.
2. Execute os comandos SQL conforme listado acima.
3. Verifique os resultados das consultas e operações CRUD.

---


