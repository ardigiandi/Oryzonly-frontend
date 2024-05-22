import Memberlayout from "@/components/layouts/Memberlayout"
import Image from "next/image"

const Card = [
    {
        image: '/card 1.png',
        title: 'Coding Odyssey: Journey into the World of Programming',
        level: 'Premium Class'
    },
    {
        image: '/card 2.png',
        title: 'Coding Odyssey: Journey into the World of Programming',
        level: 'Premium Class'
    },
    {
        image: '/card 3.png',
        title: 'Coding Odyssey: Journey into the World of Programming',
        level: 'Premium Class'
    },
    {
        image: '/card 2.png',
        title: 'Coding Odyssey: Journey into the World of Programming',
        level: 'Premium Class'
    },
    {
        image: '/card 1.png',
        title: 'Coding Odyssey: Journey into the World of Programming',
        level: 'Premium Class'
    },
    {
        image: '/card 3.png',
        title: 'Coding Odyssey: Journey into the World of Programming',
        level: 'Premium Class'
    },
    {
        image: '/card 2.png',
        title: 'Coding Odyssey: Journey into the World of Programming',
        level: 'Premium Class'
    },
]

export default function Courseviews() {
    return (
        <Memberlayout>
            <div className="py-[40px] flex flex-col lg:ml-[300px] ">
                <div className="flex flex-col mx-7 gap-y-4">
                    <h1 className="text-3xl text-navy font-semibold tracking-[-0.7px]">
                        My Courses
                    </h1>
                    <p className="text-base text-gray-500 font-semibold tracking-[-0.7px]">
                        Discover all the courses youre enrolled in, all in one place!
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row mx-7 mt-12 gap-x-4 gap-y-4">
                    <div
                        className="bg-ungu text-base font-semibold text-white px-10 py-3 rounded-full flex justify-center"
                    >
                        All Courses
                    </div>
                    <div
                        className="bg-soft text-base font-semibold text-ungu px-10 py-3 rounded-full flex justify-center"
                    >
                        Premium
                    </div>
                    <div
                        className="bg-soft text-base font-semibold text-ungu px-10 py-3 rounded-full flex justify-center"
                    >
                        Finished
                    </div>
                </div>

                <div
                    className="flex flex-wrap mx-7 mt-12 gap-x-4 gap-y-4 justify-center lg:justify-start"
                >
                    {Card.map((list, index) => (
                        <div key={index}>
                            <div className="flex flex-col bg-white p-5 rounded-lg w-[290px]">
                                <Image src={list.image} alt="" className="" width={290} height={290} priority={true} />
                                <h1 className="text-base w-[279px] mt-6">
                                    {list.title}
                                </h1>
                                <p className="text-sm text-gray-500 font-semibold mt-2">
                                    Premium Class
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Memberlayout>
    )
}