import Sidebar from "@/components/fragments/Sidebar";
import { signOut } from "next-auth/react";

type Propstype = {
    children: React.ReactNode
}

const listSidebarItem = [
    {
        title: 'My Course',
        url: '/mentor',
        icon: '/note.svg'
    },
    {
        title: 'Settings',
        url: '/mentor/settings',
        icon: '/setting.svg'
    },
    {
        title: 'Logout',
        icon: '/Logout.svg',
        onClick: () => signOut()
    },
]

export default function Mentorlayout(props: Propstype) {
    const { children } = props
    return (
        <div className="bg-lightpurple">
            <Sidebar lists={listSidebarItem} />
            {children}
        </div>
    )
}