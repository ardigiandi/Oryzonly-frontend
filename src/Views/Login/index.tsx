import Image from "next/image"
import { useState } from "react"

export default function Loginviews() {

    // Password Visible
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [password, setPassword] = useState("")
    const tooglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible)
    }

    return (
        <div className="max-w-6xl mx-auto flex flex-row my-20 justify-between gap-x-[100px]">
            <Image src={"/login.png"} width={500} height={500} alt="login" priority={true} />
            <div className="flex flex-col mt-4">
                <h1 className="text-2xl text-navy font-semibold ">
                    Hi, Welcome Back!
                </h1>
                <p className="text-base text-gray-500 mt-4">Glad to see you again! Enter your credentials to access your account and explore what awaits you. We’re thrilled to have you back!
                </p>
                <form className="flex flex-col mt-12 gap-y-5">

                    {/* email */}
                    <div className="flex flex-col gap-y-2  duration-300 cursor-pointer bg-white">
                        <label htmlFor="email" className="text-base text-navy font-semibold">Email Address</label>
                        <div className="flex gap-x-2 border-2 px-4 py-3 rounded-md">
                            <Image src="/sms.svg" alt="sms" width={24} height={24} priority={true} />
                            <input type="email" placeholder="cth: example@email.com" id="email" name="email" className="w-full bg-transparent focus:outline-none" />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="flex flex-col gap-y-2 ">
                        <label htmlFor="Password" className="text-base text-navy font-semibold">Password</label>
                        <div className="flex gap-x-2 border-2 px-4 py-3 rounded-md">
                            <Image src="/lock.svg" alt="lock" width={24} height={24} priority={true} />
                            <input onChange={(password) => setPassword(password.target.value)} type={passwordVisible ? "text" : "password"} placeholder="Enter your password" id="Password" name="Password" className="w-full outline-none" />

                            <div onClick={tooglePasswordVisibility} className="text-gray-400">
                                {passwordVisible ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                    </svg>
                                )}
                            </div>
                        </div>
                    </div>
                </form>


            </div>
        </div>
    )
}
