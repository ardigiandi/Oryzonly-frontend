import Image from "next/image"
import Link from "next/link"

export default function errorPage() {
    return (
        <section className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between mt-20 items-center px-5 lg:px-0 gap-y-6">
            <div className="flex flex-col gap-y-4 items-start">
                <h1 className="text-2xl lg:text-4xl font-semibold text-navy">Oops! We Couldnt Find the
                    Page Youre Looking For
                </h1>
                <p className="text-sm lg:text-base text-gray-600 font-se">It seems the page you are trying to access might have been moved,
                    deleted, or never existed. Please check the URL for any typos and
                    try again.
                </p>
                <button className="bg-ungu py-4 px-12 lg:px-[60px] text-sm lg:text-base font-semibold text-white rounded-md ">
                    <Link href={"/"}>Back to Home</Link>
                </button>
            </div>
            <Image src="/404.png" alt="404" width={650} height={500} />
        </section>  
    )
}