# Padrões e Técnicas Avançadas com Git e GitHub

Este repositório documenta os principais conceitos aprendidos no módulo **"Padrões e Técnicas Avançadas com Git e GitHub"**. A seguir, está uma explicação detalhada sobre cada tópico abordado.

---

## 1️⃣ Git Flow

O **Git Flow** é um fluxo de trabalho baseado em branches que ajuda no desenvolvimento colaborativo e na gestão de releases. Ele define cinco tipos principais de branches:

- **`main`**: Contém a versão de produção.
- **`develop`**: Contém a versão em desenvolvimento.
- **`feature/*`**: Utilizada para desenvolver novas funcionalidades.
- **`release/*`**: Criada para preparar um novo release.
- **`hotfix/*`**: Utilizada para correções críticas em produção.

Comandos comuns:
```sh
# Inicializar Git Flow no repositório
git flow init

# Criar uma nova feature
git flow feature start minha-feature

# Finalizar a feature e mesclar em develop
git flow feature finish minha-feature
```

---

## 2️⃣ Configuração das Branches e Assinatura de Commits

Para garantir segurança e controle sobre as branches, podemos definir regras para merge e commits assinados:

### 🔐 Protegendo branches no GitHub:
No repositório GitHub, podemos configurar branch protection rules em **Settings > Branches**, definindo:
- Exigir revisões antes de merges
- Bloquear force push
- Exigir que os commits sejam assinados

### ✍ Assinatura de commits:
Para assinar commits com GPG:
```sh
git config --global user.signingkey <chave_gpg>
git config --global commit.gpgsign true
```
Para verificar se um commit foi assinado:
```sh
git log --show-signature
```

---

## 3️⃣ Pull Requests (PRs) e Templates para PR

O **Pull Request** é um mecanismo essencial para revisão de código antes de integração. Podemos padronizar PRs usando **templates**.

📌 Criando um template de PR:

1. No repositório, crie a pasta `.github/PULL_REQUEST_TEMPLATE.md`
2. Adicione um template padrão, como:
```md
## Descrição
Breve descrição da alteração.

## Tipo de Mudança
- [ ] Bugfix
- [ ] Nova Feature
- [ ] Melhorias

## Checklist
- [ ] Meu código segue o estilo do projeto
- [ ] Testes foram adicionados
- [ ] PR revisado antes do merge
```

---

## 4️⃣ Code Review

O **Code Review** é uma prática essencial para garantir a qualidade do código. No GitHub, ele pode ser realizado através de Pull Requests.

🔹 **Boas práticas para Code Review:**
- Revisar código regularmente
- Garantir que o código segue padrões definidos (Ex: linting, style guides)
- Testar as mudanças antes do merge
- Adicionar comentários construtivos

No GitHub, podemos solicitar revisores e configurar **branch protection rules** para exigir aprovação antes do merge.

---

## 5️⃣ CODEOWNERS

O arquivo `CODEOWNERS` define automaticamente os responsáveis por revisão de código em um repositório.

📌 Criando um `CODEOWNERS`:

1. Criar um arquivo `.github/CODEOWNERS`
2. Definir os responsáveis por cada parte do projeto:
```plaintext
# Proprietários gerais do repositório
* @usuario-geral

# Proprietário dos arquivos na pasta backend/
backend/* @dev-backend

# Proprietário dos arquivos frontend/
frontend/* @dev-frontend
```

Com isso, qualquer PR que modificar arquivos dessas pastas precisará da revisão dos responsáveis.

---

## 6️⃣ Semantic Versioning e Conventional Commits

### 🔢 Semantic Versioning (SemVer)

O **SemVer** define um padrão de versão no formato **MAJOR.MINOR.PATCH**, por exemplo: `2.3.1`.

- `MAJOR`: Mudança incompatível (ex: `1.x.x` ➝ `2.0.0`)
- `MINOR`: Novas funcionalidades sem quebrar compatibilidade (`1.2.x` ➝ `1.3.0`)
- `PATCH`: Correções (`1.2.3` ➝ `1.2.4`)

### ✅ Conventional Commits

O **Conventional Commits** é um padrão para mensagens de commit:

**Formato:**
```sh
tipo(escopo): mensagem breve
```

**Exemplos:**
```sh
feat(auth): adicionar login com OAuth
fix(api): corrigir erro de validação
chore(deps): atualizar dependências
```

Isso melhora a legibilidade do histórico e facilita a automação (ex: geração de changelogs).

---

## 📌 Conclusão

Essas técnicas são essenciais para um workflow eficiente com Git e GitHub. Aplicando esses conceitos, conseguimos garantir um histórico organizado, colaboração eficiente e qualidade no desenvolvimento.

💡 **Dicas:**
- Sempre use branches separadas para features e correções
- Configure revisões obrigatórias para merges críticos
- Utilize mensagens de commit padronizadas para um histórico limpo

🚀 Agora é hora de colocar em prática! 

---

Se você gostou desse material, fique à vontade para contribuir ou sugerir melhorias! 😃
