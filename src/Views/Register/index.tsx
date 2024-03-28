import Image from "next/image"
import { FormEvent, useEffect } from "react"
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";

export default function Registerviews() {

    // push
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
                    <Input
                        label="Fullname"
                        id="fullname"
                        name="fullname"
                        Image="/user.svg"
                        type="text"
                        placeholder="enter your name.."
                        value={inputValue}
                        onChange={handleInputValue}
                    />

                    <Input
                        label="Email Address"
                        id="email"
                        name="email"
                        Image="/sms.svg"
                        type="email"
                        placeholder="cth: example@email.com"
                    />

                    <Input
                        label="Password"
                        id="password"
                        name="password"
                        Image="/lock.svg"
                        type={passwordVisible ? "text" : "password"}
                        placeholder="enter your password.."
                        passwordvisible={passwordVisible}
                        onClick={tooglePasswordVisibility}
                    >
                        {passwordVisible ? <Image src="/eye-open.svg" width={20} height={20} alt="eyes" priority={true} /> : <Image src="/eye-close.svg" width={20} height={20} alt="eyes" priority={true} />}
                    </Input>
                </form>

                <div className="w-full flex justify-end mt-5">
                    <button type="submit" className="text-base text-gray-500 font-semibold cursor-pointer">Forgot Password?</button>
                </div>

                <Button
                    onClick={handleRegister}
                    style={{ backgroundColor: formFilled ? "#5D00FF" : "#BFBFBF" }}
                    className="text-base text-white font-semibold"
                    type="submit"
                >
                    Create Your Account
                </Button>

                <Button
                    Image="/ic_google.svg"
                    className="text-base text-navy font-semibold"
                    border="border-2"
                    type="submit"
                >
                    Sign up with Google
                </Button>

                <p className="flex w-full justify-center text-base">Have an Account? <Link href="/auth/login" className="text-ungu px-1 font-semibold">Login</Link></p>
            </div>
        </div>
    )
}