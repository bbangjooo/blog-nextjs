import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { style } from 'react-syntax-highlighter/dist/esm/styles/prism';
export default function Markdown({markdown, remarkPlugins, components}) {
    console.log("hi");
    for (const props in style) {
      console.log(props, style[props]);
      style[props]['fontFamily'] = "'Fira Code', " + style[props]['fontFamily'];
      if (style[props]['background'] === "hsla(0, 0%, 100%, .5)") {
        style[props]['background'] = '';
      }
    }  
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
                      style={style}
                      customStyle={{paddingLeft: "30px", borderRadius: "6px"}}
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
                        fontFamily: "Fira Code",
                        wordBreak: "break-all"
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