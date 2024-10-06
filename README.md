This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

<br><br>

---

## Making a markdown renderer in NextJS with the same features as Chirpy
There are 2 main ways to render markdown documents with the Paper starter template:
- Via a standard NextJS entry-point
- Via Nextra's intergrated routes

<br>

### NextJS entry-point
Paper is a dedicated toolset for NextJS to render pure markdown files effectively. 

We have the following components in the API:
- `RemoteMarkdown`. Which renders markdown files from a source URL. This is a standalone component for rendering markdown files from a url
- `Markdown`. A Standard Markdown display component. This is used to `dangerouslySetInnerHTML` for compiled markdown outputs. It uses a preconfigured
  CSS library for its rich format.
- `MarkdownToHTML2` A UnifiedJS compiler-set. Compiles a Markdown source file to HTML.

However Mdx support is not part of ths jsx entry-point toolset. To render Mdx files, Nextra's intergration is required.

<br>

### Nextra
Nextra is a NextJS plugin for markdown and Mdx. It comes with a set of features that enable `.md` and `.mdx` files within the pages
directory to compile directly to HTML. It can be said to be a superset of `next-mdx`

The files compiled are also indexed during built-time to enable client-side search library intergration. 

Nextra comes with 2 default themes that supports features like "table of content", "markdown-page wide search", "sidebar navigation" straight
out the box. However, these features' APIs are not directly exposed for tinkering/reuse, and thus constructing your own custom layouts to support these
existing features would require reimplementing some of the component logics from sratch.

Paper provides layout level components and helper functions that targets Nextra's pageOpts API to allow building Nextra themes more easily.













T








## `_posts` directory
This directory demonstrates renderring of markdown files with frontmatter. Markdown file frontmatters are 


