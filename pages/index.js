import { NextSeo } from "next-seo";
import HeadComponent from "../components/HeadComponent";
import PostCard from "../components/PostCard/PostCard";
import client from "../lib/prisma";
export const getStaticProps = async () => {
  let feed = await client.post.findMany({
    orderBy: [
      {
        updatedAt: 'desc'
      }
    ]
  });
  await Promise.all(feed.map(async post => {
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
    return post;
  }));
  return { 
    props: { feed }
  };
}


export default function Home({ feed }) {
  return (
    <>
      <NextSeo
        title="bbangjo blog"
        description="blog of bbangjo v2022"
      />
      <div className="container">
        <HeadComponent title={"Home"} />
        {feed?.map(({id, title, content, tag, author, updatedAt}) => {
          tag = tag.split(',');
          return (<PostCard
            key={id}
            {
              ...
              {
                id,
                title,
                content,
                tag,
                author,
                updatedAt
              }
            }
          />);
          })
        }
        <style jsx>{`
          .container {
            display: flex;
            flex-direction: column;
            max-width: 975px;
            align-items: center;
            width: 100%;
            gap: 5px;
            padding: 20px;
            margin-top: 60px;
          }
        `}</style>
      </div>
    </>
  );
}
