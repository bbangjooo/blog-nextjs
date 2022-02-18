import { getSession } from "next-auth/react";
import client from "../../../lib/prisma";

export default async function handle(req, res) {
    const session = await getSession({ req });
    if (session?.user?.email !== "airmancho@naver.com") {
        res.status(403).json({message: "Not Allowed"});
    }
    const { title, content, tag, author } = req.body;
    const result = await client.post.create({
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
    res.json(result);
}