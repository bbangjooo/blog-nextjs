import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vsDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
export default function Markdown({markdown, remarkPlugins, components}) {
    return (
        <ReactMarkdown
            st
            children={markdown}
            remarkPlugins={remarkPlugins}
            components={{
                code({node, inline, className, children, ...props}) {
                  const match = /language-(\w+)/.exec(className || '')
                  return !inline && match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, '')}
                      language={match[1]}
                      PreTag="div"
                      style={vsDark}
                      customStyle={{paddingLeft: "30px", borderRadius: "6px"}}
                      {...props}
                    />
                  ) : (
                    <code 
                      style={{
                        background: "rgb(52,57,66)",
                        padding: "0.2em 0.4em",
                        fontSize: "85%",
                        borderRadius: "6px",
                        color: "white"
                      }}  
                      className={className} 
                      {...props}>
                      {children}
                    </code>
                  )
                },
                a: ({node, ...props}) => <a style={{ color: "rgb(61,132,246)" }} {...props}></a>,
                ...components
              }}
        />
    )
}