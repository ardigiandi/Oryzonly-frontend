import Image from "next/image"

type Propstypes = {
    children : React.ReactNode
}

const AuthCardLanding = (props : Propstypes) => {

    const { children } = props;
    return (
        <div className="max-w-6xl mx-auto flex flex-col mt-[120px]">
            <div className="text-center space-y-3">
                <h1 className="text-2xl lg:text-4xl font-semibold text-navy tracking-[-0.7px]">
                    See What People Are Saying
                </h1>
                <p className="text-sm lg:text-base text-gray-500 font-semibold tracking-[-0.7px]">
                    Get Inspired by Real Experiences - Dive into Our Testimonials Section
                    and Hear from Those Who <br />
                    Have Experienced the Difference.
                </p>
            </div>
            {children}
        </div>
    )
}

export default AuthCardLanding