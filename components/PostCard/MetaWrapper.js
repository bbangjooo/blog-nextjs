import Image from "next/image"
import styles from "./Meta.module.css";
export default function MetaWrapper({ tag, updatedAt, author }) {
    return (
        <div className="container">
            <div className="tagWrapper">
                {tag === [""] ? <span className="tag">No Tags</span> : tag.map((t, idx) => {
                    <span key={idx} className="tag">{'#' + t.trim()}</span>
                })}
            </div>
            <div className="dateWriterWrapper">
                <span className="dateWrapper">
                    <Image
                        layout="fixed"
                        width="15px"
                        height="15px"
                        src="/calendar.svg"
                        alt="calendar"
                        className={styles.icon}
                    />
                </span>
                <span className="metaspan">{updatedAt}</span>
                
                <span className="writerWrapper">
                    <Image
                        layout="fixed"
                        width="15px"
                        height="15px"
                        src="/user.svg"
                        alt="user"
                        className={styles.icon}
                    />
                </span>
                <span className="metaspan">{author}</span>
                
            </div>
            <style jsx>{`
                div {
                    font-family: 'Do Hyeon', sans-serif;
                    font-size: 16px;
                }
                span {
                    display: inline-block;
                    vertical-align: middle;
                    padding-top: 4px;
                }
                .container {
                    display: flex;
                    justify-content: space-between;
                    font-size: 16px;
                }
                .tagWrapper {
                    font-size: 15px;
                }
                .tag {
                    padding: 3px 0;
                    font-style: italic;
                    margin-right: 5px;
                }
                .dateWriterWrapper {
                    display: flex;
                    justify-content: flex-end;
                }
                .dateWrapper {
                    padding-top: 5px;
                    margin:0 2px;
                }
                .writerWrapper {
                    padding-top: 5px;
                    margin-left: 4px;
                }
                .metaspan {
                    margin-left: 3px;
                }
            `}</style>
        </div>
    )
}