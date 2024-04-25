import Image from 'next/image'

type Propstypes = {
    children: React.ReactNode
}

const AuthCardLanding = (props : Propstypes) => {

    const { children } = props
    return (
        <div className="flex flex-col mt-24">
            <div
                className="lg:mx-10 flex flex-col lg:flex-row justify-between lg:items-center px-5 lg:px-0 gap-y-5"
            >
                <div className="space-y-4">
                    <h1 className="text-2xl lg:text-4xl font-semibold text-navy tracking-[-0.7px]">
                        Browse Our Popular Class</h1>
                    <p className="text-sm lg:text-base text-gray-600 lg:w-[530px] tracking-[-0.7px]">
                        Discover our popular classNamees designed to cater to various learning
                        interests and needs. Explore diverse topics and difficulty level
                        swith our expert instructors to broaden your knowledge.
                    </p>
                </div>
                <div className="flex flex-row gap-x-4 justify-end cursor-pointer">
                    <h1 className="text-sm lg:text-base font-semibold text-navy tracking-[-0.7px]">
                        See All Courses
                    </h1>
                    <Image src="/arrow-right.svg" alt="" className="w-[20px]" width={20} height={20} priority={true} />
                </div>
            </div>
            {children}
        </div >
    )
}

export default AuthCardLanding