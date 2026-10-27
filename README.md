# Exercício Gulp

Projeto de automação de tarefas com Gulp:

- compilação de SASS (`src/styles` -> `dist/css`)
- compressão de imagens (`src/images` -> `dist/images`)
- minificação e ofuscação de JavaScript (`src/scripts` -> `dist/js`)

## Como usar

```bash
npm install -g gulp-cli   # instalação global (uma vez só)
npm install               # instala as dependências do projeto
gulp                      # roda todas as tarefas
gulp watch                # fica observando as mudanças
```

Depois abra o `index.html` no navegador.

## Tarefas

| Comando | O que faz |
|---|---|
| `gulp` | aviso -> SASS (série) -> imagens + JS (paralelo) |
| `gulp styles` | compila o SASS |
| `gulp images` | comprime as imagens |
| `gulp scripts` | minifica e ofusca o JS |
| `gulp watch` | executa as tarefas ao salvar arquivos |
