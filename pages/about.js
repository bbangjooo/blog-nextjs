import HeadComponent from "../components/HeadComponent";
import remarkGfm from "remark-gfm";
import Markdown from "../components/Markdown";
import Image from "next/image";
import styles from "../components/PageCSS/about.module.css";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
const markdown = `
# \`$ whoami\`

![image](https://user-images.githubusercontent.com/51329156/152125397-9e5b915b-9394-41de-bdc1-0929ccf86b0a.png)


## Name

Jo Byeonggeun, bbangjo

## Education

Korea University, CyKor

## Interest

- Web security

- Web develop

- JS internal

- Thinking **why?**

## Medium-Stories

- [About JS runtime(mainly JS Engine, v8)](https://medium.com/@airmancho_66895/nodejs-browser-javascript-runtime-javascript-engine-%EB%B6%80%EC%88%98%EA%B8%B0-d7d7b1f6e999)

- [About Nodejs top-level scope & How \`node our.js\` works (which is following Commonjs Spec)](https://medium.com/@airmancho_66895/nodejs-top-level-scope-global-a55c54ea6073)

## Contact
- Github: https://github.com/bbangjooo

- Mail: airmancho@gmail.com

`;

const customComponents = {
    p: paragraph => {
        const { node } = paragraph

        if (node.children[0].tagName === "img") {
            const image = node.children[0]
            return (
                    <Image
                        src={image.properties.src}
                        layout="fixed"
                        width="200px"
                        height="200px"
                        placeholder="blur"
                        blurDataURL={image.properties.src}
                        className={styles.image}
                        alt={image.properties.alt}
                    />
            );
        }
        return <p>{paragraph.children}</p>
    },
}


export default function About() {
    return (
        <>
            <NextSeo
                title="About bbangjo"
                description="about bbangjo"
            />
            <div>
                <HeadComponent title={"About"} />
                <main>
                    <Markdown
                        markdown={markdown}
                        remarkPlugins={[remarkGfm]}
                        components={customComponents}
                    />
                </main>
                <style jsx>{`
                    main {
                        font-family: 'Nanum Myeongjo', serif;
                        display: flex;
                        flex-direction: column;
                        flex: 1;
                        margin: 100px auto;
                        width: 100%;
                        height: 100%;
                        max-width: 750px;
                        padding-bottom: 30px;
                    }
                `}</style>
            </div>
        </>
    );
}