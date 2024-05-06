import Sidebar from "@/components/fragments/Sidebar"

type Propstypes = {
    children: React.ReactNode
}

const listSidebarItem = [
    {
        title : "Dashboard",
        url : '/admin',
        icon : 'bx bxs-dashboard',
    },
    {
        title : "Class",
        url : '/admin/class',
        icon : 'bx bxs-dashboard',
    },
    {
        title : "Users",
        url : '/admin/users',
        icon : 'bx bxs-dashboard',
    },
]

const AdminLayout = (props : Propstypes) => {

    const { children } = props

    return(
        <div className="flex">
            <Sidebar lists= {listSidebarItem} />
            {children}
        </div>
    )
}

export default AdminLayout