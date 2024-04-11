import Image from "next/image"

const Hero2 = () => {
    return (
        <section
            className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-center mt-24 items-center gap-x-[122px] px-5 lg:px-0"
        >
            <Image src="/Main Hero 2.png" alt="" width={500} height={500} className="w-1/2 hidden lg:block" />

            <div className="flex flex-col gap-y-8 lg:items-start">
                <h1
                    className="text-3xl lg:text-[40px] text-center lg:text-left font-semibold text-navy tracking-[-0.7px]"
                >
                    Unlock Your Potential with Knowledge.
                </h1>
                <p className="text-sm lg:text-base text-gray-700 text-center lg:text-left tracking-[-0.7px]">
                    Our educational platform offers a gateway to enriching experiences and
                    empowering knowledge. Dive into a diverse array of subjects, curated
                    by experts, and embark on a journey of lifelong learning
                </p>
                <a
                    href=""
                    className="bg-ungu px-9 py-4 lg:px-[60px] lg:py-[18px] rounded-xl text-base lg:text-lg font-semibold text-white text-center"
                >Start Learning Now!</a
                >
            </div>
        </section>
    )
}

export default Hero2