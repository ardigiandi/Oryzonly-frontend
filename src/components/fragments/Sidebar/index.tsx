import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { motion } from "framer-motion";

const SidebarItem = [
    {
        title: 'My Course',
        icon: 'note',
        url: '/students',
        text: 'My Courses',
        description: 'Discover all the courses you are enrolled in, all in one place!'
    },
    {
        title: 'Transaction',
        icon: 'moneys',
        url: '/students/transcation',
        text: 'Transactions',
        description: 'Discover all your transactions, all in one place!'
    }
];

type SidebarProps = {
    children: React.ReactNode;
}

const SidebarStudents = ({ children }: SidebarProps) => {
    const { pathname } = useRouter();

    const router = useRouter()

    const [toggleSidebar, setToggleSidebar] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState(SidebarItem[0]);

    useEffect(() => {
        const handleResize = () => {
            setToggleSidebar(window.innerWidth >= 1024);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleToggleSidebar = () => {
        setToggleSidebar(!toggleSidebar);
    };

    const handleMenuClick = (menu: any) => {
        setSelectedMenu(menu);
        if (window.innerWidth < 1024) {
            setToggleSidebar(false);
        }
    };

    const handleback = () => {
        router.push('/');
    };

    return (
        <section className="flex flex-row bg-lightpurple h-screen">

            {/* Sidebar */}
            <motion.div
                initial={{ opacity: 0, x: -300 }}
                animate={{ opacity: 1, x: toggleSidebar ? 0 : -10 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ type: 'tween', stiffness: 120, damping: 10 }}
                className={`sidebar h-screen lg:w-[300px] bg-white fixed lg:relative ${toggleSidebar ? 'block' : 'hidden'}`}>
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

                <div className="flex flex-col px-6 mt-12 gap-y-5 w-[300px]">
                    
                    <button
                        type="button"
                        onClick={handleback}
                        className="bg-white py-4 px-4 text-sm lg:text-base font-semibold text-ungu rounded-lg flex gap-x-4 items-center">
                        <Image
                            src={'/home_sidebar.svg'}
                            alt=""
                            width={20} height={20}
                            priority={true} />
                        Back to Home
                    </button>
                    
                    {SidebarItem.map((list) => (
                        <div key={list.title}>
                            <Link href={list.url}>
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
                        </div>
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

            {/* Content */}
            <div className="flex flex-col mt-8 lg:mt-[60px] gap-y-[52px]">
                <div className="space-y-4 px-7 ">
                    <div className="flex flex-row gap-x-5 items-center">
                        <motion.div
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.1 }}
                            onClick={handleToggleSidebar}
                        >
                            <Image
                                src="/menu.svg"
                                alt=""
                                width={20}
                                height={20}
                                priority={true}
                                className={`block lg:hidden ${toggleSidebar ? 'hidden' : 'block'}`} />
                        </motion.div>
                        <h1 className="text-2xl lg:text-3xl font-semibold text-navy">
                            {selectedMenu.text}
                        </h1>
                    </div>
                    <p className="text-base text-gray-500">
                        {selectedMenu.description}
                    </p>
                </div>
                {children}
            </div>
        </section>
    )
}

export default SidebarStudents;