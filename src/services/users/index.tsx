import instance from "@/lib/axios/instance";

const userService = {
    getAllUsers : () => instance.get('/api/user')
}

export default userService