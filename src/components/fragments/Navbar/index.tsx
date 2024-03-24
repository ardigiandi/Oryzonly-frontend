import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {

    const [isClick, setIsClick] = useState(false);

    const toogleNavbar = () => {
        setIsClick(!isClick);
    }

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

                <button
                    className="bg-ungu px-12 py-[14px] text-base font-semibold text-white rounded-xl hidden lg:block"
                >Login</button>
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

                    <div className="bg-white py-4 flex justify-center mt-7 rounded-xl">
                        <button className="">Login</button>
                    </div>
                </div>
            )}
        </nav>
    )
}