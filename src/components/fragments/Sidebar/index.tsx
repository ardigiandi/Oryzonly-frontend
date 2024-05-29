import { signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

type Propstype = {
    lists: Array<{
        title: string
        icon: string
        url?: string
        onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
    }>
}

export default function Sidebar(props: Propstype) {
    const { lists } = props
    const { pathname } = useRouter()

    return (
        <aside className="w-[300px] h-screen bg-white flex-col fixed">
            <div className="flex flex-col justify-center items-center gap-y-6 mt-[60px]">
                <Image
                    src="/profile 1.svg"
                    alt="Profile Picture"
                    className="w-[80px] h-[80px]"
                    width={80}
                    height={80}
                    priority={true}
                />
                <div className="flex flex-col gap-y-2 justify-center text-center">
                    <h1 className="text-lg font-semibold text-navy">Akmal Widad Iskandar</h1>
                    <p className="text-sm font-semibold text-gray-500">Fullstack Developer</p>
                </div>
            </div>

            <div className="flex flex-col mt-[50px] gap-y-3 h-full">
                {lists.map((list, index) => (
                    <div key={index}>
                        {list.url ? (
                            <Link href={list.url}>
                                <div
                                    className={`${pathname === list.url
                                        ? "bg-soft text-ungu"
                                        : "text-purple"
                                        } flex items-center text-sm lg:text-base gap-x-4 mx-5 px-4 py-3 rounded-lg cursor-pointer`}
                                >
                                    <Image src={list.icon} alt="Courses" width={24} height={24} priority={true} />
                                    <h1 className="text-base font-semibold">{list.title}</h1>
                                </div>
                            </Link>
                        ) : (
                            <div onClick={() => signOut({ callbackUrl: "/" })} key={list.title} className="flex items-center text-sm lg:text-base gap-x-4 mx-5 px-4 py-3 rounded-lg cursor-pointer">
                                <Image src={list.icon} alt="Courses" width={24} height={24} priority={true} />
                                <h1 className="text-base font-semibold text-navy">{list.title}</h1>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </aside>
    )
}