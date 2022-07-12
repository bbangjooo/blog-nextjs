
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
export default function Header() {
    const router = useRouter();
    const isActive = (pathname) => (router.pathname === pathname);
    const buttonStyle = `
    .button {
        align-items: center;
        background-color: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: .25rem;
        box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
        box-sizing: border-box;
        color: rgba(0, 0, 0, 0.85);
        display: inline-flex;
        cursor: pointer;
        font-family: 'Bungee', cursive;
        font-size: 20px;
        font-weight: 600;
        justify-content: center;
        line-height: 1.25;
        margin: 0;
        min-height: 3rem;
        padding: calc(.875rem - 3px) calc(1.5rem - 1px);
        position: relative;
        text-decoration: none;
        transition: all 250ms;
        touch-action: manipulation;
        vertical-align: baseline;
        width: auto;
    }

    .button:hover,
    .button:focus {
        border-color: rgba(0, 0, 0, 0.15);
        box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
        color: rgba(0, 0, 0, 0.65);
    }
    .button:hover {
    transform: translateY(-1px);
    }`;
    const { data: session, status } = useSession();
    let right = null;
    if (status === "loading") {
        right = "Validate Sessions...";
    }
    if (!session) {
        right = (
            <>
                <Link href="/api/auth/signin" passHref>
                    <button className="button">
                        <a data-active={isActive('/api/auth/signin')}>Log in</a>
                    </button>
                </Link>
                <style jsx>{buttonStyle}</style>
            </>
        );
    }
    if (session) {
        right = (
            <button className="button" onClick={()=>signOut()}>
                <a>Log out</a>
                <style jsx>{buttonStyle}</style>
            </button>
        );
    }
    return (
        <nav>
            <div className="wrapper">
                <div className="col">
                    <Image 
                        src="/at2.svg"
                        alt="at"
                        layout="fixed"
                        width="20px"
                        height="20px"
                    />
                    <Link href="/">
                        <a data-active={isActive('/')}>bban9_jo</a>
                    </Link>
                    <Link href="/about">
                        <a data-active={isActive('/about')}>About</a>
                    </Link>
                </div>
                <div className="col login">
                    {right}
                </div>
            </div>
            <style jsx>{`
                nav {
                    position: fixed;
                    top: 0;
                    width: 100%;
                    max-width: 975px;
                    background-color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 60px;
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 10px 30px -20px;
                    font-family: 'Bungee', cursive;
                }
                a[data-active='true'] {
                    text-decoration: underline dashed;
                }
                .wrapper {
                    display: flex;
                    max-width: 975px;
                    padding: 0 30px;
                    flex-grow: 1;
                    justify-content: space-between;
                }
                a {
                    margin-left: 10px;
                    font-size: 25px;
                    font-weight: 600;
                    vertical-align: super;
                }
                .col {
                    display: flex;
                    align-items: center;
                }
            `}</style>
        </nav>
        
    );
}