import client from "../../../lib/prisma";
import { getSession } from "next-auth/react";

export default async function handle(req, res) {
    const session = getSession({ req });
    if (session?.user?.email !== "airmancho@naver.com") {
        res.status(403).json({message: "Not Allowed"});
    }
    const postId = req.query.id;
    if (req.method === "DELETE") {
        const post = await client.post.delete({
            where: {
                id: Number(postId)
            }
        });
        res.json(post);
    } else if (req.method === "PUT") {
        const updatedPost = await client.post.update({
            where: {
                id: Number(postId)
            },
            data: {
                title: req.query.title,
                content: req.query.content,
                tag: req.query.tag
            }
        });
        res.json(updatedPost);
    } 
    else {
        throw new TypeError(
            `${req.method} is Not Allowed!`
        )
    }
}