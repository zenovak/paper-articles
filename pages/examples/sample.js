import { getDocByPath } from "@util/docs"
import { markdownToHtml2 } from "@util/markdown";
import { useEffect } from "react";
import tocbot from "tocbot";


export async function getStaticProps() {
    const markdown = getDocByPath("/docs/sample.md");
    const content = await markdownToHtml2(markdown);

    return { props: {content}}
}

/**
 * This example shows the same functionality as the previous, but uses remark directly,
 * @param {*} param0 
 * @returns 
 */
export default function UsingRemarkDirectly({content}) {

    useEffect(()=> {
        // the following component uses tocbot table of contents. It requies the markdown to have js-toc-content class
        // the dedicated tag for the toc to have js-toc toc, and to run init the following code
        tocbot.init({
            // Where to render the table of contents.
            tocSelector: '.js-toc',
            // Where to grab the headings to build the table of contents.
            contentSelector: '.js-toc-content',
            // Which headings to grab inside of the contentSelector element.
            headingSelector: 'h1, h2, h3, h4',
            // For headings inside relative or absolute positioned containers within content.
            hasInnerContainers: true,
        });
    }, [])

    return (
        <main
            className="max-w-7xl mx-auto md:flex my-16"
        > 
            <article 
                className="js-toc-content max-w-3xl mx-auto px-4 markdown-body-zen"
                dangerouslySetInnerHTML={{ __html: content }}
            />
            <aside
                className="hidden lg:block max-w-full px-4"
            >
                <section className="sticky top-14 text-base">
                    <span className="pl-4 pt-2 mb-4 block font-semibold">Contents</span>
                    <nav className="js-toc toc w-56"></nav>
                </section>                
            </aside>
        </main>
    )
}