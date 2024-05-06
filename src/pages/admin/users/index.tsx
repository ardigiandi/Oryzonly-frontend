import AdminLayout from "@/components/layouts/AdminLayout"
import UsersAdminViews from "@/components/Views/admin/users"
import userService from "@/services/users"
import { useEffect, useState } from "react"

const AdminUsersPage = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getAllUsers = async () => {
      const {data} = await userService.getAllUsers()
      setUsers(data.data)
    }
    getAllUsers()
  }, [])
  console.log(users)
  return (
    <>
      <UsersAdminViews users={users} />
    </>
  )
}

export default AdminUsersPage