import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";

function useOutsideClickDetect(ref) {
    useEffect(() => {
        const handleClickOutisde = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
            }
        }
        document.addEventListener("mousedown", handleClickOutisde);
        return () => {
            document.removeEventListener("mousedown", handleClickOutisde);
        }
    }, [ref]);
}


function SearchResult({ id, title, content }) {
    let previewedContent = content.replace(/[#-`*]/g,"");
    const router = useRouter();
    const onClick = (event) => {
        router.push(`posts/${id}`);
    };
    return (
        <div className="content" onClick={onClick}>
            <div className="title">
                {title.length > 15 ? title.substr(0, 15).concat(' ...') : title}
            </div>
            <div className="content">
                {content.length > 63 ? previewedContent.substr(0, 15).concat(' ...') : previewedContent}
            </div>
            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;
                    padding: 20px;
                    cursor: pointer;
                    max-width: 200px;
                    word-break: break-all;
                    border-radius: 4px;
                    border: 1px solid #e6e6e6;
                    box-shadow: 1px  3px 1.3px rgb(219, 219, 219);
                    margin: 10px;
                }
                .title {
                    font-size: 16px;
                    padding-bottom: 10px;
                }
            `}</style>
        </div>
    )
}



export default function SearchBox() {
    const [keyword, setKeyword] = useState("");
    const ref = useRef(null);
    useOutsideClickDetect(ref);

    const onChange = (event) => {
        setKeyword(event.target.value);
    }
    return (
        <div>
            <FontAwesomeIcon 
                icon={faSearch} 
                style={{ padding: "12px 0", marginRight: "5px", width: "14px" }}
                />
            <input
                onChange={onChange}
            />
            <style jsx>{`
                div {
                    border-bottom: 1px solid #000000;
                    display: flex;
                    min-width: 150px;
                    width: 268px;
                    height: 36px;
                    justify-content: center;
                    flex: 0 1 auto;
                }
                input {
                    padding: 3px 16px;
                    width: 100%;
                    border-radius: 8px;
                    border: 0;
                }
                div:hover{
                    border-bottom: 2px solid #262626;
                }
            `}</style>
        </div>
    );
}