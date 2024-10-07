import { Markdown } from "@components/application/markdown/Markdown";
import { getMarkdownDataFromSlug, getMarkdownDirectoryArray } from "@util/docs";
import { markdownToHtml2 } from "@util/markdown";
import { useEffect } from "react";
import tocbot from "tocbot";


/**
 * Fetches all paths for getStaticProps to generate static pages for all the markdown files
 * @returns 
 */
export function getStaticPaths() {
    const posts = getMarkdownDirectoryArray("/_posts/");
    return {
        paths: posts.map((item)=> {
            return {
                params: {
                    slug: item.slug,
                },
            }
        }),
        fallback: false, // false or "blocking"
    }
}

export async function getStaticProps({params}) {
    const markdownData = getMarkdownDataFromSlug(params.slug, "/_posts/");
    const content = await markdownToHtml2(markdownData.content);
    console.log("Logging params");
    console.log(params);
    return { props: {content}}
}


/*
 * This represents a system for generating a blog site by proceduralling iteraling over all blog
 * entries within a /docs/ directory.
 * The entries all parses regular markdown contents.
 */
export default function Blog({content, frontmatter}) {
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
            <Markdown 
                content={content}
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
