import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";
import client from "../../../lib/prisma";

const authHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

const options = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
    ],
    adapter: PrismaAdapter(client),
    secret: process.env.SECRET
}