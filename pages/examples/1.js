import { getDocByPath } from "@util/docs";
import Markdown from "react-markdown";


export function getStaticProps() {
    const content = getDocByPath("/docs/document.md");
    return { props: { content } }
  }

export default function Barebones({content}){
    return (
        <Markdown
            className=""
        >
            {content}
        </Markdown>
    );
}