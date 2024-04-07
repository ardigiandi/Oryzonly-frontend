import Image from "next/image"
import { useRouter } from "next/router"

const Hero1 = () => {

    const {push} = useRouter()
    const handlepush = () => {
        push('/mentor')
    }
    return (
        <section
            className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between mt-16 items-center px-5 lg:px-0"
        >
            <div className="flex flex-col gap-y-8 lg:items-start">
                <h1
                    className="text-3xl lg:text-[40px] text-center lg:text-left font-semibold text-navy leading-tight"
                >
                    Exploration of Science and Creativity With{' '}
                    <span className="text-ungu">Oryzonly</span>
                </h1>
                <p className="lg:text-base text-gray-600 text-sm text-center lg:text-left">
                    Welcome to Oryzonly, your place to explore knowledge and channel your
                    creativity. Get access to expert courses and creative challenges for
                    your unlimited personal growth.
                </p>
                <a
                    href=""
                    className="bg-ungu px-9 py-4 lg:px-[60px] flex justify-center lg:py-[18px] text-sm lg:text-base text-white font-semibold rounded-xl"
                >Start Learning Now!</a>
            </div>

            <button onClick={handlepush} className="mt-10">here</button>

            <Image src="/main hero.png" alt="" width={500} height={500} priority={true} className="w-1/2 hidden lg:block" />
        </section>
    )
}

export default Hero1