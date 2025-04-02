# Usando imagem oficial do Node.js
FROM node:18

# Definindo diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copiando os arquivos de dependências e instalando pacotes
COPY package*.json ./

RUN npm install

ENV DOCKERIZE_VERSION v0.9.3

RUN apt-get update \
    && apt-get install -y wget \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

# Copiando todo o código da aplicação
COPY . .

# Expondo a porta usada pela aplicação
EXPOSE 3000

# Definindo comando de inicialização da aplicação
CMD ["node", "server.js"]