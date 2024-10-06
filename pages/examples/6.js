import { RemoteMarkdown } from "@components/application/markdown/RemoteMarkdown";

/**
 * This example shows how to use Remote markdown to render markdown files from a URL source
 * @returns 
 */
export default function UsingRemoteMarkdown() {
    return <RemoteMarkdown source="/docs/document.md"/>;
}