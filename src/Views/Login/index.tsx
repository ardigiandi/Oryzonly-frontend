import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Loginviews() {

    const { push } = useRouter()

    const handleLogin = () => {
        push('/')
    }

    // Password Visible
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [password, setPassword] = useState("")
    const tooglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible)
    }

    // Button Color
    const [isFilled, setIsFilled] = useState(false)
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        if (inputValue === "") {
            setIsFilled(false)
        } else {
            setIsFilled(true)
        }
    }, [inputValue])
    const handleInputChange = (e: any) => {
        setInputValue(e.target.value)
    }

    // Border changing color
    const [emailFocus, setEmailFocus] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false)

    return (
        <div className="max-w-6xl mx-auto flex flex-row my-20 justify-between gap-x-[100px]">
            <Image src={"/login.png"} width={500} height={500} alt="login" priority={true} />
            <div className="flex flex-col mt-4">
                <h1 className="text-2xl text-navy font-semibold ">
                    Hi, Welcome Back!
                </h1>
                <p className="text-base text-gray-500 mt-4">Glad to see you again! Enter your credentials to access your account and explore what awaits you. We’re thrilled to have you back!
                </p>

                <form onSubmit={handleLogin} className="flex flex-col mt-12 gap-y-5">
                    {/* email */}
                    <div className=" flex flex-col gap-y-2 duration-300 cursor-pointer bg-white ">
                        <label htmlFor="email" className="text-base text-navy font-semibold">Email Address</label>
                        <div className={`${emailFocus ? 'border-ungu' : 'border-gray-200'} flex gap-x-2 border-2 px-4 py-3 rounded-md`}>
                            <Image src="/sms.svg" alt="sms" width={24} height={24} priority={true} />
                            <input onFocus={() => setEmailFocus(true)} onBlur={() => setEmailFocus(false)} type="email" placeholder="cth: example@email.com" id="email" name="email" className="w-full bg-transparent focus:outline-none" value={inputValue} onChange={handleInputChange} />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="flex flex-col gap-y-2 ">
                        <label htmlFor="Password" className="text-base text-navy font-semibold">Password</label>
                        <div className={`${passwordFocus ? 'border-ungu' : 'border-gray-200'} flex gap-x-2 border-2 px-4 py-3 rounded-md`}>
                            <Image src="/lock.svg" alt="lock" width={24} height={24} priority={true} />
                            <input onFocus={() => setPasswordFocus(true)} onBlur={() => setPasswordFocus(false)} onChange={(password) => setPassword(password.target.value)} type={passwordVisible ? "text" : "password"} placeholder="Enter your password" id="Password" name="Password" className="w-full outline-none" />

                            <div onClick={tooglePasswordVisibility} className="text-gray-400">
                                {passwordVisible ? <Image src="/eye-open.svg" width={24} height={24} alt="eyes" priority={true} /> : <Image src="/eye-close.svg" width={24} height={24} alt="eyes" priority={true} />}
                            </div>
                        </div>
                    </div>
                </form>

                {/* Forget Password */}
                <div className="flex w-full justify-end mt-5">
                    <h1 className="text-base text-gray-500 font-semibold cursor-pointer">Forgot Password?</h1>
                </div>

                {/* Button Login */}
                <button style={{ backgroundColor: isFilled ? '#6B46C1' : '#E2E8F0' }} type="submit" onClick={handleLogin} className="bg-ungu py-[14px] rounded-md mt-5">
                    <h1 className="text-base text-white font-semibold">Access Your Account</h1>
                </button>

            </div>
        </div>
    )
}
