import { getDocByPath } from "@util/docs";
import Markdown from "react-markdown";


export function getStaticProps() {
    const content = getDocByPath("/docs/document.md");
    return { props: { content } }
  }

export default function WithTailWind({content}){
    return (
        <Markdown
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