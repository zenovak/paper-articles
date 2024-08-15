import { getDocByPath } from "@util/docs";
import Markdown from "react-markdown";

import remarkGfm from "remark-gfm";
import html from 'remark-html';

import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import remarkObsidianCallout from "@util/plugins/remark-obsidian";
import rehypeCodeHeaders from "@util/plugins/rehype-code-headers";


export function getStaticProps() {
    const content = getDocByPath("/docs/document.md");
    return { props: { content } }
}

/**
 * This Example shows utilization of custom made plugins and also specially crafted CSS
 * @param {*} param0 
 * @returns 
 */
export default function WithGithubCSS({content}){
    return (
        <Markdown
            remarkPlugins={[html, remarkGfm, remarkObsidianCallout]} // custom remark plugin
            rehypePlugins={[rehypeRaw, rehypeHighlight, rehypeCodeHeaders]}
            className={"max-w-7xl mx-auto markdown-body "}
        >
            {content}
        </Markdown>
    );
}