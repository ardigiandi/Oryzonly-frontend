import SidebarStudents from "@/components/fragments/Sidebar_students"

const listSidebarItem = [
    {
        title: 'Back to Home',
        icon: 'home',
        url: '/'
    }
]

const Student = () => {
    return(
        <SidebarStudents sidebarItems={listSidebarItem}>
            <div>
                
            </div>
        </SidebarStudents>
    )
}

export default Student