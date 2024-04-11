import Image from "next/image"
import SidebarMentor from "@/components/fragments/Sidebar_mentor"


const listSidebarItem = [
    {
        title: 'My Course',
        icon: 'note',
        url: '/mentor'
    }
]

const Mycourse = () => {
    return (
        <SidebarMentor sidebarItems={listSidebarItem}>
        <div
            className="lg:w-[380px] lg:h-[284px] w-[310px] h-[200px] mx-auto lg:mx-0 px-0 lg:px-7"
        >
            <Image src="/Frame_dashboard.png" alt="" width={380} height={284} priority={true} className="cursor-pointer" />
        </div>
    </SidebarMentor>
    )
}

export default Mycourse