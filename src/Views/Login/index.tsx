import Image from "next/image"

export default function Loginviews() {
    return (
        <section className="max-w-6xl mx-auto flex flex-row my-20 justify-between gap-x-[150px]">
            <Image src={"/login.png"} width={500} height={500} alt="login" />
            <div className="flex flex-col mt-4">
                <h1 className="text-2xl text-navy font-semibold ">
                    Hi, Welcome Back!
                </h1>
                <p className="text-base text-gray-500 mt-4">Glad to see you again! Enter your credentials to access your account and explore what awaits you. We’re thrilled to have you back!
                </p>
                <div className="flex flex-col mt-12 gap-y-5">
                    <div className="flex flex-col gap-y-2 ">
                        <label htmlFor="email" className="text-base text-navy font-semibold">Email Address</label>
                        <div className="flex gap-x-2 border-2 px-4 py-3 rounded-md">
                            <Image src={"/sms.svg"} alt="" width={24} height={24} />
                            <input type="email" placeholder="cth: example@email.com" id="email" name="email" className="w-full outline-none" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-2 ">
                        <label htmlFor="Password" className="text-base text-navy font-semibold">Password</label>
                        <div className="flex gap-x-2 border-2 px-4 py-3 rounded-md">
                            <Image src={"/sms.svg"} alt="" width={24} height={24} />
                            <input type="password" placeholder="cth: example@email.com" id="Password" name="Password" className="w-full outline-none" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}