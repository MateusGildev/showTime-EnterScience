# ShowTime - README

---

## Requisitos:
- **Java 17**
- **Spring Boot**
- **PostgreSQL**

---

## Descrição:
Este repositório contém uma aplicação simples em Java para a submissão de contratos em um banco de dados. A aplicação utiliza o Spring para lidar com requisições HTTP, PostgreSQL e H2 para operações de banco de dados e bootstrap para o layout responsivo.

---

## Banco de Dados:
A aplicação utiliza dois bancos de dados: **H2** (em memória) e **PostgreSQL**. A escolha do banco de dados pode ser configurada através do arquivo `application.properties`, permitindo alternar entre os bancos de dados conforme necessário.

Para configurar o banco de dados a ser utilizado, altere a propriedade `spring.profiles.active` no arquivo `application.properties` para `test` ou `dev`, conforme sua preferência.

Exemplo:
```properties
spring.profiles.active=h2

spring.profiles.active=dev 

