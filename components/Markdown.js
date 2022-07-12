import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
export default function Markdown({markdown, remarkPlugins, components}) {
    return (
        <ReactMarkdown
            st
            remarkPlugins={remarkPlugins}
            components={{
                code({node, inline, className, children, ...props}) {
                  const match = /language-(\w+)/.exec(className || '')
                  return !inline && match ? (
                    <SyntaxHighlighter
                      language={match[1]}
                      PreTag="div"
                      customStyle={{paddingLeft: "30px", borderRadius: "6px", fontFamily: "Fira Code"}}
                      {...props}
                    >{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
                  ) : (
                    <code 
                      style={{
                        background: "rgb(52,57,66)",
                        padding: "0.2em 0.4em",
                        fontSize: "85%",
                        borderRadius: "6px",
                        color: "white",
                        fontFamily: "Fira Code"
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
        >{markdown}</ReactMarkdown>
    )
}