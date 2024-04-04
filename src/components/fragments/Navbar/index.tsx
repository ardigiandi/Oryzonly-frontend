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
    
    const { push, query } = useRouter()

    const callbackUrl: any = query.callbackUrl || '/'

    return (
        <nav className="max-w-6xl mx-auto flex flex-col">
            <div className="flex flex-row justify-between mt-11 items-center px-5">
                <div>
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

                <div onClick={toogleNavbar} className="block lg:hidden">
                    {isClick ? (
                        <Image src="/x.svg" width={24} height={24} alt="hamburger" priority={true} />
                    ) : (
                        <Image src="/menu.svg" width={24} height={24} alt="hamburger" priority={true} />
                    )}
                </div>


                {data ? <button
                    className="bg-ungu px-12 py-[14px] text-base font-semibold text-white rounded-xl hidden lg:block"
                    onClick={() => signOut()}
                    type="button"
                >
                    Logout
                </button> : <button
                    className="bg-ungu px-12 py-[14px] text-base font-semibold text-white rounded-xl hidden lg:block"
                    onClick={() => signIn()}
                    type="button"
                >
                    Login
                </button>}
            </div>


            {isClick && (
                <div
                    id="dropdown-menu"
                    className="bg-ungu absolute w-full px-6 top-28 py-6"
                >
                    <ul className="flex flex-col gap-y-5">
                        <li>
                            <a href="" className="text-base font-semibold text-white">Home</a>
                        </li>
                        <li>
                            <a href="" className="text-base font-semibold text-white">Course</a>
                        </li>
                        <li>
                            <a href="" className="text-base font-semibold text-white">Services</a>
                        </li>
                        <li>
                            <a href="" className="text-base font-semibold text-white">Instructor</a>
                        </li>
                        <li>
                            <a href="" className="text-base font-semibold text-white">Contact</a>
                        </li>
                    </ul>

                    <Button
                        className="bg-white py-4 flex justify-center rounded-xl w-full"
                        type="button"
                        onClick={() => signIn('google', { callbackUrl, redirect: true })}
                    >
                        Login
                    </Button>
                </div>
            )}
        </nav>
    )
}