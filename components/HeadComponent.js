import Head from "next/head";

export default function HeadComponent({ title }) {
    return(
        <Head>
            <title> {title === undefined ? "bbangjo's blog" : `${title} | bbangjo's blog`}</title>
        </Head>
    )
}