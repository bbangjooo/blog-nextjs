import Footer from "./Footer";
import Header from "./Header/Header";

export default function Layout({ children }) {
    return (
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
    )
}