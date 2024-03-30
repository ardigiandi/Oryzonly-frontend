import { Children } from "react"
import Navbar from "../Navbar"
import Footer from "../Footer";
import { useRouter } from "next/router";

const disableNavbar = ["/auth/login" , "/auth/register"]
const disableFooter = ["/auth/login" , "/auth/register"]

type AppShellProps = { children: React.ReactNode }
export default function AppShell(props: AppShellProps) {

    const { children } = props;
    const { pathname } = useRouter();
    return (
        <main>
            {!disableNavbar.includes(pathname)&& <Navbar /> }
            {children}
            {!disableFooter.includes(pathname) && <Footer /> }
        </main>
    )
}