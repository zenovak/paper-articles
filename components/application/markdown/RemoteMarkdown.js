import { markdownToHtml2 } from "@util/markdown";
import { useEffect, useState } from "react";
import { Markdown } from "./Markdown";


/**
 * Renders markdown file from a remote source.
 * @param {src} src Markdown file source. Example: `https://pages.com/markdown.md`
 * @returns 
 */
export const RemoteMarkdown = ({source}) => {
    const [content, setContent] = useState(null);

    useEffect(()=> {
        fetch(source)
            .then((res) => res.text())
            .then((content)=> markdownToHtml2(content))
            .then((compiledHtml) => setContent(compiledHtml));
    }, []);

    return (
        <Markdown content={content}/>
    );
}