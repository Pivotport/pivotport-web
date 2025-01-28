# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Add News Articles

To quickly add news articles to the website, follow these steps:

1. Create a new Markdown file in the src/content/articles directory with a descriptive filename (e.g., quantum-breakthrough.md)

2. Add the required frontmatter at the top of the file with these fields:


---
title: "Your Article Title"
date: 2024-01-15
author: "Author Name"
category: "Category Name"
excerpt: "A brief summary of the article (optional but recommended)"
---

Your article content here...

3. The supported categories are:

Artificial Intelligence
Quantum Engineering
Cloud Engineering

4. Write your article content using Markdown syntax below the frontmatter.
   
Here's a complete example:


---
title: "Quantum Computing Breakthrough in Financial Modeling"
date: 2024-01-15
author: "Rajiv"
category: "Quantum Engineering"
excerpt: "Our team has achieved a significant breakthrough in applying quantum algorithms to complex financial modeling, reducing computation time by 90%."
---

## The Challenge

Traditional financial modeling faces significant computational barriers when dealing with complex portfolio optimization...

## Our Solution

By leveraging quantum computing algorithms, we developed a novel approach that...

## Results

The implementation showed remarkable improvements:
- 90% reduction in computation time
- Higher accuracy in risk assessment
- Improved portfolio optimization results

## Future Applications

This breakthrough opens new possibilities for:
- Real-time trading strategies
- Complex risk analysis
- Market prediction models

The article will automatically appear in:

The articles listing page (/articles)
The homepage's latest articles section
The search results
The sitemap
No additional configuration is needed - the Astro content collections system will automatically process and display the new article.
