import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import { remarkAlert } from 'remark-github-blockquote-alert';

import html from 'remark-html';
import remarkParse from 'remark-parse';
import prism from 'remark-prism';
import remarkRehype from 'remark-rehype';
import remarkToc from 'remark-toc';

import { unified } from 'unified';
import rehypeCodeHeaders from './plugins/rehype-code-headers';


export default async function markdownToHtml(markdown) {
  const result = await remark()
    // https://github.com/sergioramos/remark-prism/issues/265
    .use(html, { sanitize: false })
    .use(prism)       // for code syntax
    .use(remarkAlert) // for alerts / callouts
    .use(remarkGfm)   // for tables
    .use(remarkToc)   // table of contents
    .process(markdown);
  return result.toString();
}


export async function markdownToHtml2(markdown) {
  const result = await unified()
    .use(remarkParse)
    // .use(prism)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true})
    .use(rehypeCodeHeaders)
    .use(rehypeRaw)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(markdown)
  return result.toString();
}