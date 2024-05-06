import AdminLayout from "@/components/layouts/AdminLayout"
import Button from "@/components/ui/button"

type PropsTypes = {
    users: any
}

const UsersAdminViews = (props: PropsTypes) => {

    const { users } = props
    return (
        <AdminLayout>
            <div className="w-full px-3">
                <h1 className="font-bold p-5">Users Management</h1>
                <table className="w-full border-spacing-0 border-collapse border border-black">
                    <thead>
                        <tr className="text-left bg-soft py-3">
                            <th>#</th>
                            <th>Fullname</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user: any, index: number) => (
                            <tr key={user.id}>
                                <td>{index + 1}</td>
                                <td>{user.fullname}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td className="flex gap-x-3">
                                    <Button type="button" className="bg-black text-white px-2 py-1 rounded-md">Update</Button>
                                    <Button type="button" className="bg-black text-white px-2 py-1 rounded-md">Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    )
}

export default UsersAdminViews