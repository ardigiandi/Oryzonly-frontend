import Memberlayout from "@/components/layouts/Memberlayout"
import Image from "next/image"


export default function Transcationviews() {
    return (
        <Memberlayout>
            <section className="py-[40px] px-8 space-y-8 lg:ml-[300px]">
                <div className="flex flex-col gap-y-4">
                    <h1 className="text-[32px] font-semibold text-navy">My Transactions</h1>
                    <p className="text-base text-gray-400 font-semibold">
                        Track your financial activities effortlessly.
                    </p>
                </div>

                <div className="overflow-x-auto mt-6 bg-white rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-white hidden md:table-header-group">
                            <tr>
                                <th
                                    className="px-6 py-3 text-left text-sm font-semibold text-navy tracking-wider"
                                >
                                    No.
                                </th>
                                <th
                                    className="px-6 py-3 text-left text-sm font-semibold text-navy tracking-wider"
                                >
                                    Cover
                                </th>
                                <th
                                    className="px-6 py-3 text-left text-sm font-semibold text-navy tracking-wider"
                                >
                                    Course Name
                                </th>
                                <th
                                    className="px-6 py-3 text-left text-sm font-semibold text-navy tracking-wider"
                                >
                                    Course Type
                                </th>
                                <th
                                    className="px-6 py-3 text-left text-sm font-semibold text-navy tracking-wider"
                                >
                                    Price
                                </th>
                                <th
                                    className="px-6 py-3 text-left text-sm font-semibold text-navy tracking-wider"
                                >
                                    Status
                                </th>
                                <th
                                    className="px-6 py-3 text-left text-sm font-semibold text-navy tracking-wider"
                                >
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr className="flex flex-col md:table-row">
                                <td className="px-6 py-4 text-sm text-navy font-semibold">1</td>
                                <td className="px-6 lg:px-0 lg:py-6 flex justify-center lg:block">
                                    <Image
                                        src="/card 1.png"
                                        alt=""
                                        className="lg:w-[100px] lg:h-[50px] w-full h-full rounded-xl"
                                        width={100}
                                        height={50}
                                        priority={true}
                                    />
                                </td>
                                <td
                                    className="px-6 py-4 text-sm text-navy font-semibold w-auto lg:w-[270px]"
                                >
                                    Unleashing Creativity: Understanding Design in all Dimensions
                                </td>
                                <td
                                    className="px-6 py-4 text-sm text-navy font-semibold w-auto md:w-[140px]"
                                >
                                    Free
                                </td>
                                <td className="px-6 py-4 text-sm text-navy font-semibold">Rp 0</td>
                                <td className="px-6 py-4">
                                    <span className="flex gap-x-2 items-center">
                                        <Image src="/green.svg" alt="" width={24} height={24} priority={true} />
                                        <h1 className="text-sm text-navy font-semibold">Success</h1>
                                    </span>
                                </td>
                                <td className="px-6 py-4 w-full lg:w-[140px]">
                                    <button
                                        className="bg-ungu text-sm font-semibold rounded-lg flex justify-center w-full px-4 py-3 text-white"
                                    >
                                        Invoice
                                    </button>
                                </td>
                            </tr>
                            <tr className="flex flex-col md:table-row">
                                <td className="px-6 py-4 text-sm text-navy font-semibold">2</td>
                                <td className="px-6 lg:px-0 lg:py-6 flex justify-center lg:block">
                                    <Image
                                        src="/card 2.png"
                                        alt=""
                                        className="lg:w-[100px] lg:h-[50px] w-full h-full rounded-xl"
                                        width={100}
                                        height={50}
                                        priority={true}
                                    />
                                </td>
                                <td
                                    className="px-6 py-4 text-sm text-navy font-semibold w-auto lg:w-[270px]"
                                >
                                    Unleashing Creativity: Understanding Design in all Dimensions
                                </td>
                                <td
                                    className="px-6 py-4 text-sm text-navy font-semibold w-auto md:w-[140px]"
                                >
                                    Free
                                </td>
                                <td className="px-6 py-4 text-sm text-navy font-semibold">Rp 0</td>
                                <td className="px-6 py-4">
                                    <span className="flex gap-x-2 items-center">
                                        <Image src="/green.svg" alt="" width={24} height={24} priority={true} />
                                        <h1 className="text-sm text-navy font-semibold">Success</h1>
                                    </span>
                                </td>
                                <td className="px-6 py-4 w-full lg:w-[140px]">
                                    <button
                                        className="bg-ungu text-sm font-semibold rounded-lg flex justify-center w-full px-4 py-3 text-white"
                                    >
                                        Invoice
                                    </button>
                                </td>
                            </tr>
                            <tr className="flex flex-col md:table-row">
                                <td className="px-6 py-4 text-sm text-navy font-semibold">3</td>
                                <td className="px-6 lg:px-0 lg:py-6 flex justify-center lg:block">
                                    <Image
                                        src="/card 3.png"
                                        alt=""
                                        className="lg:w-[100px] lg:h-[50px] w-full h-full rounded-xl"
                                        width={100}
                                        height={50}
                                        priority={true}
                                    />
                                </td>
                                <td
                                    className="px-6 py-4 text-sm text-navy font-semibold w-auto lg:w-[270px]"
                                >
                                    Unleashing Creativity: Understanding Design in all Dimensions
                                </td>
                                <td
                                    className="px-6 py-4 text-sm text-navy font-semibold w-auto md:w-[140px]"
                                >
                                    Free
                                </td>
                                <td className="px-6 py-4 text-sm text-navy font-semibold">Rp 0</td>
                                <td className="px-6 py-4">
                                    <span className="flex gap-x-2 items-center">
                                        <Image src="/green.svg" alt="" width={24} height={24} priority={true} />
                                        <h1 className="text-sm text-navy font-semibold">Success</h1>
                                    </span>
                                </td>
                                <td className="px-6 py-4 w-full lg:w-[140px]">
                                    <button
                                        className="bg-ungu text-sm font-semibold rounded-lg flex justify-center w-full px-4 py-3 text-white"
                                    >
                                        Invoice
                                    </button>
                                </td>
                            </tr>
                            <tr className="flex flex-col md:table-row">
                                <td className="px-6 py-4 text-sm text-navy font-semibold">4</td>
                                <td className="px-6 lg:px-0 lg:py-6 flex justify-center lg:block">
                                    <Image
                                        src="/card 1.png"
                                        alt=""
                                        className="lg:w-[100px] lg:h-[50px] w-full h-full rounded-xl"
                                        width={100}
                                        height={50}
                                        priority={true}
                                    />
                                </td>
                                <td
                                    className="px-6 py-4 text-sm text-navy font-semibold w-auto lg:w-[270px]"
                                >
                                    Unleashing Creativity: Understanding Design in all Dimensions
                                </td>
                                <td
                                    className="px-6 py-4 text-sm text-navy font-semibold w-auto md:w-[140px]"
                                >
                                    Free
                                </td>
                                <td className="px-6 py-4 text-sm text-navy font-semibold">Rp 0</td>
                                <td className="px-6 py-4">
                                    <span className="flex gap-x-2 items-center">
                                        <Image src="/green.svg" alt="" width={24} height={24} priority={true} />
                                        <h1 className="text-sm text-navy font-semibold">Success</h1>
                                    </span>
                                </td>
                                <td className="px-6 py-4 w-full lg:w-[140px]">
                                    <button
                                        className="bg-ungu text-sm font-semibold rounded-lg flex justify-center w-full px-4 py-3 text-white"
                                    >
                                        Invoice
                                    </button>
                                </td>
                            </tr>
                            <tr className="flex flex-col md:table-row">
                                <td className="px-6 py-4 text-sm text-navy font-semibold">5</td>
                                <td className="px-6 lg:px-0 lg:py-6 flex justify-center lg:block">
                                    <Image
                                        src="/card 3.png"
                                        alt=""
                                        className="lg:w-[100px] lg:h-[50px] w-full h-full rounded-xl"
                                        width={100}
                                        height={50}
                                        priority={true}
                                    />
                                </td>
                                <td
                                    className="px-6 py-4 text-sm text-navy font-semibold w-auto lg:w-[270px]"
                                >
                                    Unleashing Creativity: Understanding Design in all Dimensions
                                </td>
                                <td
                                    className="px-6 py-4 text-sm text-navy font-semibold w-auto md:w-[140px]"
                                >
                                    Free
                                </td>
                                <td className="px-6 py-4 text-sm text-navy font-semibold">Rp 0</td>
                                <td className="px-6 py-4">
                                    <span className="flex gap-x-2 items-center">
                                        <Image src="/green.svg" alt="" width={24} height={24} priority={true}/>
                                        <h1 className="text-sm text-navy font-semibold">Success</h1>
                                    </span>
                                </td>
                                <td className="px-6 py-4 w-full lg:w-[140px]">
                                    <button
                                        className="bg-ungu text-sm font-semibold rounded-lg flex justify-center w-full px-4 py-3 text-white"
                                    >
                                        Invoice
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </Memberlayout>
    )
}