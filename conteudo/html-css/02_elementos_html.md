# ✍️ Elementos dando vida ao HTML

O HTML estrutura e organiza o conteúdo das páginas web, tornando-as acessíveis e compreensíveis para usuários e mecanismos de busca. Usar as tags corretas é essencial para criar páginas bem organizadas e preparadas para SEO.

-----

## 1\. Hierarquia da Informação: Títulos (`<h1>` a `<h6>`)

Títulos dividem o conteúdo em seções e criam uma hierarquia lógica. Use `<h1>` para o título principal e `<h2>` a `<h6>` para subtítulos.

**Exemplo:**

```html
<h1>Introdução ao HTML</h1>
<h2>O que é HTML?</h2>
<h3>História</h3>
```

> **Dica:** Não pule níveis de títulos para manter a estrutura acessível.

-----

## 2\. Estruturando o Texto: Parágrafos e Blocos Semânticos

A tag `<p>` cria parágrafos. Use tags semânticas para organizar o conteúdo.

**Exemplo:**

```html
<article>
    <h1>Web Semântica</h1>
    <section>
        <h2>Conceito</h2>
        <p>A web semântica facilita a compreensão dos dados.</p>
    </section>
</article>
```

-----

## 3\. Ênfase, Importância e Destaques

Use tags para destacar partes do texto:

- `<strong>`: Importância.
- `<em>`: Ênfase.
- `<mark>`: Destaque visual.

**Exemplo:**

```html
<p><strong>Importante:</strong> Use tags semânticas.</p>
<p>HTML é <em>essencial</em> para web.</p>
<p>Aprenda <mark>HTML5</mark>!</p>
```

-----

## 4\. Quebras de Linha e Linhas Horizontais

- `<br>`: Quebra de linha.
- `<hr>`: Linha horizontal.

**Exemplo:**

```html
<p>Endereço:<br>Rua Exemplo, 123</p>
<hr>
<p>Nova seção</p>
```

-----

## 5\. Outras Tags Modernas

- `<code>`: Código.
- `<time>`: Data/hora.
- `<blockquote>`: Citação.

**Exemplo:**

```html
<p>Código: <code>let x = 1;</code></p>
<p>Publicado em <time datetime="2024-06-01">01/06/2024</time></p>
<blockquote>HTML transforma a web.</blockquote>
```

-----

### Exemplo Completo de HTML Moderno

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Exemplo HTML</title>
</head>
<body>
    <header>
        <h1>HTML Básico</h1>
        <nav>
            <a href="#sobre">Sobre</a>
        </nav>
    </header>
    <main>
        <section id="sobre">
            <h2>O que é?</h2>
            <p>HTML estrutura páginas web.</p>
        </section>
        <hr>
        <section>
            <h2>Exemplo</h2>
            <p>Veja o código: <code>&lt;h1&gt;Título&lt;/h1&gt;</code></p>
        </section>
    </main>
    <footer>
        <small>&copy; 2024 Exemplo</small>
    </footer>
</body>
</html>
```

-----

## 🚀 Atividade Prática 02

**Objetivo:** Praticar a estruturação de um texto semântico usando títulos, parágrafos e tags modernas de HTML.

**Instruções:**

1. Crie um arquivo `artigo.html`.
2. Estruture o HTML5 básico.
3. No `<title>`, coloque "Artigo sobre Tecnologia".
4. No `<body>`, escreva um artigo sobre tecnologia usando:
        - `<h1>` para o título principal.
        - Pelo menos duas `<section>` com `<h2>`.
        - Dois `<p>` em cada seção.
        - `<strong>`, `<em>`, `<mark>`, `<hr>` e uma tag semântica moderna.
5. Salve e abra no navegador.
6. Envie o arquivo conforme solicitado.

> **Dica:** Use tags semânticas para tornar seu artigo mais acessível e organizado!

