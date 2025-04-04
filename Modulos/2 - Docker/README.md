# 📦 Docker e Docker Compose

Este repositório contém informações detalhadas sobre **Docker** e **Docker Compose**, explicando como utilizá-los para gerenciar containers de forma eficiente.

---

## 🐳 O que é Docker?

Docker é uma plataforma que permite criar, implantar e executar aplicações em containers. Containers são ambientes isolados que contêm tudo o que uma aplicação precisa para rodar, incluindo o sistema operacional, bibliotecas e dependências.

✅ **Principais vantagens do Docker:**

- Padronização de ambientes
- Facilidade na distribuição de aplicações
- Rápido provisionamento de ambientes
- Escalabilidade
- Redução de conflitos entre dependências

---

## 📌 Instalação do Docker

Para instalar o Docker, siga as instruções do site oficial: [Docker Docs](https://docs.docker.com/get-docker/)

- **Linux:**

```sh
sudo apt update && sudo apt install docker.io -y
sudo systemctl start docker
sudo systemctl enable docker
```

- **Windows/Mac:**
Baixe e instale o **Docker Desktop**: [Docker Desktop](https://www.docker.com/products/docker-desktop)

Verifique a instalação:

```sh
docker --version
```

---

## 🚀 Comandos Básicos do Docker

Após instalar o Docker, você pode rodar alguns comandos essenciais:

### 🔍 Verificando o funcionamento

```sh
docker run hello-world
```

### 📜 Listando containers

```sh
docker ps               # Lista containers em execução
docker ps -a            # Lista todos os containers (parados e em execução)
```

### ▶️ Iniciando e Parando Containers

```sh
docker start <container_id>
docker stop <container_id>
```

### 🗑️ Removendo Containers

```sh
docker rm <container_id>
```

### 🔍 Listando Imagens

```sh
docker images
```

### 🛠️ Removendo Imagens

```sh
docker rmi <image_id>
```

---

## 📦 Criando e Gerenciando Imagens com Docker

### 📍 Criando uma Imagem com Dockerfile

Um **Dockerfile** é um arquivo que contém instruções para criar uma imagem Docker.

Exemplo de **Dockerfile** para uma aplicação Node.js:

```dockerfile
# Usando uma imagem base do Node.js
FROM node:18

# Definindo diretório de trabalho
WORKDIR /usr/src/app

# Copiando arquivos
COPY package*.json ./
RUN npm install
COPY . .

# Expondo a porta da aplicação
EXPOSE 3000

# Comando para iniciar o app
CMD ["node", "index.js"]
```

### 📍 Construindo uma Imagem

```sh
docker build -t minha-imagem .
```

### 📍 Executando um Container

```sh
docker run -d -p 3000:3000 --name meu-container minha-imagem
```

---

## 🔗 O que é Docker Compose?

O **Docker Compose** é uma ferramenta para definir e gerenciar aplicações multi-container usando um único arquivo **docker-compose.yml**.

✅ **Vantagens do Docker Compose:**

- Facilita a orquestração de múltiplos containers
- Evita longos comandos Docker
- Permite configurar dependências como bancos de dados e cache

### 📍 Instalando o Docker Compose

Se você já instalou o Docker Desktop, o Docker Compose está incluído. Caso contrário, instale manualmente:

```sh
sudo apt install docker-compose -y
```

Verifique a instalação:

```sh
docker-compose --version
```

---

## 📜 Exemplo de Docker Compose

Vamos criar um ambiente com **Node.js** e **MySQL** utilizando **docker-compose.yml**:

```yaml
version: '3.8'

services:
  app:
    build: .
    container_name: node_app
    restart: always
    ports:
      - "3000:3000"
    depends_on:
      - db
    volumes:
      - .:/usr/src/app
      - /usr/src/app/node_modules

  db:
    image: mysql:latest
    container_name: mysql_db
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: meu_banco
      MYSQL_USER: user
      MYSQL_PASSWORD: password
    ports:
      - "3306:3306"
```

### 📍 Subindo os Containers

```sh
docker-compose up -d
```

### 📍 Parando os Containers

```sh
docker-compose down
```

### 📍 Verificando os Logs

```sh
docker-compose logs -f
```

### 📍 Reiniciando um Serviço

```sh
docker-compose restart app
```

---

## 🛠️ Boas Práticas com Docker

✅ Use imagens leves (ex: `node:alpine` ao invés de `node:latest`)

✅ Adicione um `.dockerignore` para evitar copiar arquivos desnecessários

✅ Utilize **volumes** para persistência de dados

✅ Sempre especifique versões de imagens (`mysql:8.0` e não `mysql:latest`)

✅ Utilize **multi-stage builds** para reduzir o tamanho das imagens

Exemplo de `.dockerignore`:

```sh
node_modules
npm-debug.log
.env
dist
```

---

## 🎯 Conclusão

O Docker facilita a criação e gestão de ambientes isolados, enquanto o Docker Compose simplifica a orquestração de múltiplos containers. Com essas ferramentas, podemos criar aplicações escaláveis e portáteis de maneira eficiente. 🚀
