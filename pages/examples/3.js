import { getDocByPath } from "@util/docs";
import Markdown from "react-markdown";

import remarkGfm from "remark-gfm";
import html from 'remark-html';

import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import remarkObsidianCallout from "@util/plugins/remark-obsidian";


export function getStaticProps() {
    const content = getDocByPath("/docs/document.md");
    return { props: { content } }
  }

/**
 * This Example uses most of the popular readily made plugins, and CSS typography
 * @param {*} param0 
 * @returns 
 */
export default function WithPluginsToo({content}){
    return (
        <Markdown
            remarkPlugins={[html, remarkGfm, remarkObsidianCallout]}
            rehypePlugins={[rehypeRaw, rehypeHighlight]}
            className={"max-w-7xl mx-auto prose lg:prose-lg " +
                "prose:ps-[unset] prose-lg:ps-[unset] " +
                "prose-inline-code:before:content-none prose-inline-code:after:content-none " +
                "prose-inline-code:bg-[#f6f6f7] prose-inline-code:px-1.5 prose-inline-code:py-1 " +
                "prose-inline-code:rounded-md prose-blockquote:ps-[unset] "
            }
        >
            {content}
        </Markdown>
    );
}