import { SKIP, visit } from 'unist-util-visit';


function wrapper(lang, content) {
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
            tagName: 'p',
            properties: { className: ['code-bloc-title-lang'] },
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
              className: ['code-bloc-title-btn'],
              onClick: "const parent = this.closest('.code-block'); const codeBlock = parent.querySelector('code'); navigator.clipboard.writeText(codeBlock.textContent);"
            },
            children: [ ]
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
  return (tree) => {
      visit(tree, 'element', (node, index, parent) => {
      if (node.tagName == "pre") {
          // create copy of the node
          const newNode = Object.assign({}, node);

          // asign it to the current node, dont use = cuz its broken
          Object.assign(node, wrapper("lang", newNode));
          return [SKIP];
      } 
      });
  };
}