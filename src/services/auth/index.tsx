import instance from "@/lib/axios/instance"

const authService = {
    registerAccount : (data: any) => instance.post("/api/user/register", data)
}

export default authService