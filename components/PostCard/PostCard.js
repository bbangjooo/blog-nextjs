import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import MetaWrapper from "./MetaWrapper"
import { useRouter } from "next/router"
export default function ({id, title, content, updatedAt, author, tag}) {
    const router = useRouter();
    const previewedContent = content.replace(/[#*`-]/g, '');
    const onClick = (id) => {
        router.push(`/posts/${id}`);
    }
    return (
        <div 
            className="container"
            onClick={() => onClick(id)}
        >
            <div className="header">
                <div className="title">{title}</div>
                <MetaWrapper
                    tag={tag}
                    updatedAt={new Date(updatedAt).toISOString().substring(0,7)}
                    author={author}
                />
            </div>
            <div className="body">
                <div>{previewedContent.substr(0,62)}</div>
                <FontAwesomeIcon
                    icon={faAngleDoubleRight}
                    style={{ maxWidth: "15px" }}
                />
            </div>
            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;
                    max-width: 720px;
                    width: 100%;
                    max-height: 250px;
                    margin-bottom: 20px;
                    border: 2px solid rgb(219, 219, 219);
                    border-radius: 10px;
                    transition: 0.2s ease-in-out;
                    font-family: 'Do Hyeon', sans-serif;
                }
                .container:hover {
                    cursor: pointer;
                    transform: scale(1.01) translateY(-1px);
                    box-shadow: 3px  3px 1.3px rgb(219, 219, 219);
                }
                .header {
                    height: 100%;
                    padding: 20px 17px 15px 17px;
                    border-bottom: 1px solid black;
                    flex-direction: column;
                }
                .title {
                    font-size: 30px;
                    margin-bottom: 30px;
                }
                .body {
                    display: flex;
                    justify-content: space-between;
                    height: 100%;
                    padding: 11px 17px;
                    font-size: 20px;
                }
            
            `}</style>
        </div>
    )
}