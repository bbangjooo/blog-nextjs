import { DefaultSeo } from "next-seo";
import Footer from "./Footer";
import Header from "./Header/Header";

export default function Layout({ children }) {
    return (
        <>
        <DefaultSeo
            additionalLinkTags={[
                {
                    rel: 'icon',
                    href: "/favicon.ico"
                }
            ]}
            additionalMetaTags={[
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                }
            ]}
        />
        <div className="container">
            <Header/>
            <div>{children}</div>
            <Footer/>
            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;
                    height: max-content;
                    min-height: 100vh;
                }
                .container > div {
                    flex: 1;
                }
            `}</style>
        </div>
        </>
    )
}