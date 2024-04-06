import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/router"
import { signIn, signOut, useSession } from "next-auth/react"
import Button from "@/components/ui/button"

export default function Navbar() {

    const { data }: any = useSession()
    // Toggle Navbar
    const [isClick, setIsClick] = useState(false);
    const toogleNavbar = () => {
        setIsClick(!isClick);
    }

    const [isMore, setIsMore] = useState(false)
    const toogleMore = () => {
        setIsMore(!isMore);
    }


    return (
        <nav className="relative max-w-6xl mx-auto flex flex-col">
            <div className="flex flex-row mt-11 items-center px-5 w-full justify-between">
                <div className="w-full lg:w-auto">
                    <Image src="/Frame 10.svg" alt="logo" width={155} height={34} priority={true} className="h-[34px]" />
                </div>

                <ul className="flex-row gap-x-10 hidden lg:flex">
                    <li>
                        <Link href="/" className="text-base font-semibold text-navy">Home</Link>
                    </li>
                    <li>
                        <Link href="/courses" className="text-base font-semibold text-navy">Course</Link>
                    </li>
                    <li>
                        <Link href="/services" className="text-base font-semibold text-navy">Services</Link>
                    </li>
                    <li>
                        <Link href="/instructor" className="text-base font-semibold text-navy">Instructor</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-base font-semibold text-navy">Contact</Link>
                    </li>
                </ul>

                <div onClick={toogleNavbar} className="lg:hidden cursor-pointer flex justify-end">
                    <Image src="/menu.svg" width={24} height={24} alt="hamburger" priority={true} />
                </div>


                {data ? <Button
                    className="bg-ungu px-12 py-[14px] text-base font-semibold text-white rounded-xl hidden lg:block"
                    onClick={() => signOut()}
                    type="button"
                >
                    Logout
                </Button> : <Button
                    className="bg-ungu px-12 py-[14px] text-base font-semibold text-white rounded-xl hidden lg:block"
                    onClick={() => signIn()}
                    type="button"
                >
                    Login
                </Button>}
            </div>


            <div
                className={`${isClick ? 'block' : 'hidden'} bg-ungu w-full px-2 h-[90px] fixed bottom-0 z-10 flex lg:hidden items-center rounded-lg`}
            >
                <ul className="flex justify-between w-full px-8 ">
                    <li className="flex-col">
                        <a href="" className="flex flex-col justify-center items-center">
                            <Image src="/home.svg" alt="" width={24} height={24} priority={true} className="text-white" />
                            <span className="text-sm font-semibold text-white">Home</span>
                        </a>
                    </li>
                    <li className="flex-col">
                        <a href="" className="flex flex-col justify-center items-center">
                            <Image src="/book (1).svg" alt="" width={24} height={24} priority={true} className="text-white" />
                            <span className="text-sm font-semibold text-white">Course</span>
                        </a>
                    </li>
                    <li className="flex-col">
                        <a href="" className="flex flex-col justify-center items-center">
                            <Image src="/settings.svg" alt="" width={24} height={24} priority={true} className="text-white" />
                            <span className="text-sm font-semibold text-white">Services</span>
                        </a>
                    </li>
                    <li className="flex-col">
                        <div onClick={toogleMore} className="flex flex-col justify-center items-center">
                            <Image src="/titik_tiga.svg" alt="" width={24} height={24} priority={true} className="text-white" />
                            <span className="text-sm font-semibold text-white">More</span>
                        </div>
                    </li>
                </ul>

                <div
                    className={`${isMore ? "block" : "hidden"} fixed bottom-[100px] right-0 left-0 flex gap-x-7 justify-center`}>
                    {data ?
                        <Button className="bg-soft text-base font-semibold px-10 py-3 rounded-xl border border-black">
                            Login
                        </Button> :
                        <Button className="bg-soft text-base font-semibold px-10 py-3 rounded-xl border border-black">
                            Logout
                        </Button>}
                </div>
            </div>
        </nav>
    )
}