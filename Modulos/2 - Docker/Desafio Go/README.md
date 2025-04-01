# 🏆 Full Cycle Docker Challenge

Este projeto faz parte do desafio Full Cycle, onde precisamos criar uma imagem Docker extremamente leve para rodar um programa em Go que imprime **"Full Cycle Rocks!!"**.

---

## 🚀 Como Executar

Para rodar a imagem diretamente do Docker Hub:

```sh
docker run --rm seu-user/fullcycle-docker-go
```

## 🔧 Como Construir a Imagem

1. Clone este repositório:

```sh
git clone https://github.com/seu-user/fullcycle-docker-go.git
cd fullcycle-docker-go
```

2. Construa a imagem Docker:

```sh
docker build -t seu-user/fullcycle-docker-go .
```

3. Teste a imagem localmente:

```sh
docker run --rm seu-user/fullcycle
```

## 📁 Estrutura do Projeto 

• main.go → Código em Go que imprime "Full Cycle Rocks!!".

• Dockerfile → Configuração para construir a imagem Docker com menos de 2MB.

## 🛠 Tecnologias Utilizadas

• Go (Golang)

• Docker

## 🎯 Objetivo do Desafio

Criar uma imagem Docker pequena e eficiente utilizando Go, garantindo que tenha menos de 2MB.
