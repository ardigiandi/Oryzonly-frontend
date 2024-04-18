import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { signIn, signOut, useSession } from "next-auth/react"
import Button from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { useRouter } from "next/router"

export default function Navbar() {

    // meengambil data
    const { data }: any = useSession()

    // Fungsi navbar
    const [isClick, setIsClick] = useState(false);
    const toogleNavbar = () => {
        setIsClick(!isClick);
    }

    // Fungsi more
    const [isMore, setIsMore] = useState(false)
    const toogleMore = () => {
        setIsMore(!isMore);
    }

    const path = usePathname()

    // mapping menu navbar desktop
    const links = [
        { id: 1, href: "/", text: "Home" },
        { id: 2, href: "/courses", text: "Course" },
        { id: 3, href: "/students", text: "Services" },
        { id: 4, href: "/contact", text: "Instructor" },
        { id: 5, href: "/contact", text: "Contact" },
    ]


    const router = useRouter()
    const [activeIndex, setActiveIndex] = useState(0)
    const handleClick = (index: number, href: string) => {
        if (activeIndex === linksnavbar.length - 1 && activeIndex === index) {
            setActiveIndex(-1)
        } else {
            setActiveIndex(index)
        }
        setIsClick(true); // Tutup navbar saat menu diklik
        router.push(href); // Navigasi ke URL yang sesuai
    }

    // mapping menu navbar mobile
    const linksnavbar: { id: number; href?: string; Image: string; text: string; onClick?: () => void; }[] = [
        { id: 1, href: "/", Image: "/home.svg", text: "Home" },
        { id: 2, href: "/courses", Image: "/book (1).svg", text: "Course" },
        { id: 3, href: "/settings", Image: "/settings.svg", text: "Services" },
        { id: 4, Image: "/titik_tiga.svg", text: "More", onClick: toogleMore },
    ]

    return (
        <nav className="relative max-w-6xl mx-auto flex flex-col">
            <div className="flex flex-row mt-8 items-center px-5 w-full justify-between">
                <div className="w-full lg:w-auto">
                    <Image
                        src="/Frame 10.svg"
                        alt="logo"
                        width={155}
                        height={34}
                        priority={true}
                        className="h-[34px]" />
                </div>

                <ul className="flex-row gap-x-10 hidden lg:flex tracking-[-0.7px]">
                    {links.map((l) => (
                        <li key={l.id}
                        >
                            <Link href={l.href} className={`${l.href === path ? "text-ungu" : " text-navy"} text-base font-semibold`}>
                                {l.text}
                            </Link>
                        </li>
                    ))}
                </ul>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toogleNavbar}
                    className="lg:hidden cursor-pointer flex justify-end">
                    {isClick ? <Image src="/x.svg" alt="" width={24} height={24} priority={true} /> : <Image src="/menu.svg" alt="" width={24} height={24} priority={true} />}
                </motion.div>


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


            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: isClick ? 0 : 20 }}
                transition={{ type: "spring", stiffness: 120 }}
                className={`${isClick ? 'block' : 'hidden'} bg-ungu w-full h-[90px] fixed bottom-0 z-10 flex lg:hidden items-center rounded-lg`}
            >
                <ul className="flex justify-between w-full px-8 ">
                    {linksnavbar.map((link, index) => (
                        <motion.li
                            key={link.id}
                            whileHover={{ scale: 1.1 }}
                            className="flex-col"
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleClick(index, link.href || '')}
                        >
                            <Link
                                href={link.href || ''}
                                onClick={link.onClick}
                                className="flex flex-col justify-center items-center gap-y-2"
                            >
                                <Image
                                    src={link.Image}
                                    alt=""
                                    width={24}
                                    height={24}
                                    priority={true}
                                />
                                <span className={`${index === activeIndex ? "text-pink-400" : "text-white"} text-xs font-semibold`}>
                                    {link.text}
                                </span>
                            </Link>
                        </motion.li>
                    ))}
                </ul>

                <motion.li
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: isMore ? 0 : 10 }}
                    className={`${isMore ? "block" : "hidden"}  w-full bottom-[110px] flex justify-center absolute`}
                >
                    {data ?
                        <Button
                            onClick={() => signOut()}
                            className="bg-soft text-base font-semibold w-full fixed py-3 rounded-md border border-gray-300"
                            type="button"
                        >
                            Logout
                        </Button> :
                        <Button
                            onClick={() => signIn()}
                            className="bg-soft text-base font-semibold w-full fixed py-3 rounded-md border border-gray-300"
                            type="button"
                        >
                            Login
                        </Button>
                    }
                </motion.li>
            </motion.div>
        </nav >
    )
}