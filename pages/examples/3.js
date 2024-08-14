import { getDocByPath } from "@util/docs";
import Markdown from "react-markdown";

import remarkGfm from "remark-gfm";
import html from 'remark-html';

import remarkObsidianCallout from "remark-obsidian-callout";
import rehypeRaw from "rehype-raw";
import { remarkAlert } from 'remark-github-blockquote-alert';


export function getStaticProps() {
    const content = getDocByPath("/docs/document.md");
    return { props: { content } }
  }

export default function WithPluginsToo({content}){
    return (
        <Markdown
            remarkPlugins={[html, remarkGfm, remarkAlert]}
            rehypePlugins={[rehypeRaw]}
            className={"max-w-7xl mx-auto prose lg:prose-lg " +
                "prose-inline-code:before:content-none prose-inline-code:after:content-none " +
                "prose-inline-code:bg-[#f6f6f7] prose-inline-code:px-1.5 prose-inline-code:py-1 " +
                "prose-inline-code:rounded-md "
            }
        >
            {content}
        </Markdown>
    );
}