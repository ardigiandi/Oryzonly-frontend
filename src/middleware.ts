import WithAuth from "./middlewares/withAuth";
import { NextResponse } from "next/server";

export function mainMiddleware() {
    const res = NextResponse.next()
    return res
}

export default WithAuth(mainMiddleware, [
    'mentor',
    'member',
    'admin',
    'user'
])