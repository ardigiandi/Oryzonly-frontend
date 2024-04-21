import Image from 'next/image'

const Cardlist = [
    {
        id: 1,
        image: '/card 1.png',
        title: 'Coding Odyssey: Journey into the World of Programming',
        price: 'Rp 240,000',
    },
    {
        id: 2,
        image: '/card 2.png',
        title: 'Unleashing Creativity: Understanding Design in all Dimensions',
        price: 'Free',
    },
    {
        id: 3,
        image: '/card 3.png',
        title: 'Digital Mastery: Unleashing Your Marketing Potential',
        price: 'Rp 250,000',
    },
]

const Cardlandingpage = () => {
    return (
        <div className="flex flex-col mt-24">
            <div
                className="lg:mx-10 flex flex-col lg:flex-row justify-between lg:items-center px-5 lg:px-0 gap-y-5"
            >
                <div className="space-y-4">
                    <h1 className="text-2xl lg:text-4xl font-semibold text-navy tracking-[-0.7px]">
                        Browse Our Popular Class</h1>
                    <p className="text-sm lg:text-base text-gray-600 lg:w-[500px] tracking-[-0.7px]">
                        Discover our popular classNamees designed to cater to various learning
                        interests and needs. Explore diverse topics and difficulty level
                        swith our expert instructors to broaden your knowledge.
                    </p>
                </div>
                <div className="flex flex-row gap-x-4 justify-end">
                    <h1 className="text-sm lg:text-base font-semibold text-navy tracking-[-0.7px]">
                        See All Courses
                    </h1>
                    <Image src="/arrow-right.svg" alt="" className="w-[20px]" width={20} height={20} priority={true} />
                </div>
            </div>


            <div className='flex flex-col lg:flex-row justify-center gap-x-5 gap-y-5 px-11 lg:px-6 mt-12'>
                {Cardlist.map((item, index) => (
                    <div key={index} className="flex flex-col gap-y-4 lg:gap-y-6 border-2 rounded-xl px-5 py-5">
                        <Image src={item.image} alt="" className="w-[355px]" priority={true} width={355} height={200} />
                        <div
                            className="flex flex-col gap-y-5 lg:flex-row justify-between items-start lg:items-center"
                        >
                            <h1 className="text-sm font-semibold w-[235px] tracking-[-0.7px]">
                                {item.title}
                            </h1>
                            <p className="text-sm text-gray-500 tracking-[-0.7px]">{item.price}</p>
                        </div>
                        <a
                            href=""
                            className="bg-ungu text-sm lg:text-base flex justify-center py-2 lg:py-4 text-white font-semibold rounded-xl tracking-[-0.7px] w-full"
                        >Join Now!</a>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Cardlandingpage