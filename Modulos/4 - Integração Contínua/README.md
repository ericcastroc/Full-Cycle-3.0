# 🛠️ Integração Contínua (CI/CD) com GitHub Actions, Docker e SonarCloud

Este repositório documenta os principais conceitos e práticas aprendidas durante o módulo de **Integração Contínua (CI/CD)**. O foco foi aplicar práticas modernas de automação de testes, build e análise de qualidade de código utilizando ferramentas amplamente utilizadas na indústria de software.

---

## 📌 O que é CI/CD?

**CI/CD** é uma sigla para:

- **CI (Continuous Integration)**: Integração contínua — prática de integrar código frequentemente, rodando testes automatizados a cada mudança para garantir estabilidade.
- **CD (Continuous Delivery ou Continuous Deployment)**: Entrega contínua — automatização da entrega do código testado e validado para ambientes de produção ou homologação.

Essas práticas aumentam a qualidade do software, reduzem bugs em produção e aceleram o processo de entrega.

---

## ⚙️ GitHub Actions

O **GitHub Actions** é uma ferramenta de automação integrada ao GitHub que permite criar workflows personalizados para compilar, testar e implantar código automaticamente.

### Exemplo de workflow

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Configurar Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm test
```

## 🧬 Strategy Matrix

A **Strategy Matrix** permite executar o mesmo job com diferentes combinações de ambientes, versões ou parâmetros.

### Exemplo Strategy

```yaml
    strategy:
        matrix:
            node-version: [16, 18, 20]
 ```

Isso permite rodar os testes automaticamente em múltiplas versões do Node.js, garantindo compatibilidade.

---

## 🐳 Docker e Dockerfile

**Docker** é uma plataforma que permite empacotar aplicações e suas dependências em containers, garantindo que o software rode da mesma forma em qualquer ambiente.

### Exemplo básico de Dockerfile

```sh
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]
```

Esse **Dockerfile** cria uma imagem da aplicação e a torna pronta para ser executada em qualquer lugar.

---

## 📦 CI com Docker

Integrar **Docker** ao **CI** permite rodar testes em containers isolados, garantindo reprodutibilidade. Também facilita o deploy de aplicações diretamente a partir do pipeline.

### Exemplo CI Docker

```yaml
- name: Build Docker image
  run: docker build -t my-app .
```

---

## ✅ Análise de Qualidade com SonarQube/SonarCloud

### 🔍 SonarQube

Plataforma de análise estática que verifica problemas de segurança, bugs e code smells no código.

### ☁️ SonarCloud

Versão cloud do SonarQube integrada ao GitHub. Pode ser usada via GitHub Actions com autenticação por token.

### Exemplo de integração com GitHub Actions

```yaml
- name: SonarCloud Scan
  uses: SonarSource/sonarcloud-github-action@master
  with:
    organization: meu-usuario
    projectKey: meu-projeto
  env:
    SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
```

---

## 🧪 Benefícios da CI/CD

- Testes automatizados a cada push

- Deploys rápidos e confiáveis

- Redução de bugs em produção

- Feedback mais rápido para os desenvolvedores

- Melhoria contínua na qualidade do código

---

## 📜 Conclusão

A aplicação prática de **CI/CD** com **GitHub Actions**, **Docker** e **SonarCloud** permite criar pipelines robustos, seguros e eficientes. Com isso, conseguimos maior confiança nas entregas e aceleramos o desenvolvimento com qualidade e segurança.
