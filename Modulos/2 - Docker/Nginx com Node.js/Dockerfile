# Usando imagem oficial do Node.js
FROM node:18

# Definindo diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copiando os arquivos de dependências e instalando pacotes
COPY package.json package-lock.json ./
RUN npm install

# Copiando todo o código da aplicação
COPY . .

# Expondo a porta usada pela aplicação
EXPOSE 3000

# Definindo comando de inicialização da aplicação
CMD ["node", "server.js"]