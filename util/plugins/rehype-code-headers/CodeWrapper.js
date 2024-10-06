/**
 * A JSX component implementation of the Code Headers. 
 * Use this instead if the rehype plugin clashes with React's hydration
 */
export const CodeWrapper = () => {
    <div
        className="code-block"
    >
        <div
            className="code-block-title"
        >
            <span
                className="code-block-title-language"
            >
                Label
            </span>
                <button 
                    className="code-block-title-button"
                onclick="
                const parent = this.closest('.code-block-root');
                const codeBlock = parent.querySelector('code')
                navigator.clipboard.writeText(codeBlock.textContent);">
                        {/* Icon Here  */}
                </button>;
        </div>
        <div
            className="code-block-body"
        >
            <pre>
                <code>
                    need to copy here
                </code>
            </pre>
        </div>
    </div>
}