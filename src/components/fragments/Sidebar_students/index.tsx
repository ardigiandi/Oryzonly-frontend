import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import { motion } from "framer-motion";

const listSidebarItem = [
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
        url: '/students/transaction',
        text: 'Transaction',
        description: 'Discover all your transactions, all in one place!'
    }
];

type SidebarProps = {
    children: React.ReactNode;
}

const SidebarStudents = ({ children }: SidebarProps) => {
    const { pathname } = useRouter();

    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Tetap terbuka di mode desktop
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState("My Course");
    const [menuDescription, setMenuDescription] = useState("Discover all the courses you are enrolled in, all in one place!");

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleMenuClick = (text: string, description: string) => {
        setActiveMenu(text);
        setMenuDescription(description);
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsSidebarOpen(window.innerWidth >= 1024);
            setIsMobileMenuOpen(false);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="flex flex-row bg-lightpurple h-screen">
            <motion.div
                initial={{ opacity: 1, x: 0 }}
                animate={{ opacity: 1, x: isSidebarOpen ? 0 : -300 }}
                className="sidebar h-screen lg:w-[300px] bg-white fixed lg:relative"
            >
                <div className="mt-[60px] space-y-6">
                    <Image
                        onClick={toggleSidebar}
                        src="/x.svg"
                        width={20}
                        height={20}
                        alt=""
                        priority={true}
                        className="absolute right-5 top-8 block lg:hidden"
                    />
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
                    <button
                        type="button"
                        onClick={() => signOut()}
                        className="bg-white py-4 px-4 text-sm lg:text-base font-semibold text-ungu rounded-lg flex gap-x-4 items-center"
                    >
                        <Image
                            src='/home_sidebar.svg'
                            alt=""
                            width={20} height={20}
                            priority={true}
                        />
                        Back to Home
                    </button>
                    {listSidebarItem.map((list) => (
                        <div
                            key={list.title}
                            onClick={() => handleMenuClick(list.title, list.description)}
                            className={`${pathname === list.url ? 'bg-soft text-white' : 'text-navy'} flex items-center text-sm lg:text-base gap-x-4 px-4 py-3 rounded-lg cursor-pointer`}
                        >
                            <Image
                                src={`/${list.icon}.svg`}
                                alt=""
                                width={20}
                                height={20}
                                priority={true}
                            />
                            <p className="text-base font-semibold text-ungu">{list.title}</p>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => signOut()}
                        className="bg-white py-4 px-4 text-sm lg:text-base font-semibold text-ungu rounded-lg flex gap-x-4 items-center"
                    >
                        <Image
                            src={'/Logout.svg'}
                            alt=""
                            width={20} height={20}
                            priority={true}
                        />
                        Logout
                    </button>
                </div>
            </motion.div>

            <div className={`fixed lg:hidden inset-0 bg-black z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'}`} onClick={toggleMobileMenu}></div>
            <div className={`sidebar-mobile lg:hidden transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="mt-[60px] space-y-6">
                    <Image
                        onClick={toggleMobileMenu}
                        src="/x.svg"
                        width={20}
                        height={20}
                        alt=""
                        priority={true}
                        className="absolute right-5 top-8 block"
                    />
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
                    <button
                        type="button"
                        onClick={() => signOut()}
                        className="bg-white py-4 px-4 text-sm lg:text-base font-semibold text-ungu rounded-lg flex gap-x-4 items-center"
                    >
                        <Image
                            src='/home_sidebar.svg'
                            alt=""
                            width={20} height={20}
                            priority={true}
                        />
                        Back to Home
                    </button>
                    {listSidebarItem.map((list) => (
                        <div
                            key={list.title}
                            onClick={() => handleMenuClick(list.title, list.description)}
                            className={`${pathname === list.url ? 'bg-soft text-white' : 'text-navy'} flex items-center text-sm lg:text-base gap-x-4 px-4 py-3 rounded-lg cursor-pointer`}
                        >
                            <Image
                                src={`/${list.icon}.svg`}
                                alt=""
                                width={20}
                                height={20}
                                priority={true}
                            />
                            <p className="text-base font-semibold text-ungu">{list.title}</p>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => signOut()}
                        className="bg-white py-4 px-4 text-sm lg:text-base font-semibold text-ungu rounded-lg flex gap-x-4 items-center"
                    >
                        <Image
                            src={'/Logout.svg'}
                            alt=""
                            width={20} height={20}
                            priority={true}
                        />
                        Logout
                    </button>
                </div>
            </div>

            <div className="flex flex-col mt-8 lg:mt-[60px] gap-y-[52px]">
                <div className="space-y-4 px-7 lg:hidden">
                    <div className="flex flex-row gap-x-5 items-center">
                        <motion.div
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.1 }}
                            onClick={toggleMobileMenu}
                        >
                            <Image
                                onClick={toggleMobileMenu}
                                src="/menu.svg"
                                alt=""
                                width={20}
                                height={20}
                                priority={true}
                            />
                        </motion.div>
                        <h1 className="text-2xl lg:text-3xl font-semibold text-navy">
                            {activeMenu}
                        </h1>
                    </div>
                    <p className="text-base text-gray-500">
                        {menuDescription}
                    </p>
                </div>
                {children}
            </div>
        </section>
    );
};

export default SidebarStudents;
