import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="relative bg-ungu mt-[100px] lg:mt-[150px] w-full">
            <div className="max-w-6xl mx-auto flex flex-col gap-y-12 py-[160px]">
                <div className="flex flex-col lg:flex-row justify-between items-start">
                    <div className="flex flex-col gap-y-8 lg:w-[455px] px-5 lg:px-0">
                        <Image src="/footer.svg" width={155} height={34} alt="logo" priority={true} />
                        <h1 className="text-sm text-white font-semibold">
                            Stay connected with us! Follow our latest updates on social media
                            and subscribe to our newsletter for exclusive information. Be part
                            of our ever-growing community in learning and growth.
                        </h1>
                        <div className="flex gap-x-3">
                            <Image src="/email.svg" alt="" width={44} height={44} priority={true} />
                            <Image src="/browser.svg" alt="" width={44} height={44} priority={true} />
                            <Image src="/phone.svg" alt="" width={44} height={44} priority={true} />
                            <Image src="/video.svg" alt="" width={44} height={44} priority={true} />
                        </div>
                    </div>

                    <div
                        className="flex-wrap lg:gap-x-12 justify-between px-7 mt-12 lg:mt-0 gap-y-10 hidden lg:flex"
                    >
                        <div className="flex flex-col gap-y-4">
                            <h1 className="text-xl text-white font-semibold">Company</h1>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="" className="text-xs lg:text-sm text-white font-semibold">About</Link>
                                </li>
                                <li>
                                    <Link href="" className="text-xs lg:text-sm text-white font-semibold">Career</Link>
                                </li>
                                <li>
                                    <Link href="" className="text-xs lg:text-sm text-white font-semibold"
                                    >Partners</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-y-4">
                            <h1 className="text-xl text-white font-semibold">Overview</h1>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="" className="text-xs lg:text-sm text-white font-semibold"
                                    >Courses</Link>
                                </li>
                                <li>
                                    <Link href="" className="text-xs lg:text-sm text-white font-semibold"
                                    >Bootcamp</Link>
                                </li>
                                <li>
                                    <Link href="" className="text-xs lg:text-sm text-white font-semibold"
                                    >Our Graduates</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-y-4">
                            <h1 className="text-xl text-white font-semibold">Explore Us</h1>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="" className="text-xs lg:text-sm text-white font-semibold"
                                    >Our Career</Link>
                                </li>
                                <li>
                                    <Link href="" className="text-xs lg:text-sm text-white font-semibold"
                                    >Privacy</Link>
                                </li>
                                <li>
                                    <Link href="" className="text-xs lg:text-sm text-white font-semibold"
                                    >Terms & Conditions</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-y-4">
                            <h1 className="text-xl text-white font-semibold">Connect Us</h1>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="" className="text-xs lg:text-sm text-white font-semibold"
                                    >admin@shirohige.com</Link>
                                </li>
                                <li>
                                    <Link href="" className="text-xs lg:text-sm text-white font-semibold"
                                    >021 - 554 - 249</Link>
                                </li>
                                <li>
                                    <Link href="" className="text-xs lg:text-sm text-white font-semibold"
                                    >Serpong, South Tangerang</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h1
                    className="text-sm text-white font-semibold mt-12 flex justify-center text-center px-5 lg:px-0"
                >
                    All Rights Reserved • Copyright by Oryzonly Team 2024
                </h1>
            </div>
            <Image
                src="/Titik-titik.png"
                alt=""
                width={105}
                height={80}
                priority={true}
                className="absolute w-[105px] h-[102px] top-0 left-20"
            />
            <Image
                src="/Titik-titik.png"
                alt=""
                width={105}
                height={80}
                priority={true}
                className="absolute w-[105px] h-[80px] bottom-0 right-20"
            />
        </footer>
    )
}