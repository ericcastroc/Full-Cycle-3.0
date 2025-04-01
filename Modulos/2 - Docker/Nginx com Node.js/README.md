# 🚀 Full Cycle - Nginx como Proxy Reverso

Este projeto demonstra como usar Nginx como proxy reverso para uma aplicação Node.js integrada a um banco de dados MySQL.

## 🔧 Tecnologias Utilizadas

- Node.js
- MySQL
- Nginx
- Docker
- Express.js

## 🚀 Instalação e Execução

### 1️⃣ Clone o Repositório

```sh
git clone https://github.com/seu-usuario/fullcycle-nginx-node.git
cd fullcycle-nginx-node
```

### 2️⃣ Inicialize os containers Docker

```sh
docker-compose up -d
```

### 3️⃣ Acesse a aplicação

Abra o navegador e acesse:

```sh
http://localhost:8080
```

## 🛠️ Debug e Solução de Problemas

• Para verificar logs dos containers:

```sh
docker logs db
docker logs node_app
docker logs nginx
```

• Para acessar o banco de dados MySQL:

```sh
docker exec -it db mysql -u root -p
```

Digite **root** como senha.
