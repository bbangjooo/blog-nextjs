import HeadComponent from "../components/HeadComponent";
import remarkGfm from "remark-gfm";
import Markdown from "../components/Markdown";
import Image from "next/image";
import styles from "../components/PageCSS/about.module.css";
import { NextSeo } from "next-seo";
const markdown = `
# \`$ whoami\`


## 프로필

![image](https://user-images.githubusercontent.com/51329156/152125397-9e5b915b-9394-41de-bdc1-0929ccf86b0a.png)

### 조병근, 24살 남자 🧑
소속: 고려대학교 사이버국방학과

MBTI: ENFP

주량: 1병

## 들어가기 전에

아래는 제 가치관과 프로젝트 구상 그리고 팀 구상에 대해 끄적여 놓은 글이에요. 프로젝트 주제가 달라도, 팀원상이 같다면 언제든 같은 팀을 할 수 있다고 생각해요. 혹시 아래 프로젝트 내용이 마음에 안 들어도, 가치관과 팀원상이 맞다면 언제든 연락주세요.😀

그리고, 소마에 관해서든 다른 공부에 관해서든 어떤 이유이든 연락하고 싶으실 땐 편하게 연락해주세요 :)

그런 의미에서 연락처를 먼저 적어드리고, 글을 시작할게요.

### 연락처

📞 010-6310-4225

✉ airmancho@gmail.com

Instagram: bbangjo___

## 가치관

### 🔨 기술은 도구로써 공부해야 한다

제가 소마 사람들을 만나며 가장 많이 했던 말입니다. 이 한 마디가 제 생각을 가장 잘 표현해준다고 생각합니다. 하지만 저를 포함한 대부분의 공학도분들이 **기술 그 자체를 목적**으로 두고 공부하시는 걸 보고 이 생각을 공유하면 좋을 것 같아 SW마에스트로에 지원하게 되었습니다.

### 🙏 겸손

저는 '자기 겸손'이 저의 최대 장점이라 생각합니다. 대학교에 들어오고 뛰어난 학우분들을 만나며, 세상엔 배울 점이 많다는 것을 알게 된 후 저를 낮추고 세상을 바라보기 시작했습니다. 뚜렷한 가치관을 가지고 동시에 마음을 열고 배울 점을 찾다 보니, 저도 모르는 새에 실력이 훌쩍 성장한 것 같습니다.

이런 겸손한 자세는 저를 있는 그대로 볼 수 있게 해주었고 결국 모든 생각은 '배우면 되는구나'로 귀결되었습니다. 첫 직장을 가질 당시에도 '내가 이 일을 잘 할 수 있을까?'로 시작해서 '나 배우니 할 수 있잖아?'로 끝났고, 제가 원래 하던 해킹 공부도 '내가 더 잘해질 수 있을까?'로부터 현재는 CyKor라는 해킹 동아리에서 Web 해킹 분야에 주력 멤버로 활동하고 있습니다.

### 📈 DFS (Depth First Search)

제가 공부하는 스타일입니다. 저는 궁금증을 해결하기 위해 **dive into** 하는 것을 매우 좋아합니다. Nodejs에 관심이 많으신 분은 [About JS runtime](https://medium.com/@airmancho_66895/nodejs-browser-javascript-runtime-javascript-engine-부수기-d7d7b1f6e999), [About Nodejs top-level scope & How \`node our.js\` works (which is following Commonjs Spec)](https://medium.com/@airmancho_66895/nodejs-top-level-scope-global-a55c54ea6073) 을 읽어보시면 이 말에 이해가 되실 것 같습니다 🤣

## 프로젝트 구상

### 🛵배달 플랫폼(배달의 민족, ...) 의 폐해

과거 전단을 사용하던 때와 달리 지금은 배달의 민족, 요기요, 쿠팡이츠 등 한정된 플랫폼에서 모든 배달음식을 주문합니다. 이는 사용자에게 큰 편의를 가져다 줌과 동시에 자영업자분들과 사용자에게 큰 비용을 부담하게 했습니다. 제 지인 부모님께서 실제 자영업을 하시는데, 밀가루 장사가 마진이 많이 남는다는 말도 다 옛말이라고 합니다. ...(더 읽고 싶으시면 연락처로 연락부탁드립니다 😋)

### 📃 Markdown with Editor

개발자분들은 마크다운 언어로 블로그를 써보신 적이 많을 거라 생각합니다. 지금 이 블로그도 마크다운으로 써지고 있습니다. 그러다보면 중간에 코드 블럭을 삽입할 일이 많은데, 저희가 평소 코드를 사용하는 환경인 VS Code에서의 자동완성같은 기능이 없다보니 불편함을 많이 겪었습니다. ...(더 읽고 싶으시면 연락처로 연락부탁드립니다 😋)

## 팀 구상

### 💥 먼저, 열정

6개월동안 팀원 3명이서 문제를 해결하게 됩니다. 3명의 CEO가 되어 문제를 해결하는 사람들을 찾고 싶습니다. 또한 그런 사람들을 찾고 계신다면, 제가 그런 사람입니다. 사실 아이디어를 내고, 해결방법을 찾아나가는 과정은 정신적으로 상당히 고통스러울 수 있습니다. 하지만, 너무 쉬운 건 재미없죠. 저랑 함께 머리를 쥐어 짜내고 싶으신 분 환영입니다!🤣

### ❤ 성격

아무리 목표가 비슷하고, 좋은 주제라도 성격이 맞지 않는 팀은 안 좋은 팀이라고 생각합니다. 저는 팀원이기 전에 **친구**가 되었으면 합니다. 6개월 동안만이 아니라, 소마가 끝나고도 편하게 술자리에서 만날 수 있는 그런 친구가 되실 분 환영입니다!

### 🤔 실력?

위에서도 말씀드렷 듯, 기술은 도구로써 공부해야 합니다. 그래서인지 저는 실력이 크게 중요하다고는 생각하지 않습니다. 저도 이 블로그를 만드는데 Nextjs를 새로 공부해야 했는데 단 하루만에 공부할 수 있었습니다. 부족한 점은 멘토링, 개인 공부를 통해 충분히 채울 수 있습니다. 저와 함께 공부하고 성장하실 팀원분들도 환영입니다!

### 😆 놀이

위의 세 가지 요소가 바라는 팀원의 상이었다면, 이건 바라는 '팀'의 모습입니다. 6개월동안 힘든 여정을 함께 할 친구들이기 때문에 중간에 함께 쉬고, 노는 과정도 힘든 여행 중 일부라고 생각합니다. 참고로 어른들의 놀이인 술 좋아합니다! 언제든 찾아주세요 ㅋㅋ😆

## 🛠 기술

### Front-end

**React 라이브러리, Nextjs 프레임워크**: 지금 보고 계신 블로그는 Version 2로 Nextjs로 만들어져 있는데, Version 1은 React를 이용해서 만들어졌습니다.

### Back-end

제 [포스트](https://blog.bbangjo.kr/posts/3),와 [medium](https://medium.com/@airmancho_66895/nodejs-browser-javascript-runtime-javascript-engine-%EB%B6%80%EC%88%98%EA%B8%B0-d7d7b1f6e999)에서 보실 수 있듯, 저는 Nodejs에 관심이 많습니다. 게다가 보안 커뮤니티에 오래 속해 있었기 때문에 Back-end의 대부분의 언어는 접해본 적이 있습니다. 그래서 혹시 Java로 쓰인 프레임워크를 사용하실 계획이시더라도 빠른 시일 내에 익힐 자신이 있습니다.

### 여담

저는 한 언어와 런타임에 대해 매우 깊게 공부해 본 적이 있기 때문에 다른 언어를 접하는 데에 전혀 무리가 없을 거라 생각하고 있습니다. **개발은 도구로써 공부**해야 한다는 생각도 이로부터 나온 게 아닐까요??



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
                <HeadComponent title={"Introduce"} />
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
                        line-height: 2rem;
                    }
                    
                `}</style>
            </div>
        </>
    );
}