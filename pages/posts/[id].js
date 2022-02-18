import codeblocks  from "remark-code-blocks";
import remarkGfm from "remark-gfm";
import Fonts from "../../components/Fonts";
import Markdown from "../../components/Markdown";
import MetaWrapper from "../../components/PostCard/MetaWrapper";
import client from "../../lib/prisma";
export const getServerSideProps = async ({ params }) => {
    let post = await client.post.findUnique({
        where: {
            id: Number(params?.id) || -1
        }
    });
    post.createdAt = Math.floor(post.createdAt);
    post.updatedAt = Math.floor(post.updatedAt);
    return {
        props: post
    };
}

const customComponents = {
    p: paragraph => {
        const { node } = paragraph

        if (node.children[0].tagName === "img") {
            const image = node.children[0]
            return (
                <img
                    src={image.properties.src}
                    style={{ display: "block", margin: "0 auto", maxWidth: "400px", maxHeight: "400px" }}
                    alt={image.properties.alt}
                />
            );
        }
        return <p>{paragraph.children}</p>
    },
    hr: () => (
        <hr
            style={{ width: "100%", color: "#e6e6e6"}}
        />
    )
}

const MainMarkdown = `
# H1
## H2
### H3

- l1
- l2

1. 1
2. 2

\`\`\`js

console.log(1)

\`\`\`

![image](https://user-images.githubusercontent.com/51329156/152125397-9e5b915b-9394-41de-bdc1-0929ccf86b0a.png)


`

const FooterMarkdown = `
#
---
Thank you for reading. 😁

Feel free to contact for any questions or discussion
- **Github**: [https://github.com/bbangjooo](https://github.com/bbangjooo)
- **Mail**: airmancho@gmail.com
`;


export default function Post({ id, title, content, writer, tag, updatedAt }) {
    return (
        <div>
            <Fonts/>
            <main>
                <div className="title">{title}</div>
                <MetaWrapper
                    tag={tag.split(',')}
                    updatedAt={new Date(updatedAt).toISOString().substring(0,7)}
                    writer={writer}
                />
                <Markdown
                    markdown={"#\n" + content}
                    remarkPlugins={[remarkGfm, codeblocks]}
                    components={customComponents}
                />
                <Markdown
                    markdown={FooterMarkdown}
                    remarkPlugins={[remarkGfm]}
                    components={customComponents}
                />
            </main>
            <style jsx>{`

                main {
                    display: flex;
                    font-family: 'Nanum Myeongjo', serif;
                    flex-direction: column;
                    margin: 60px auto;
                    width: 100%;
                    height: 100%;
                    max-width: 700px;
                }
                .title {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-family: 'Ubuntu', sans-serif;
                    font-weight: 600;
                    word-break: break-all;
                    font-size: 30px;
                    padding-bottom: 30px;
                }
            
            `}</style>
        </div>
    );
}