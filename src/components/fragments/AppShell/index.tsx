import { Children } from "react"
import Navbar from "../Navbar"
import Footer from "../Footer";

type ChildrenPageProps = { children : React.ReactNode}
export default function AppShell (props : ChildrenPageProps) {

    const {children} = props;

    return(
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}