import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="max-w-6xl mx-auto flex flex-col">
            <div className="flex flex-row justify-between mt-11 items-center px-5">
               <div>
                <Image src={"/Frame 10.svg"} alt="logo" width={100} height={100} />
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

                <button
                    className="bg-ungu px-12 py-[14px] text-base font-semibold text-white rounded-xl hidden lg:block"
                >Login</button>
            </div>



            <div
                id="dropdown-menu"
                className="bg-ungu absolute w-full px-6 top-28 hidden"
            >
                <ul className="flex flex-col gap-y-5 mt-6">
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
        </nav>
    )
}