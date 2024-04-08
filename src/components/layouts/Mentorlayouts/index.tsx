import Image from "next/image"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { signOut } from "next-auth/react"
import { motion } from "framer-motion"

const listSidebarItem = [
    {
        title: 'My Course',
        icon: 'note',
        url: '/mentor'
    },
    {
        title: 'Settings',
        icon: 'setting',
        url: '/mentor/settings'
    },
]

type propPages = {
    children: React.ReactNode
}

const Mentorlayouts = (props: propPages) => {
    const { pathname } = useRouter()
    const { children } = props

    // FUNGSI SIDEBAR
    const [toggleSidebar, setToggleSidebar] = useState(false)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setToggleSidebar(false);
            } else {
                setToggleSidebar(true);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleToggleSidebar = () => {
        setToggleSidebar(prevState => !prevState);
    };

    const [isClick, setIsClick] = useState(false);
    const tooglesidebar = () => {
        setIsClick(!isClick);
    }

    return (
        <section className="flex flex-row bg-lightpurple h-screen">
            {/* INI SIDEBAR */}
            <motion.div
                initial={{ opacity: 0, x: -300 }}
                animate={{ opacity: 1, x: toggleSidebar ? 0 : -10 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ type: 'tween', stiffness: 120, damping: 10 }}
                className={`${toggleSidebar ? 'hidden' : 'block'} sidebar h-screen w-[300px] bg-white fixed lg:relative`}>
                <div className="mt-[60px] space-y-6">
                    <Image
                        onClick={handleToggleSidebar}
                        src="/x.svg"
                        width={20}
                        height={20}
                        alt=""
                        priority={true}
                        className="absolute right-5 top-8 block lg:hidden" />
                    <Image
                        src="/profile_sidebar.png"
                        width={80}
                        height={80}
                        alt=""
                        priority={true}
                        className="w-[80px] h-[80px] flex justify-center mx-auto"
                    />
                    <div className="flex flex-col">
                        <p className="text-center text-[20px] text-navy font-medium">
                            Akmal Widad Iskandar
                        </p>
                        <p className="text-center text-[14px] text-gray-600 font-normal">
                            Fullstack Developer
                        </p>
                    </div>
                </div>

                <div className="flex flex-col px-6 mt-12 gap-y-5">
                    {listSidebarItem.map((list) => (
                        <Link href={list.url} key={list.title}>
                            <div className={`${pathname === list.url ? 'bg-soft text-white' : 'text-navy'} flex items-center text-sm lg:text-base gap-x-4 px-4 py-3 rounded-lg cursor-pointer`}>
                                <Image
                                    src={`/${list.icon}.svg`}
                                    alt=""
                                    width={20}
                                    height={20}
                                    priority={true} />
                                <p className="text-base font-semibold text-ungu">{list.title}</p>
                            </div>
                        </Link>
                    ))}
                    <button
                        type="button"
                        onClick={() => signOut()}
                        className="bg-white py-4 px-4 text-sm lg:text-base font-semibold text-ungu rounded-lg flex gap-x-4 items-center">
                        <Image
                            src={'/Logout.svg'}
                            alt=""
                            width={20} height={20}
                            priority={true} />
                        Logout
                    </button>
                </div>
            </motion.div>
            {/* END SIDEBAR */}

            <div className="flex flex-col mt-8 lg:mt-[60px] gap-y-[52px]">
                <div className="space-y-4 px-7 ">
                    <div className="flex flex-row gap-x-5 items-center">
                        <motion.div
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.1 }}
                            onClick={tooglesidebar}
                        >
                            <Image
                                onClick={handleToggleSidebar}
                                src="/menu.svg"
                                alt=""
                                width={20}
                                height={20}
                                priority={true}
                                className={`${toggleSidebar ? 'block' : 'hidden'} block lg:hidden`} />
                        </motion.div>
                        <h1 className="text-2xl lg:text-3xl font-semibold text-navy">
                            My Courses
                        </h1>
                    </div>
                    <p className="text-base text-gray-500">
                        Discover all the courses youre enrolled in, all in one place!
                    </p>
                </div>
                {children}
            </div>
        </section>
    )
}

export default Mentorlayouts