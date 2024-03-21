import Image from "next/image"
import { FormEvent, useEffect } from "react"
import { useRouter } from "next/router";
import { useState } from "react";

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
    const handleInputChange = (e: any) => {
        setInputValue(e.target.value)
    }

    // Focus Input
    const [fullnameFocus, setFullnamefocus] = useState(false)
    const [emailFocus, setEmailFocus] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false)


    return (
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between my-[50px] lg:my-[120px] gap-x-[150px] px-5 lg:px-0">
            <Image src="/register.png" width={500} height={500} alt={"register"} priority={true} className="hidden lg:block" />
            <div className="flex flex-col">
                <h1 className="text-2xl text-navy font-semibold">Welcome Aboard!</h1>
                <p className="text-base text-gray-500 mt-4">We’re excited to have you join our community. Begin your journey with us by creating your account.
                </p>

                <form className="flex flex-col gap-y-5 mt-12">

                    {/* Fullname */}
                    <div className="flex flex-col gap-y-2">
                        <label htmlFor="fullname" className="text-base text-navy font-semibold">Full Name</label>
                        <div className={` ${fullnameFocus ? 'border-ungu' : 'border-gray-200'} flex flex-row gap-x-2 border-2 rounded-md py-[14px] px-4`}>

                            <Image src="/user.svg" width={24} height={24} alt={"user"} priority={true} />

                            <input onFocus={() => setFullnamefocus(true)} onBlur={() => setFullnamefocus(false)} type="text" placeholder="enter your name.." id="fullname" name="fullname" className="w-full focus:outline-none " value={inputValue} onChange={handleInputChange} />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-y-2">
                        <label htmlFor="email" className="text-base text-navy font-semibold">Email Address</label>
                        <div className={`${emailFocus ? 'border-ungu' : 'border-gray-200'} flex flex-row gap-x-2 border-2 rounded-md py-[14px] px-4`}>

                            <Image src="/sms.svg" width={24} height={24} alt={"sms"} priority={true} />

                            <input onFocus={() => setEmailFocus(true)} onBlur={() => setEmailFocus(false)} type="email" placeholder="cth: example@email.com" id="email" name="email" className="focus:outline-none w-full bg-transparent"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="flex flex-col gap-y-2">
                        <label htmlFor="password" className="text-base text-navy font-semibold">Password</label>
                        <div className={`${passwordFocus ? 'border-ungu' : 'border-gray-200'} flex flex-row gap-x-2 border-2 rounded-md py-[14px] px-4`}>

                            <Image src="/lock.svg" width={24} height={24} alt={"lock"} priority={true} />

                            <input onFocus={() => setPasswordFocus(true)} onBlur={() => setPasswordFocus(false)} onChange={(password) => setPassword(password.target.value)} type={passwordVisible ? "text" : "password"} placeholder="enter your password" id="password" name="password" className="w-full focus:outline-none" />

                            <div onClick={tooglePasswordVisibility} className="text-gray-300" >
                                {passwordVisible ? <Image src="/eye-open.svg" width={24} height={24} alt={"eye"} priority={true} /> : <Image src="/eye-close.svg" width={24} height={24} alt={"eye"} priority={true} />}
                            </div>
                        </div>
                    </div>
                </form>

                {/* Forget Password */}
                <div className="w-full flex justify-end mt-5">
                    <button className="text-base text-gray-500 font-semibold cursor-pointer">Forgot Password?</button>
                </div>

                <div className="flex flex-col gap-y-5 mt-5">
                {/* Button Register */}
                <button  onClick={handleRegister} style={{ backgroundColor: formFilled ? "#5D00FF" : "#BFBFBF" }} type="submit" className="w-full py-[14px] text-base font-semibold text-white rounded-md">Create Your Account
                </button>

                {/* Button Register From Google */}
                <button className="flex flex-row gap-x-2 justify-center border-2 rounded-md py-4
                    ">
                    <Image src="/ic_google.svg" width={20} height={20} alt="google" priority={true} />
                    <h1 className="text-base text-navy font-semibold">Sign in with Google</h1>
                </button>
                </div>
            </div>
        </div>
    )
}