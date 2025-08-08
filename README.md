# 📋 To-Do List Interativa

Uma aplicação de lista de tarefas desenvolvida com **React**, **Vite** e **TypeScript**, que permite **adicionar, editar, remover e marcar tarefas como concluídas**.  
O objetivo deste projeto é explorar **componentização**, **roteamento básico** e **emulação de requisições HTTP**.

---

## 🎥 Preview

![Demonstração da To-Do List](src/assets/To-do.gif)

---

## 🚀 Funcionalidades

- ➕ **Adicionar tarefas** de forma simples e rápida.
- ✏️ **Editar tarefas** existentes.
- ✅ **Marcar como concluída** ou voltar para pendente.
- 🗑️ **Remover tarefas** da lista.
- 🧩 **Componentização** para reutilização de código.
- 🌐 **Roteamento básico** com React Router.
- 📡 **Simulação de API** para persistência de dados.

---

## 🛠️ Tecnologias Utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [JSON Server](https://github.com/typicode/json-server) (para simular o backend)

---

## 📂 Estrutura do Projeto

```bash
src/
├── assets/          # Imagens e arquivos estáticos
├── components/      # Componentes reutilizáveis
├── core-components/ # Componentes principais
├── helpers/         # Funções utilitárias
├── hooks/           # Hooks customizados
├── models/          # Tipagens e interfaces
├── pages/           # Páginas da aplicação
├── App.tsx          # Componente raiz
├── index.css        # Estilos globais
├── main.tsx         # Ponto de entrada do React
└── vite-env.d.ts    # Tipos do Vite
