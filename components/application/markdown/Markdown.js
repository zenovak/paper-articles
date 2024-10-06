/**
 * 
 * @param {content} content Compiled HTML contents from a markdown source.
 * @returns 
 */
export const Markdown = ({content}) => {
    return (
        <article
            className="js-toc-content max-w-3xl mx-auto px-4 markdown-body-zen"
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
}