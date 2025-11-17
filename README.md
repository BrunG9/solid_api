# 🚀 solid_api

Uma **API REST** robusta e escalável, desenvolvida seguindo rigorosamente os **Princípios SOLID**. Este projeto serve como uma demonstração prática de como aplicar o **Design Orientado a Domínio (DDD)** e arquiteturas limpas para criar um código desacoplado, manutenível e testável.

## ✨ Tecnologias

Este projeto utiliza um conjunto moderno de tecnologias para garantir performance e qualidade de código:

* **Linguagem:** TypeScript
* **Backend:** Node.js
* **Framework/Runtime:** [Express.js] (Ex: `Express.js`)
* **ORM/Query Builder:** [Prisma] (Ex: `Prisma`)

## 🏗️ Arquitetura

A arquitetura do projeto é baseada em camadas para garantir o baixo acoplamento e a alta coesão, com ênfase nos Princípios SOLID:

* **Single Responsibility Principle (SRP):** Cada classe/módulo tem uma única responsabilidade.
* **Open/Closed Principle (OCP):** Entidades de software estão abertas para extensão, mas fechadas para modificação.
* **Liskov Substitution Principle (LSP):** Objetos em um programa devem ser substituíveis por instâncias de seus subtipos sem alterar a correção desse programa.
* **Interface Segregation Principle (ISP):** Clientes não devem ser forçados a depender de interfaces que não usam.
* **Dependency Inversion Principle (DIP):** Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.

A estrutura de diretórios geralmente segue uma abordagem de **Clean Architecture** ou **DDD**, dividida em:

* `src/modules`: Contém os contextos de domínio/funcionalidades.
* `src/shared`: Contém recursos compartilhados como middlewares, configurações globais e injeção de dependência.
* `src/core`: Pode conter tipos e interfaces de domínio mais abstratos.

## ⚙️ Instalação e Execução

Siga os passos abaixo para configurar e rodar o projeto em sua máquina local.

### Pré-requisitos

* Node.js (versão [Recomendada, ex: `v18+`])
* NPM ou Yarn
* [Se usar Docker, inclua: Docker e Docker Compose]
* [Se for configurar o DB manualmente, inclua: Acesso ao DB, ex: `PostgreSQL`]

### Configuração do Ambiente

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/BrunG9/solid_api.git](https://github.com/BrunG9/solid_api.git)
    cd solid_api
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Variáveis de Ambiente:**
    Crie um arquivo `.env` na raiz do projeto baseado no `.env.example` e preencha com suas configurações (portas, credenciais do banco de dados, etc.).

    ```
    # Exemplo:
    PORT=3000
    DATABASE_URL="[Sua string de conexão com o DB]"
    [Outras variáveis, ex: JWT_SECRET]
    ```

4.  **Configuração do Banco de Dados:**

    ```bash
    # Rode as migrations (se estiver usando TypeORM/Prisma/etc.)
    npm run migration:run
    # ou
    yarn migration:run
    ```

### Executando a Aplicação

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor em modo de desenvolvimento (com *hot-reload*). |
| `npm start` | Compila e inicia o servidor em modo de produção. |
| `npm test` | Executa todos os testes unitários e de integração. |

## 💡 Rotas da API

| Método | Rota | Descrição | Status de Implementação |
| :--- | :--- | :--- | :--- |
| `POST` | `/users` | Cria um novo usuário. | [Sim] |
| `GET` | `/users/:id` | Retorna os dados de um usuário específico. | [Sim] |
| `POST` | `/sessions` | Autentica um usuário e retorna um token JWT. | [Sim] |
| `PUT` | `[Outra Rota]` | [Outra Descrição] | [Em Andamento] |

> **Nota:** A documentação completa das rotas (via **Swagger/OpenAPI**) está disponível em `[Seu Endpoint de Documentação, ex: /api-docs]` após o servidor ser iniciado.

## 🤝 Contribuição

Contribuições são bem-vindas! Se você tiver sugestões, *bug reports* ou queira implementar uma nova funcionalidade, por favor:

1.  Faça um *fork* do projeto.
2.  Crie uma nova *branch* (`git checkout -b feature/sua-feature`).
3.  Faça o *commit* de suas mudanças (`git commit -m 'feat: Adiciona [Nova Funcionalidade]'`).
4.  Faça o *push* para a *branch* (`git push origin feature/sua-feature`).
5.  Abra um **Pull Request**.

## 📄 Licença

Este projeto está licenciado sob a Licença **[MIT]** - veja o arquivo `LICENSE` para mais detalhes.

## 🧑‍💻 Autor

* **[BrunoG9]** - [Link para o meu GitHub](https://github.com/BrunG9)
