import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import styles from '../components/FormComponent/FormComponent.module.css';
export default function Upload() {
    const { register, getValues, formState, resetField, setError } = useForm({
        mode: "onChange"
    });
    const router = useRouter();
    let submitError = null;
    const onSubmit = async (event) => {
        event.preventDefault();
        const { title, content, tag, author } = getValues();
        try {
            const body = { title, content, tag, author };
            await fetch('/api/post', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            router.push('/');
        } catch (error) {
            submitError = (<span className={styles.span, styles.error}>{error}</span>);
        }
    }
    let titleError = formState?.errors?.title?.message !== undefined ? <span className={styles.span, styles.error}>{formState?.errors?.title?.message}</span> : null;
    let contentError = formState?.errors?.content?.message !== undefined ? <span className={styles.span, styles.error}>{formState?.errors?.content?.message}</span> : null;
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