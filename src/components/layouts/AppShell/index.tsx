import { Children } from "react"
import Navbar from "../../fragments/Navbar"
import Footer from "../../fragments/Footer";
import { useRouter } from "next/router";

const disableNavbar = ["/auth/login" , "/auth/register", "/dashboardmentor"]
const disableFooter = ["/auth/login" , "/auth/register", "/dashboardmentor"]

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