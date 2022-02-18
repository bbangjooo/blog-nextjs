export default function MetaWrapper({ tag, updatedAt, author }) {
    return (
        <div className="container">
            <div className="tagWrapper">
                {tag === [""] ? <span className="tag">No Tags</span> : tag.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                ))}
            </div>
            <div className="dateWriterWrapper">
                <span className="dateWrapper">
                    <img
                        src="/calendar.svg"
                    />
                </span>
                <span>{updatedAt}</span>
                
                <span className="writerWrapper">
                    <img
                        src="/user.svg"
                        style={{ paddingTop: "1px" }}
                    />
                </span>
                <span>{author}</span>
                
            </div>
            <style jsx>{`
                div {
                    font-family: 'Do Hyeon', sans-serif;
                    font-size: 16px;
                }
                span {
                    display: inline-block;
                    vertical-align: middle;
                    padding-top: 5px;
                }
                img {
                    max-width: 15px;
                    margin: 0 4px;
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
                    border: 1px solid rgb(219, 219, 219);
                    border-radius: 20px;
                    background-color: rgb(219, 219, 219);
                    padding: 4px 8px 3px 8px;
                    margin-right: 5px;
                }
                .dateWriterWrapper {
                    display: flex;
                    justify-content: flex-end;
                }
                .dateWrapper {
                    width: 20px;
                    margin-right: 4px;
                }
                .writerWrapper {
                }
            `}</style>
        </div>
    )
}