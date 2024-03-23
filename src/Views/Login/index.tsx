import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Link from "next/link"

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
                    <div>
                        <label htmlFor="" className="text-base text-navy font-semibold">Email Address</label>
                        <div className="relative mt-2">
                            <input
                                type="email"
                                placeholder="cth: example@email.com"
                                className="border-2 w-full px-10 rounded-md py-[14px] focus:outline-none focus:border-ungu"
                                onChange={handleInputValue}
                            />

                            <div className="absolute inset-y-4 left-3 pointer-events-none">
                                <Image src="/sms.svg" width={24} height={24} alt="Email" priority={true} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="" className="text-base text-navy font-semibold">Password</label>
                        <div className="relative mt-2">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                placeholder="••••••••••••"
                                className="border-2 w-full px-10 rounded-md py-[14px] focus:outline-none focus:border-ungu"
                                onChange={(password) => setPassword(password.target.value)}
                            />

                            <div className="absolute inset-y-4 left-3 pointer-events-none">
                                <Image src="/lock.svg" width={24} height={24} alt="Email" priority={true} />
                            </div>
                            <div
                                onClick={tooglePasswordVisibility}
                                className="absolute inset-y-4 right-3">
                                {passwordVisible ? (
                                    <Image src="/eye-open.svg" width={24} height={24} alt="eye" priority={true} />
                                ) : (
                                    <Image src="/eye-close.svg" width={24} height={24} alt="eye" priority={true} />
                                )}
                            </div>
                        </div>
                    </div>
                </form>

                <div className="flex w-full justify-end mt-5 cursor-pointer">
                    <h1 className="text-base text-gray-600">Forgot Password?</h1>
                </div>

                <div className="flex flex-col gap-y-5 mt-5">
                    <button onClick={handleLogin} className={`${isFilled ? "bg-ungu" : "bg-gray-300"} py-[14px] text-base text-white font-semibold rounded-md`}>Access Your Account
                    </button>

                    <button className="flex flex-row gap-x-2 justify-center border-2 rounded-md py-4">
                        <Image src="/ic_google.svg" width={20} height={20} alt="google" priority={true} />
                        <h1 className="text-base text-navy font-semibold">Sign in with Google</h1>
                    </button>

                    <h1 className="flex w-full justify-center text-base">Don’t have account? <Link href="/auth/register" className="text-ungu font-semibold px-1">Register</Link></h1>
                </div>
            </div>
        </section>
    )
}