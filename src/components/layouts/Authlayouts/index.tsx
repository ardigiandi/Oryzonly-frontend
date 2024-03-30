import Image from "next/image"
import Link from "next/link"

type Propstypes = {
    title: string;
    description: string;
    children: React.ReactNode;
    image: string;
    link: string;
    linkText: string;
    text: string;
}

const AuthLayouts = (props: Propstypes) => {
    const { title, description, children, image, link, linkText, text } = props
    return (
        <section className="max-w-6xl mx-auto flex justify-between my-[50px] lg:my-[120px] gap-x-[100px] px-5 lg:px-0">
            <Image src={image} width={600} height={600} alt="Login" priority={true} className="hidden lg:block" />
            <div className="flex flex-col mt-10">
                <h1 className="text-3xl text-navy font-semibold">{title}</h1>
                <p className="text-base text-gray-500 mt-4">
                    {description}
                </p>
                {children}
                <h1 className="flex w-full justify-center text-base mt-5">{linkText}<Link href={link} className="text-ungu font-semibold px-1">{text}</Link></h1>
            </div>
        </section>
    )
}

export default AuthLayouts