import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';

import rehypeRaw from 'rehype-raw';

import rehypeCodeHeaders from './plugins/rehype-code-headers';
import remarkObsidianCallout from './plugins/remark-obsidian';

import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';


/**
 * @deprecated will be removed on next update
 */
export function markdownToHtml2Sync(markdown) {
  return markdownToHtmlSync(markdown);
}

/**
 * @deprecated will be removed on next update
 * @param {*} markdown 
 * @returns 
 */
export async function markdownToHtml2(markdown) {
  return await markdownToHtml(markdown);
}

/**
 * An advanced version for parsing markdown article into proper HTMl with code headers, and more
 * @param {*} markdown markdown source string
 * @returns 
 */
export async function markdownToHtml(markdown) {
  const result = await unified()
    .use(remarkParse)
    // .use(prism)
    .use(remarkGfm)
    .use(remarkObsidianCallout)
    .use(remarkRehype, { allowDangerousHtml: true})
    .use(rehypeRaw)
    .use(rehypeCodeHeaders)                        // custom plugin to add code headers
    .use(rehypeHighlight)                          // syntax highlighting
    .use(rehypeSlug)                               // add ids to headings automatically, for Toc support
    .use(rehypeStringify)
    .process(markdown)
  return result.toString();
}

/**
 * An advanced version for parsing markdown article into proper HTMl with code headers
 * Synchronous version
 * @param {*} markdown 
 * @returns 
 */
export function markdownToHtmlSync(markdown) {
  const result = unified()
    .use(remarkParse)
    // .use(prism)
    .use(remarkGfm)
    .use(remarkObsidianCallout)
    .use(remarkRehype, { allowDangerousHtml: true})
    .use(rehypeRaw)
    .use(rehypeCodeHeaders)                        // custom plugin to add code headers
    .use(rehypeHighlight)                          // syntax highlighting
    .use(rehypeSlug)                               // add ids to headings automatically, for Toc support
    .use(rehypeStringify)
    .processSync(markdown)
  return result.toString();
}
