import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import { remarkAlert } from 'remark-github-blockquote-alert'
import html from 'remark-html';
import prism from 'remark-prism';
import remarkToc from 'remark-toc';


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