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
        const { postId } = getValues();
        try {
            await fetch(`/api/post/${postId}`, {
                method: 'DELETE'
            });
            router.push('/');
        } catch (error) {
            submitError = (<span className={styles.span, styles.error}>{error}</span>);
        }
    }
    let IdError = formState?.errors?.postId?.message !== undefined ? <span className={styles.span, styles.error}>{formState?.errors?.postId?.message}</span> : null;
    return (
        <main>
            <div className={styles.title}>Delete</div>
            <form className={styles.form} onSubmit={onSubmit}>
                <span className={styles.span}>POST ID</span>
                <input 
                    className="title"
                    placeholder="Post ID"
                    {
                        ...register('postId', {
                            required: "ID is required."
                        })
                    }    
                    type="text"
                />
                {IdError}
                
                <button 
                    className={styles.button}
                    disabled={!formState.isValid}
                >
                    SUBMIT
                </button>
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