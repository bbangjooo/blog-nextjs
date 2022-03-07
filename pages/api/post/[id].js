import client from "../../../lib/prisma";
import { getSession } from "next-auth/react";

export default async function handle(req, res) {
    const session = await getSession({ req });
    if (session?.user?.email !== "airmancho@naver.com") {
        return res.status(403).json({message: session?.user});
    }
    const postId = req.query.id;
    if (req.method === "DELETE") {
        const post = await client.post.delete({
            where: {
                id: Number(postId)
            }
        });
        return res.json(post);
    } else if (req.method === "PUT") {
        const { title, content, tag } = req.body;
        const updatedPost = await client.post.update({
            where: {
                id: Number(postId)
            },
            data: {
                title,
                content,
                tag,
                author: {
                    connect: {
                        email: session?.user?.email
                    }
                }
            }
        });
        return res.json(updatedPost);
    } 
    else {
        throw new TypeError(
            `${req.method} is Not Allowed!`
        )
    }
}