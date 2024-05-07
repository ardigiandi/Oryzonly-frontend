import Link from "next/link"
import { useRouter } from "next/router"
import Button from "@/components/ui/button"
import { signOut } from "next-auth/react"

type Propstypes = {
    lists: Array<{
        title: string,
        url: string,
        icon: string
    }>
}

const Sidebar = (props: Propstypes) => {

    const { lists } = props
    const { pathname } = useRouter()
    return (
        <div className="w-[250px] bg-ungu">
            <div className="space-y-1">
                <h1 className="text-white text-xl py-5 px-4 font-semibold">Dashboard Admin</h1>
                {lists.map((list, index) => (
                    <Link href={list.url}
                        key={index}
                        className={`${pathname == list.url ? "bg-soft" : ""} px-4 py-3 flex items-center mx-3 rounded-md transition-all duration-300`}>
                        <i className={`bx ${list.icon}hover:text-black`} />
                        <h4 className="text-base font-semibold">{list.title}</h4>
                    </Link>
                ))}
            </div>
            <div>
                <Button onClick={() => signOut()} className="px-14 py-3 font-semibold bg-white mx-3 absolute bottom-5 rounded-md">
                    Logout
                </Button>
            </div>
        </div>
    )
}

export default Sidebar