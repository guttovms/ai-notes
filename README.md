# AI Notes 📝

Aplicação **Full Stack** para criação, busca e resumo de notas, utilizando:

- **Frontend:** Vue 3 + Vite + Pinia + Axios
- **Backend:** Node.js + AWS Lambda (Serverless Framework)
- **Banco:** MongoDB Atlas
- **Integração IA:** OpenAI API (simulada para ambiente local)

> Este projeto foi desenvolvido para treino de Vue 3, Node.js, MongoDB, Serverless e integração com APIs de IA.

---

## ⚙️ Funcionalidades
- Criar, listar, atualizar e excluir notas
- Busca textual com índice no MongoDB Atlas
- Geração de resumo e tags (simulada no local)
- Frontend responsivo com integração total via API

---

## 📂 Estrutura do projeto
- ai-notes/
-- backend/ # API Serverless (Node.js)
-- frontend/ # SPA Vue 3 + Vite

---

## 🚀 Como rodar localmente

### 1️⃣ Clonar repositório

1 cd backend
2 npm install
3 cp .env.example .env  # edite as variáveis
4 npx serverless offline

5 cd frontend
6 npm install
7 cp .env.example .env  # configure API base URL
8 npm run dev

MONGODB_URI=<string de conexão do MongoDB Atlas>
DB_NAME=ai_notes
API_KEY=dev-key-123
OPENAI_API_KEY=<opcional para IA real>

VITE_API_BASE_URL=http://localhost:3000
VITE_API_KEY=dev-key-123


🛠 Tecnologias
Vue 3 + Vite

Pinia (state management)

Axios

Node.js 20.x

Serverless Framework

MongoDB Atlas

OpenAI API (mock local)

📌 Próximos passos
Estilizar com Tailwind CSS

Autenticação real com JWT/Cognito

Deploy real na AWS (API Gateway + Lambda)

Integração com OpenAI API real


---

## Passo 4 — Subir para o GitHub
```bash
git add .
git commit -m "feat: projeto AI Notes"
git push -u origin main
