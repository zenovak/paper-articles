import { getDocByPath } from "@util/docs";
import Markdown from "react-markdown";


export function getStaticProps() {
    const content = getDocByPath("/docs/document.md");
    return { props: { content } }
  }

export default function WithTailWind({content}){
    return (
        <Markdown
            className=" max-w-7xl mx-auto prose lg:prose-lg"
        >
            {content}
        </Markdown>
    );
}