import Image from "next/image"
import { FormEvent, useEffect } from "react"
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

export default function Registerviews() {

    const { push } = useRouter()

    const handleRegister = () => {
        push("/auth/login")
    }

    // Password Visible
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [password, setPassword] = useState("")
    const tooglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible)
    }

    // Button Color
    const [formFilled, setFormFilled] = useState(false)
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        if (inputValue === "") {
            setFormFilled(false)
        } else {
            setFormFilled(true)
        }
    }, [inputValue])
    const handleInputValue = (e: any) => {
        setInputValue(e.target.value)
    }

    return (
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between my-[50px] lg:my-[90px] gap-x-[150px] px-5 lg:px-0">
            <Image src="/register.png" width={500} height={500} alt={"register"} priority={true} className="hidden lg:block" />
            <div className="flex flex-col">
                <h1 className="text-2xl text-navy font-semibold">Welcome Aboard!</h1>
                <p className="text-base text-gray-500 mt-4">We’re excited to have you join our community. Begin your journey with us by creating your account.
                </p>

                <form className="flex flex-col gap-y-5 mt-12">
                    {/* Fullname */}
                    <div>
                        <label htmlFor="inputWithImage">
                            <h1 className="text-base text-navy font-semibold">Fullname</h1>
                        </label>
                        <div className="relative mt-2">
                            <input
                                id="inputWithImage"
                                type="text"
                                className="w-full px-10 py-[14px] rounded-lg border-2 border-gray-300 focus:outline-none focus:border-ungu"
                                placeholder="enter your name.."
                                value={inputValue}
                                onChange={handleInputValue}
                            />
                            <div className="absolute inset-y-0 left-3 flex items-center pr-3 pointer-events-none">
                                <Image src="/user.svg" width={20} height={20} alt="search" />
                            </div>
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="inputWithImage">
                            <h1 className="text-base text-navy font-semibold">Email Address</h1>
                        </label>
                        <div className="relative mt-2">
                            <input
                                id="inputWithImage"
                                type="email"
                                className="w-full px-10 py-[14px] rounded-lg border-2 border-gray-300 focus:outline-none focus:border-ungu"
                                placeholder="cth: example@email.com"
                            />
                            <div className="absolute inset-y-0 left-3 flex items-center pr-3 pointer-events-none">
                                <Image src="/sms.svg" width={20} height={20} alt="search" />
                            </div>
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="inputWithImage">
                            <h1 className="text-base text-navy font-semibold">Password</h1>
                        </label>
                        <div className="relative mt-2">
                            <input
                                id="inputWithImage"
                                type={passwordVisible ? "text" : "password"}
                                className="w-full px-10 py-[14px] rounded-lg border-2 border-gray-300 focus:outline-none focus:border-ungu"
                                placeholder="••••••••••••"
                                onChange={(password) => setPassword(password.target.value)}
                            />
                            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                <Image src="/lock.svg" width={20} height={20} alt="search" />
                            </div>
                            <div onClick={tooglePasswordVisibility} className="absolute inset-y-0 right-3 flex items-center">
                                {passwordVisible ? <Image src="/eye-open.svg" width={20} height={20} alt="eyes" /> : <Image src="/eye-close.svg" width={20} height={20} alt="eyes" />}
                            </div>
                        </div>
                    </div>
                </form>

                {/* Forget Password */}
                <div className="w-full flex justify-end mt-5">
                    <button type="submit" className="text-base text-gray-500 font-semibold cursor-pointer">Forgot Password?</button>
                </div>

                <div className="flex flex-col gap-y-5 mt-5">
                    {/* Button Register */}
                    <button onClick={handleRegister} style={{ backgroundColor: formFilled ? "#5D00FF" : "#BFBFBF" }} type="submit" className="w-full py-[14px] text-base font-semibold text-white rounded-md">Create Your Account
                    </button>

                    {/* Button Register From Google */}
                    <button className="flex flex-row gap-x-2 justify-center border-2 rounded-md py-4
                    ">
                        <Image src="/ic_google.svg" width={20} height={20} alt="google" priority={true} />
                        <h1 className="text-base text-navy font-semibold">Sign in with Google</h1>
                    </button>
                    
                    <p className="flex w-full justify-center text-base">Have an Account? <Link href="/auth/login" className="text-ungu px-1 font-semibold">Login</Link></p>
                </div>
            </div>
        </div>
    )
}