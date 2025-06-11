# Service Mesh com Istio

Este repositório documenta os principais conceitos aprendidos no módulo **"Service Mesh com Istio"**. A seguir, estão os tópicos abordados com exemplos práticos aplicados em um cluster Kubernetes.

---

## 1️⃣ O que é um Service Mesh?

Um **Service Mesh** é uma camada de infraestrutura que gerencia a comunicação entre serviços em um ambiente distribuído, como o Kubernetes. Ele adiciona funcionalidades como:

- 🔍 Observabilidade (tracing, logs, métricas)
- 🔐 Segurança (mTLS, autenticação)
- ⚙️ Controle de tráfego (routing, retries, circuit breaker)
- 🧠 Resiliência e tolerância a falhas

No Service Mesh, essas funcionalidades são descentralizadas por meio de proxies **sidecars**, injetados em cada pod.

---

## 2️⃣ Introdução ao Istio

**Istio** é uma das implementações mais utilizadas de Service Mesh. Ele opera em conjunto com o proxy **Envoy**, oferecendo um plano de controle robusto para lidar com:

- Roteamento inteligente de tráfego
- Failover automático
- Controle de políticas
- Telemetria sem a necessidade de modificar os serviços

---

## 3️⃣ Conceitos e Recursos Aplicados

Durante o módulo, apliquei diversos conceitos com arquivos reais do Istio:

### 📌 VirtualService (`vs.yaml`)
- Define regras de roteamento para o tráfego entre serviços.
- Permite canary releases, A/B testing e redirecionamento de caminhos.

### 📌 DestinationRule (`dr.yaml`)
- Define configurações de destino como políticas de mTLS, circuit breakers e load balancing.

### 📌 Gateway (`gateway.yaml`, `gateway-domains.yaml`)
- Gerencia o tráfego de entrada externo, funcionando como uma "porta de entrada" controlada no cluster.

### 📌 Fault Injection (`fault-injection.yaml`)
- Simula falhas no tráfego, como delays e erros HTTP, para testar a resiliência da aplicação.

### 📌 Circuit Breaker (`circuit-breaker.yaml`)
- Impede que serviços sobrecarregados recebam mais requisições, protegendo o sistema de falhas em cascata.

### 📌 Consistent Hashing (`consistent-hash.yaml`)
- Estratégia de balanceamento baseada em afinidade de sessão (ex: por cookie ou cabeçalho).

---

## 4️⃣ Exemplo Prático com Serviço Go

Para validar o comportamento dos padrões de resiliência, construí um serviço simples com **Go**:

📁 `circuit-breaker/servicex/server.go`  
📄 `Dockerfile` para empacotar o serviço

Este serviço simula cenários de falhas para que os mecanismos do Istio possam ser observados em ação com métricas reais.

---

## 5️⃣ Execução no Cluster Kubernetes

Pré-requisitos:
- Kubernetes com Istio instalado
- Ferramentas: `kubectl`, `istioctl`, `Docker` (para build)

### 🔧 Passos para executar:

```sh
# Aplicar os recursos no cluster
kubectl apply -f .

# Verificar gateways e virtual services
kubectl get gateways
kubectl get virtualservices

# Verificar as rotas configuradas
istioctl proxy-config routes <nome-do-pod> --name http
```

> Para testar os circuit breakers e fault injection, envie várias requisições simultâneas e observe os logs e métricas.

---

## 6️⃣ Conclusão

Com o **Istio**, conseguimos aplicar diversos padrões de arquitetura avançados sem alterar o código da aplicação.

✅ O que foi aprendido:
- Criação e aplicação de recursos do Istio
- Controle de tráfego avançado com VirtualService e DestinationRule
- Implementação de resiliência com circuit breaker e fault injection
- Como o Envoy atua como proxy sidecar para interceptar o tráfego

🚀 Este módulo demonstrou na prática como o Service Mesh melhora a observabilidade, confiabilidade e controle em aplicações modernas baseadas em microserviços.

💡 **Dicas Finais:**
- Utilize Istio para aplicar políticas de segurança sem tocar no código da aplicação
- Aproveite recursos como tracing e métricas para diagnóstico em produção
- Simule falhas intencionais com fault injection para testar a resiliência do sistema

---
