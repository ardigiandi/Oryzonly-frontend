import Image from "next/image"
import { useState, useEffect } from "react"

export default function Mentorviews() {

    const [tooglesidebar, setTooglesidebar] = useState(false)
    useEffect(() => {
        // Mengatur nilai awal berdasarkan lebar layar saat komponen dimuat
        const setInitialTooglesidebar = () => {
            if (window.innerWidth >= 1024) { // Mode desktop
                setTooglesidebar(false);
            } else { // Mode mobile
                setTooglesidebar(true);
            }
        };
        setInitialTooglesidebar();

        // Listener untuk perubahan lebar layar
        const handleResize = () => {
            if (window.innerWidth >= 1024) { // Mode desktop
                setTooglesidebar(true);
            } else { // Mode mobile
                setTooglesidebar(false);
            }
        };
        window.addEventListener('resize', handleResize);

        // Cleanup listener saat komponen di-unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="flex flex-row bg-lightpurple h-screen">
            <div className={`${tooglesidebar ? 'hidden' : 'block'} sidebar h-screen w-[300px] bg-white fixed lg:relative`}>
                <div className="mt-[60px] space-y-6">
                    <Image
                        onClick={() => setTooglesidebar(tooglesidebar ? false : true)}
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

                <div className="flex flex-col px-6 mt-12">
                    <div className="gap-x-3 flex flex-row py-4 px-4 rounded-lg bg-soft">
                        <Image src="/note.svg" alt="" width={20} height={20} priority={true} />
                        <p className="text-base font-semibold text-ungu">My Courses</p>
                    </div>
                    <div className="gap-x-3 flex flex-row py-4 px-4 rounded-lg">
                        <Image src="/setting.svg" alt="" width={20} height={20} priority={true} />
                        <p className="text-base font-semibold">Settings</p>
                    </div>
                    <div className="gap-x-3 flex flex-row py-4 px-4 rounded-lg">
                        <Image src="/Logout.svg" alt="" width={20} height={20} priority={true} />
                        <p className="text-base font-semibold">Logout</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col mt-8 lg:mt-[60px] gap-y-[52px]">
                <div className="space-y-4 px-7">
                    <div className="flex flex-row gap-x-5">
                        <Image
                            onClick={() => setTooglesidebar(tooglesidebar ? false : true)}
                            src="/menu.svg"
                            alt="" width={20}
                            height={20}
                            priority={true}
                            className={`${tooglesidebar ? 'block' : 'hidden'} block lg:hidden`} />
                        <h1 className="text-2xl lg:text-3xl font-semibold text-navy">
                            My Courses
                        </h1>
                    </div>
                    <p className="text-base text-gray-500">
                        Discover all the courses youre enrolled in, all in one place!
                    </p>
                </div>

                <div
                    className="lg:w-[380px] lg:h-[284px] w-[310px] h-[200px] mx-auto lg:mx-0 px-0 lg:px-7"
                >
                    <Image src="/Frame_dashboard.png" alt="" width={380} height={284} priority={true} className="cursor-pointer" />
                </div>
            </div>
        </section>
    )
}