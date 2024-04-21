import Image from "next/image"

const Person = [
    {
        image: '/profile 1.svg',
        name: 'Jane Cooper',
        profesi: 'Web Designer',
        rating: '4.8',
        description: "I've never been more engaged in learning until I discovered this platform. The courses are not only informative but also incredibly enjoyable. Highly recommended!"
    },
    {
        image: '/profile 2.svg',
        name: 'Devon Lane',
        profesi: 'Programmer',
        rating: '4.8',
        description: "As a busy professional, I appreciate the flexibility this platform offers. I can learn at my own pace and still get the support I need from instructors. Its been a game-changer for me."
    },
    {
        image: '/profile 3.svg',
        name: 'Jacob Jones',
        profesi: 'Frontend Developer',
        rating: '4.8',
        description: "I've recommended this platform to all my friends and colleagues. The quality of instruction, the user-friendly interface, and the affordability make it stand out from other online learning platforms."
    },
    {
        image: '/profile 4.svg',
        name: 'Kristin Watson',
        profesi: 'President of Sales',
        rating: '4.8',
        description: 'I was skeptical about online learning at first, but this platform exceeded my expectations. The community aspect and interactive elements make it feel like a real classroom experience.'
    },
]

const Testimoni = () => {

    return (
        <div
            className="flex flex-wrap justify-center gap-x-5 gap-y-5 mt-12 px-5 lg:px-0"
        >
            {Person.map((l, index) => (
                <div key={index} className="border-2 rounded-xl py-5 px-5 space-y-5 lg:space-y-8 w-[555px]">
                    <div className="flex gap-x-3 items-center">
                        <Image src={l.image} alt="" width={80} height={80} priority={true} className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px]" />
                        <div className="flex flex-col w-full">
                            <h1 className="text-base lg:text-lg text-navy font-semibold tracking-[-0.7px]">{l.name}</h1>
                            <p className="text-sm lg:text-base text-gray-500 font-semibold tracking-[-0.7px]">
                                {l.profesi}
                            </p>
                        </div>
                        <div className="flex justify-end w-full gap-x-3">
                            <Image src="/Star.svg" alt="" width={20} height={20} priority={true} className="w-[20px] h-[20px]" />
                            <h1 className="text-base font-semibold text-navy tracking-[-0.7px]">{l.rating}</h1>
                        </div>
                    </div>
                    <h1 className="text-sm lg:text-base text-gray-500 font-semibold tracking-[-0.7px]">
                        {l.description}
                    </h1>
                </div>
            ))}
        </div>
    )
}

export default Testimoni