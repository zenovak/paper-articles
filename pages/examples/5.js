import { getDocByPath } from "@util/docs"
import { markdownToHtml2 } from "@util/markdown";



export async function getStaticProps() {
    const markdown = getDocByPath("/docs/document.md");
    const content = await markdownToHtml2(markdown);

    return { props: {content}}
}

/**
 * This example shows the same functionality as the previous, but uses remark directly, 
 * @param {*} param0 
 * @returns 
 */
export default function UsingRemarkDirectly({content}) {
    return (
        <article 
            className=" max-w-7xl mx-auto markdown-body-zen"
            dangerouslySetInnerHTML={{ __html: content }}
        />
    )
}