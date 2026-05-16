# Lucas Vale — Site pessoal/profissional

Projeto React completo criado com Vite, Tailwind CSS, Framer Motion e Lucide React, pronto para deploy na Vercel.

## Como rodar localmente

1. Instale o Node.js.
2. Abra a pasta do projeto no VS Code.
3. No terminal, rode:

```bash
npm install
npm run dev
```

4. Abra o endereço mostrado no terminal. Normalmente será:

```txt
http://localhost:5173
```

## Como gerar build de produção

```bash
npm run build
```

O Vite criará a pasta `dist/`.

## Deploy na Vercel

### Via GitHub

1. Suba este projeto para um repositório no GitHub.
2. Entre na Vercel.
3. Clique em **Add New... > Project**.
4. Importe o repositório.
5. Use:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Clique em **Deploy**.

### Via Vercel CLI

```bash
npm install -g vercel
vercel
```

Para publicar em produção:

```bash
vercel --prod
```

## Onde editar textos, links e imagem

Edite o arquivo:

```txt
src/data/content.js
```

Os links rápidos ainda estão com `href: "#"`. Substitua pelos links reais do Lattes, Google Scholar, ORCID, LinkedIn e Instagram.

A imagem quadrada da seção Sobre está em:

```js
export const aboutImage = {
  src: "...",
  alt: "..."
};
```

Para usar uma imagem local, coloque-a em `public/` e altere para algo como:

```js
src: "/minha-foto.jpg"
```
