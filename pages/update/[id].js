import client from "../../lib/prisma"
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import styles from '../../components/FormComponent/FormComponent.module.css'
import { useEffect } from "react";
export const getServerSideProps = async({ params }) => {
    let post = await client.post.findUnique({
        where: {
            id: Number(params?.id) || -1
        }
    });
    let author;
    try {
        author = await client.user.findUnique({
            where: {
                id: post.authorId
            }
        });
        post.author = author.name;
    } catch {
        post.author = '조병근';
    }
    post.createdAt = Math.floor(post.createdAt);
    post.updatedAt = Math.floor(post.updatedAt);
    
    return {
        props: post
    }
}

export default function Update({ id, title, content, tag }) {
    const { register, getValues, formState, resetField, setError, setValue } = useForm({
        mode: "onChange"
    });
    useEffect(() => {
        if (title && content && tag) {
            setValue("title", title);
            setValue("content", content);
            setValue("tag", tag);
        }
    }, []);
    const router = useRouter();
    let submitError = null;
    const onSubmit = async (event) => {
        event.preventDefault();
        const { title, content, tag } = getValues();
        try {
            const body = { id, title, content, tag };
            await fetch(`/api/post/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            router.push('/');
        } catch (error) {
            submitError = (<span className={[styles.span, styles.error]}>{error}</span>);
        }
    }
    let titleError = formState?.errors?.title?.message !== undefined ? <span className={[styles.span, styles.error]}>{formState?.errors?.title?.message}</span> : null;
    let contentError = formState?.errors?.content?.message !== undefined ? <span className={[styles.span, styles.error]}>{formState?.errors?.content?.message}</span> : null;
    return (
        <main>
            <div className={styles.title}>Upload</div>
            <form className={styles.form} onSubmit={onSubmit}>
                <span className={styles.span}>Title</span>
                <input 
                    className="title"
                    placeholder="Title"
                    {
                        ...register('title', {
                            required: "Title is required."
                        })
                    }    
                    type="text"
                />
                {titleError}
                <span className={styles.span}>Content</span>
                <textarea
                    placeholder="Content"
                    {
                        ...register('content', {
                            required: "Content is required."
                        })
                    }
                ></textarea>
                
                {contentError}
                <span className={styles.span}>Tags</span>
                <input 
                    className="optional"
                    placeholder="Tags"
                    {
                        ...register('tag', {
                            required: false
                        })
                    }
                />
                <button 
                    className={styles.button}
                    disabled={!formState.isValid}
                >SUBMIT</button>
                {submitError}
            </form>
            <style jsx>{`
                main {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 60px;
                    height: 100%;
                    width: 100%;
                    min-height: 100vh;
                }
                input.title {
                    width: 100%;
                    max-width: 600px;
                    height: 40px;
                    padding: 5px 10px;
                    font-size: 25px;
                    padding-right: 0;
                    font-family: 'Gothic A1', sans-serif;
                    border-radius: 4px;
                }
                textarea {
                    width: 100%;
                    max-width: 600px;
                    height: 400px;
                    resize: none;
                    padding: 10px;
                    padding-right: 0;
                    border-radius: 4px; 
                    font-family: 'Gothic A1', sans-serif;  
                }
                div.wrapper {
                    display: flex;
                    justify-content: center;
                }
                div.optional_wrapper {
                    display: flex;
                    flex-direction: column;
                }
                input.optional {
                    display: inline-block;
                    font-family: 'Gothic A1', sans-serif;
                    font-size: 20px;
                    padding-top: 1px;
                    width: 100%;
                }
            
            
            `}</style>
        </main>
    )
}