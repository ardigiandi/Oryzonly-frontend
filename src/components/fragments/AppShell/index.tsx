import { Children } from "react"
import Navbar from "../Navbar"
import { useRouter } from "next/router";

type ChildrenPageProps = { children : React.ReactNode}
export default function AppShell (props : ChildrenPageProps) {

    const {children} = props;

    return(
        <div>
            <Navbar/>
            {children}
        </div>
    )
}