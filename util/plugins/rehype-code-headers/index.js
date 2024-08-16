import rehypeParse from 'rehype-parse';
import { unified } from 'unified';
import { SKIP, visit } from 'unist-util-visit';
import { getCodeLangugage } from './codelang';


const copyIcon = '<svg xmlns="http://www.w3.org/2000/svg" class="clipboard" width="1.2rem" height="1.2rem" viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path d="M7 9.667A2.667 2.667 0 0 1 9.667 7h8.666A2.667 2.667 0 0 1 21 9.667v8.666A2.667 2.667 0 0 1 18.333 21H9.667A2.667 2.667 0 0 1 7 18.333z"></path><path d="M4.012 16.737A2 2 0 0 1 3 15V5c0-1.1.9-2 2-2h10c.75 0 1.158.385 1.5 1"></path></g></svg>';
const checkMark = '<svg xml:space="preserve" style="enable-background:new 0 0 512 512" viewBox="0 0 24 24" y="0" x="0" height="18" width="18" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" class="checkmark"><g><path data-original="#000000" fill="currentColor" d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"></path></g></svg>';


function wrapper(lang, icons, content) {
  const wrapperObj =  {
    type: 'element',
    tagName: 'div',
    properties: { className: ['code-block'] },
    children: [
      {
        type: 'element',
        tagName: 'div',
        properties: { className: ['code-block-title'] },
        children: [ 
          {
            type: 'element',
            tagName: 'span',
            properties: { className: ['code-block-title-lang'] },
            children: [ 
              {
                type: 'text',
                value: lang
              }
            ]
          },
          {
            type: 'element',
            tagName: 'button',
            properties: { 
              className: ['code-block-title-btn'],
              onClick: "const parent = this.closest('.code-block'); const codeBlock = parent.querySelector('code'); navigator.clipboard.writeText(codeBlock.textContent);"
            },
            children: [
              icons[0],
              icons[1]
            ]
          }
        ]
      },
      {
        type: 'element',
        tagName: 'div',
        properties: { className: ['code-block-body'] },
        children: [content]
      }
    ]
  };
  return wrapperObj;
}


/**
 * A rehype component that wraps around <pre> to provide language label and copy button.
 * Due to using onClick event. The onClick field will disappear in react-markdown. 
 * Instead, Please write your own component to wrap around the pre via react-markdown components prop.
 * @returns 
 */
export default function rehypeCodeHeaders(){
  const copyIconNode = unified()
    .use(rehypeParse, {fragment: true})
    .parse(copyIcon);

  const checkMarkIconNode = unified()
    .use(rehypeParse, {fragment: true})
    .parse(checkMark);
  
  return (tree) => {
      visit(tree, 'element', (node, index, parent) => {
      if (node.tagName == "pre") {
          // create copy of the node
          const newNode = Object.assign({}, node);
          // asign it to the current node, dont use = cuz its broken
          Object.assign(node, wrapper(
            getCodeLangugage(newNode.children[0]), 
            [copyIconNode, checkMarkIconNode], 
            newNode)
          );
          return [SKIP];
      } 
      });
  };
}