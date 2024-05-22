import Sidebar from "@/components/fragments/Sidebar";
import { signOut } from "next-auth/react";

type Propstype = {
    children: React.ReactNode
}

const listSidebarItem = [
    {
        title: 'Back to Home',
        url: '/',
        icon: '/home_sidebar.svg'
    },
    {
        title: 'My Course',
        url: '/member',
        icon: '/note.svg'
    },
    {
        title: 'Transcation',
        url: '/member/transcation',
        icon: '/moneys.svg'
    },
    {
        title: 'Settings',
        url: '/member/settings',
        icon: '/setting.svg'
    },
    {
        title: 'Logout',
        icon: '/Logout.svg',
        onClick: () => signOut()
    },
]

export default function Memberlayout(props: Propstype) {
    const { children } = props
    return (
        <div className="bg-lightpurple">
            <Sidebar lists={listSidebarItem} />
            {children}
        </div>
    )
}