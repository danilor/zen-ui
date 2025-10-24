import hljs from 'highlight.js';

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function CodeExample({children, type='tsx'}: any) {
  const highlightedCode = hljs.highlight(
    children,
    { language: type }
  ).value

  return (
    <pre>
      <code className={'code'} dangerouslySetInnerHTML={{ __html: highlightedCode }}></code>
    </pre>
  );
}
