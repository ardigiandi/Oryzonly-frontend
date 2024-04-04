import Image from "next/image"
import { useRouter } from "next/router"
import { FormEvent, useEffect, useState } from "react"
import Input from "@/components/ui/input"
import Button from "@/components/ui/button"
import AuthLayouts from "@/components/layouts/Authlayouts"
import { signIn } from "next-auth/react"


export default function Loginviews() {

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')


    const { push, query } = useRouter()

    const callbackUrl: any = query.callbackUrl || '/'

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true)
        setError('')
        const form = event.target as HTMLFormElement

        try {
            const res = await signIn("credentials", {
                redirect: false,
                email: form.email.value,
                password: form.password.value,
                callbackUrl
            })

            if (!res?.error) {
                setIsLoading(false)
                form.reset()
                push(callbackUrl)
            } else {
                setIsLoading(false)
                setError('Email or Password is incorrect')
            }
        } catch (error) {
            setIsLoading(false)
            setError('Email or Password is incorrect')
        } finally {
            setIsLoading(false)
        }
    }

    // Password Visible
    const [passwordVisible, setPasswordVisible] = useState(false)
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
        <AuthLayouts
            title="Hi, Welcome Back!"
            description="Glad to see you again! Enter your credentials to access your account
            and explore what awaits you. We're thrilled to have you back!"
            image="/login.png"
            link="/auth/register"
            linkText="Don't have an account? "
            text="Register"
        >
            <form onSubmit={handleSubmit} className="mt-[50px] space-y-5">
                {error && <div className="flex justify-center text-red-600">{error}</div>}
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
                    placeholder="••••••••••••"
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
                <Button
                    className="text-base text-white font-semibold"
                    style={{ backgroundColor: formFilled ? "#5D00FF" : "#BFBFBF" }}
                    type="submit">
                    {isLoading ? 'Loading' : 'Access Your Account'}
                </Button>

                <button 
                className="w-full py-4 px-12 lg:px-[60px] text-sm lg:text-base font-semibold text-center rounded-lg border-2 border-gray-200"
                onClick={() => signIn("googl    e", { callbackUrl, redirect: false })}
                type="button"
                >
                    sign in with google
                </button>
            </form>
        </AuthLayouts>
    )
}