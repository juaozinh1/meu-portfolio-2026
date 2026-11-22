# Portfólio — João Vitor

Portfólio feito com **React, Vite, TypeScript e Tailwind CSS**, com tema claro e escuro.

## Rodar localmente

```bash
npm install
npm run dev
```

## Estrutura

```text
src/
├── components/   # Navbar, Hero, Projects, Stack, Journey, Contact, ThemeToggle
├── data/
│   └── portfolio.ts   # Todo o conteúdo do site (edite apenas aqui)
└── App.tsx
public/
└── CV.pdf             # Currículo baixado pelos botões "Baixar CV"
```

## Publicar no GitHub Pages

1. Crie um repositório no GitHub e envie o código para a branch `main`:

   ```bash
   git init
   git add .
   git commit -m "Portfólio"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
   git push -u origin main
   ```

2. No repositório, vá em **Settings → Pages** e, em **Source**, escolha **GitHub Actions**.
3. O workflow em `.github/workflows/deploy.yml` roda a cada push na `main`, faz o build e publica.
   Acompanhe na aba **Actions**. O site fica em `https://SEU-USUARIO.github.io/SEU-REPO/`
   (ou `https://SEU-USUARIO.github.io/` se o repositório se chamar `SEU-USUARIO.github.io`).

O `vite.config.ts` usa caminhos relativos (`base: './'`), então não é preciso ajustar nada
conforme o nome do repositório.

## Build manual

```bash
npm run build     # gera a pasta dist/
npm run preview   # testa o build localmente
```
