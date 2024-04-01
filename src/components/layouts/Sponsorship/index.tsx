import Image from "next/image"

const Sponsorship = () => {
    return (
        <section
            className="max-w-6xl mx-auto flex flex-col justify-center mt-16 lg:mt-12 px-5 lg:px-0"
        >
            <div className="text-center space-y-4">
                <h1 className="text-2xl lg:text-4xl font-semibold text-navy">
                    Our Great Allies
                </h1>
                <p className="text-sm lg:text-base text-gray-700">
                    Within Our Partnership, we join forces with outstanding allies towards
                    shared success.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-x-14 gap-y-8 mt-7">
                <Image
                    src="/coursera_logo.svg.svg"
                    alt=""
                    width={182}
                    height={42}
                    className="w-[110px] lg:w-[183px]"
                />
                <Image
                    src="/course_hero_logo.svg.svg"
                    alt=""
                    width={182}
                    height={42}
                    className="w-[110px] lg:w-[183px]"
                />
                <Image
                    src="/tokopedia_logo.svg.svg"
                    alt=""
                    width={182}
                    height={42}
                    className="w-[110px] lg:w-[183px]"
                />
                <Image
                    src="/harvard_university_logo.svg.svg"
                    alt=""
                    width={182}
                    height={42}
                    className="w-[110px] lg:w-[183px]"
                />
                <Image
                    src="/oxford_university_press_logo.svg.svg"
                    alt=""
                    width={182}
                    height={42}
                    className="w-[110px] lg:w-[183px]"
                />
            </div>
        </section>
    )
}

export default Sponsorship