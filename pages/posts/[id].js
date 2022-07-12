import codeblocks  from "remark-code-blocks";
import remarkGfm from "remark-gfm";
import Markdown from "../../components/Markdown";
import MetaWrapper from "../../components/PostCard/MetaWrapper";
import client from "../../lib/prisma";
import styles from "../../components/PageCSS/posts.module.css"
import Image from "next/image";
import { NextSeo } from "next-seo";
import { useEffect } from "react";
export const getServerSideProps = async ({ params }) => {
    let post = await client.post.findUnique({
        where: {
            id: Number(params?.id) || -1
        }
    });
    let author;
    try {
        author = await client.user.findUnique({
            where: {
            id: post.authorId
            }
        });
        post.author = author.name;
    } catch {
      post.author = "조병근";
    }
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
            const metaWidth = image.properties.alt.match(/{([^}]+)x/)
            const metaHeight = image.properties.alt.match(/x([^}]+)}/)
            const width = metaWidth ? metaWidth[1] : "300px"
            const height = metaHeight ? metaHeight[1] : "300px"
            return (
                <div className="wrap">
                    <Image
                        src={image.properties.src}
                        alt={image.properties.alt}
                        width={width}
                        height={height}
                        layout="fixed"
                        placeholder="blur"
                        blurDataURL={image.properties.src}
                        className={styles.image}
                    />
                    <style jsx>{`
                        .wrap {
                            display: flex;
                            justify-content: center;
                            padding: 5px 0;
                        }
                    `}</style>
                </div>
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

const FooterMarkdown = `
#
---
Thank you for reading. 😁

Feel free to contact for any questions or discussion
- **Github**: [https://github.com/bbangjooo](https://github.com/bbangjooo)
- **Mail**: airmancho@gmail.com
`;


export default function Post({ title, content, author, tag, updatedAt }) {
    useEffect(() => {
        const onscroll = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height)  * 52;
            if (document.getElementsByClassName('progress-bar')[0])
                document.getElementsByClassName('progress-bar')[0].style.width = scrolled + "%";
        };
        window.addEventListener('scroll', onscroll);
        return function cleanup() {
            window.removeEventListener('scroll', onscroll);
        }
    }, []);
    return (
        <>
            <NextSeo
                title={title}
                description={`${title} - ${author} :: ${tag}`}
            />
            <div className="wrapper">
                <div className="progress-bar"></div>
                <main>
                    <div className="title">{title}</div>
                    <MetaWrapper
                        tag={tag.split(',')}
                        updatedAt={new Date(updatedAt).toISOString().substring(0,7)}
                        author={author}
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
                    .wrapper {
                        width: 975px;
                        margin: 0;
                        padding: 0;
                    }
                    main {
                        display: flex;
                        font-family: 'NanumSquare', 'Nanum Myeongjo', serif;
                        flex-direction: column;
                        margin: 100px auto;
                        width: 100%;
                        height: 100%;
                        line-height: 2rem;
                        max-width: 750px;
                        font-size: 15px;
                    }
                    .progress-bar {
                        position: fixed;
                        top: 60px;
                        max-width: 975px;
                        height: 5px;
                        margin: 0;
                        background-color: #d6d6d6;
                        border-radius: 4px;
                        transition: all 0.1s linear;
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
        </>
    );
}