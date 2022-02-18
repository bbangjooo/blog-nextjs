import client from "../../../lib/prisma";
import { getSession } from "next-auth/react";

export default async function (req, res) {
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
    } else {
        throw new TypeError(
            `${req.method} is Not Allowed!`
        )
    }
}