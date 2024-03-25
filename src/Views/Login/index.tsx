import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Link from "next/link"
import Input from "@/components/ui/input"
import Button from "@/components/ui/button"

export default function Loginviews() {

    const { push } = useRouter()
    const handleLogin = () => {
        push("/")
    }

    // Password Visible
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [password, setPassword] = useState('')

    const tooglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible)
    }

    // button Color
    const [isFilled, setIsFilled] = useState(false)
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        if (inputValue === '') {
            setIsFilled(false)
        } else {
            setIsFilled(true)
        }
    }, [inputValue])
    const handleInputValue = (e: any) => {
        setInputValue(e.target.value)
    }


    return (
        <section className="max-w-6xl mx-auto flex justify-between my-[50px] lg:my-[120px] gap-x-[100px] px-5 lg:px-0">
            <Image src="/Login.png" width={600} height={600} alt="Login" priority={true} className="hidden lg:block" />

            <div className="flex flex-col mt-10">
                <h1 className="text-3xl text-navy font-semibold">Hi, Welcome Back!</h1>
                <p className="text-base text-gray-500 mt-4">Glad to see you again! Enter your credentials to access your account
                    and explore what awaits you. Were thrilled to have you back!</p>

                <form action="" className="mt-[50px] space-y-5">
                    <Input
                        label="Email Address"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="cth: example@email.com"
                        Image="/sms.svg"
                        onChange={handleInputValue}
                    />

                    <Input
                        label="Password"
                        type={passwordVisible ? "text" : "password"}
                        name="password"
                        id="password"
                        placeholder="Password"
                        Image="/lock.svg"
                        onChange={handleInputValue}
                        passwordvisible={passwordVisible}
                        onClick={tooglePasswordVisibility}
                    >
                        {passwordVisible ? (
                            <Image src="/eye-open.svg" width={24} height={24} alt="eye" priority={true} />
                        ) : (
                            <Image src="/eye-close.svg" width={24} height={24} alt="eye" priority={true} />
                        )}
                    </Input>
                </form>

                <div className="flex w-full justify-end mt-5 cursor-pointer">
                    <h1 className="text-base text-gray-600">Forgot Password?</h1>
                </div>

                <Button
                    onClick={handleLogin}
                    className="text-base text-white font-semibold"
                    style={{ backgroundColor: isFilled ? "#5D00FF" : "#BFBFBF" }}
                    type="submit"
                >
                    Access Your Account
                </Button>
                <Button
                    className="text-base text-navy font-semibold"
                    Image="/ic_google.svg"
                    border="border-2"
                    type="submit"
                >
                    Sign in with Google
                </Button>

                <h1 className="flex w-full justify-center text-base mt-5">Don’t have account? <Link href="/auth/register" className="text-ungu font-semibold px-1">Register</Link></h1>
            </div>
        </section>
    )
}