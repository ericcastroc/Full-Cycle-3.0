# 🏗️ SOLID no Express.js 

Este repositório contém um guia detalhado sobre os princípios **SOLID** aplicados ao desenvolvimento de APIs utilizando **Node.js** com **Express.js**. 

---

## 📌 O que é SOLID?

**SOLID** é um conjunto de cinco princípios de design para a programação orientada a objetos, criado por **Robert C. Martin (Uncle Bob)**. Esses princípios ajudam a tornar o código mais **manutenível, flexível e escalável**.

### 🔥 Os 5 princípios SOLID:
1. **S**ingle Responsibility Principle (Princípio da Responsabilidade Única)
2. **O**pen/Closed Principle (Princípio do Aberto/Fechado)
3. **L**iskov Substitution Principle (Princípio da Substituição de Liskov)
4. **I**nterface Segregation Principle (Princípio da Segregação de Interface)
5. **D**ependency Inversion Principle (Princípio da Inversão de Dependência)

Esses princípios melhoram a **arquitetura** e **qualidade do código**, tornando-o mais **modular** e **testável**.

---

## 🚀 Aplicando SOLID no Express.js

Abaixo, vamos explorar como cada princípio pode ser implementado em uma API REST usando **Express.js** e boas práticas de programação.

### 1️⃣ **Single Responsibility Principle (SRP)**
📌 **Cada classe deve ter apenas uma única responsabilidade.**

**💡 Exemplo no Express:**
- Separação de camadas **Controller**, **Service** e **Repository**

```javascript
// controllers/UserController.js
class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  async create(req, res) {
    const user = await this.userService.createUser(req.body);
    return res.status(201).json(user);
  }
}
```

```javascript
// services/UserService.js
class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async createUser(data) {
    return this.userRepository.save(data);
  }
}
```

```javascript
// repositories/UserRepository.js
class UserRepository {
  async save(userData) {
    // Código para salvar usuário no banco
  }
}
```

### 2️⃣ **Open/Closed Principle (OCP)**
📌 **As classes devem estar abertas para extensão, mas fechadas para modificação.**

**💡 Exemplo no Express:**
- Uso de **middleware** para adicionar funcionalidades sem modificar código existente.

```javascript
// middlewares/logRequest.js
function logRequest(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
}

module.exports = logRequest;
```

```javascript
// server.js
const express = require('express');
const logRequest = require('./middlewares/logRequest');

const app = express();
app.use(logRequest); // Middleware aplicado sem modificar a lógica da API
```

### 3️⃣ **Liskov Substitution Principle (LSP)**
📌 **As subclasses devem poder substituir suas classes base sem alterar o comportamento do sistema.**

**💡 Exemplo no Express:**
- Uso de **herança** corretamente entre classes

```javascript
class DatabaseConnection {
  connect() {
    throw new Error("Método 'connect' deve ser implementado");
  }
}

class MySQLConnection extends DatabaseConnection {
  connect() {
    console.log("Conectado ao MySQL");
  }
}

class MongoDBConnection extends DatabaseConnection {
  connect() {
    console.log("Conectado ao MongoDB");
  }
}
```

Ambas as classes **MySQLConnection** e **MongoDBConnection** podem substituir **DatabaseConnection** sem afetar o comportamento do sistema.

### 4️⃣ **Interface Segregation Principle (ISP)**
📌 **Uma classe não deve ser forçada a implementar métodos que não utiliza.**

**💡 Exemplo no Express:**
- Interfaces específicas para diferentes tipos de repositórios

```javascript
class IUserRepository {
  save(user) {}
  findById(id) {}
}
```

```javascript
class UserRepository extends IUserRepository {
  save(user) {
    console.log("Usuário salvo!");
  }

  findById(id) {
    console.log("Usuário encontrado!");
  }
}
```

Isso garante que qualquer **repositório de usuário** implemente apenas os métodos necessários.

### 5️⃣ **Dependency Inversion Principle (DIP)**
📌 **Módulos de alto nível não devem depender de módulos de baixo nível, mas de abstrações.**

**💡 Exemplo no Express:**
- Injeção de dependências via construtores

```javascript
// app.js
const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);
```

Isso evita dependências diretas entre módulos, facilitando **testes e manutenção**.

---

## 🎯 Conclusão

Os princípios **SOLID** ajudam a tornar aplicações Express.js mais **organizadas, escaláveis e fáceis de manter**. Ao aplicar essas práticas, o código se torna **mais modular, reutilizável e testável**.

🔹 **Benefícios do SOLID no Express.js:**

✅ Código mais legível e organizado

✅ Melhor separação de responsabilidades

✅ Facilidade para adicionar novas funcionalidades

✅ Maior reutilização de código

✅ Facilidade para realizar testes unitários

Ao seguir esses princípios, sua API se torna mais **sustentável a longo prazo** e preparada para **crescimento e mudanças**! 🚀

