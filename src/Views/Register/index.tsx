import Image from "next/image"
import { FormEvent, useEffect } from "react"
import { useRouter } from "next/router";
import { useState } from "react";

export default function Registerviews() {

    const { push } = useRouter()

    const handlerRegister = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
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
        const handleButtonClick = () => {
            setInputValue('')
        }

        // Color Changing Input
        const [inputColor , setInputColor ] = useState(false)

        useEffect(() => {
            if(inputValue === "") {
                setInputColor(false)
            } else {
                setInputColor(true)
            }
        }, [inputValue])
        const handlefocus = () => {
            setInputColor(true )
        }

        return (
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between my-[50px] lg:my-[120px] gap-x-[150px] px-5 lg:px-0">
                <Image src="/register.png" width={500} height={500} alt={"register"} priority={true} className="hidden lg:block" />
                <div className="flex flex-col">
                    <h1 className="text-2xl text-navy font-semibold">Welcome Aboard!</h1>
                    <p className="text-base text-gray-500 mt-4">We’re excited to have you join our community. Begin your journey with us by creating your account.
                    </p>

                    <form onSubmit={handlerRegister} className="flex flex-col gap-y-5 mt-12">
                        <div className="flex flex-col gap-y-2">
                            <label htmlFor="fullname" className="text-base text-navy font-semibold">Full Name</label>
                            <div style={{border :inputColor ? "2px solid #5D00FF" : "2px solid #DDE5E9"}} className="flex flex-row gap-x-2 border-2 rounded-md py-[14px] px-4">
                                <Image src="/user.svg" width={24} height={24} alt={"user"} priority={true} />
                                <input onFocus={handlefocus} type="text" placeholder="enter your name.." id="fullname" name="fullname" className="w-full focus:outline-none focus:border-ungu" value={inputValue} onChange={handleInputChange} />
                            </div>
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <label htmlFor="email" className="text-base text-navy font-semibold">Email Address</label>
                            <div className="flex flex-row gap-x-2 border-2 rounded-md py-[14px] px-4">
                                <Image src="/sms.svg" width={24} height={24} alt={"sms"} priority={true} />
                                <input type="email" placeholder="cth: example@email.com" id="email" name="email" className="focus:outline-none w-full"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <label htmlFor="password" className="text-base text-navy font-semibold">Password</label>
                            <div className="flex flex-row gap-x-2 border-2 rounded-md py-[14px] px-4">
                                <Image src="/lock.svg" width={24} height={24} alt={"lock"} priority={true} />
                                <input onChange={(password) => setPassword(password.target.value)} type={passwordVisible ? "text" : "password"} placeholder="enter your password" id="password" name="password" className="w-full focus:outline-none" />

                                <div onClick={tooglePasswordVisibility} className="text-gray-300" >
                                    {passwordVisible ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                        </div>
                        <button style={{ backgroundColor: formFilled ? "#5D00FF" : "#BFBFBF" }} type="submit" onClick={handleButtonClick} className="w-full py-[14px] text-base font-semibold text-white rounded-md mt-5">Create Your Account</button>
                    </form>
                </div>
            </div>
        )
    }