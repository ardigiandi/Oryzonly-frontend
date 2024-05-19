import Image from "next/image"
import Cardcourse from "./card"


const list = [
    {
        image: '/card 1.png',
        title: 'Coding Odyssey: Journey into the World of Programming',
    },
    {
        image: '/card 2.png',
        title: 'Unleashing Creativity: Understanding Design in all Dimensions',
    },
    {
        image: '/card 3.png',
        title: 'Digital Mastery: Unleashing Your Marketing Potential',
    }, 
]

const Courseviews = () => {
    return (
        <section className="flex flex-col justify-center mt-[80px] lg:mt-[104px]">
            <div className="flex flex-col items-center">
                <h1 className="text-center text-lg lg:text-4xl font-semibold mx-5 lg:mx-0 ">
                    Explore Our Inspiring Range of Courses
                </h1>
                <p className="text-center mt-4 text-sm lg:text-base mx-5 lg:mx-0 lg:w-[724px]">
                    From personal development to professional growth, explore a diverse
                    selection of topics tailored to meet
                    your interests and aspirations
                </p>
            </div>


            <section className="max-w-6xl mx-auto justify-center mt-[50px] w-full">
                <div className="flex gap-x-4 mx-5">
                    <div className="border-2 py-5 px-7 rounded-xl flex gap-x-3 w-full">
                        <Image src="/search 1.svg" alt="" width={24} height={24} priority={true} className="w-[20px] lg:w-[24px]" />
                        <input
                            type="text"
                            placeholder="Search your courses"
                            className="text-sm lg:text-xl outline-none text-gray-600 w-full"
                        />
                    </div>
                    <div className="border-2 py-5 px-9 rounded-xl items-center ">
                        <Image src="/setting-4.svg" alt="" className="cursor-pointer " width={24} height={24} priority={true} />
                    </div>
                </div>
            </section>

            <div
                className="flex justify-center flex-wrap gap-x-5 gap-y-5 mt-12 mx-2"
            >
                <Cardcourse cardList={list} />
            </div>
        </section>

    )
}

export default Courseviews