import AdminLayout from "@/components/layouts/AdminLayout";
import Button from "@/components/ui/button"; // Pastikan path file Button sudah sesuai

type PropsTypes = {
    users: any[];
}

const UsersAdminViews = (props: PropsTypes) => {
    const { users } = props;

    return (
        <AdminLayout>
            <div className="w-full px-5">
                <h1 className="font-bold text-2xl mb-5 mt-4">Users Management</h1>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-black">
                        <thead>
                            <tr className="text-left bg-gray-800 text-white">
                                <th className="py-3 px-4">No</th>
                                <th className="py-3 px-4">Fullname</th>
                                <th className="py-3 px-4">Email</th>
                                <th className="py-3 px-4">Role</th>
                                <th className="py-3 px-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                                    <td className="py-2 px-4">{index + 1}</td>
                                    <td className="py-2 px-4">{user.fullname}</td>
                                    <td className="py-2 px-4">{user.email}</td>
                                    <td className="py-2 px-4">{user.role}</td>
                                    <td className="py-2 px-4 flex gap-x-3">
                                        <Button type="button" className="bg-gray-800 text-white px-3 py-1 rounded-md hover:bg-gray-700">Update</Button>
                                        <Button type="button" className="bg-gray-800 text-white px-3 py-1 rounded-md hover:bg-gray-700">Delete</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
}

export default UsersAdminViews;
