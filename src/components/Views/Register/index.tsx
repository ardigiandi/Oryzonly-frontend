import Image from "next/image"
import { FormEvent, useEffect } from "react"
import { useRouter } from "next/router";
import { useState } from "react";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import AuthLayouts from "@/components/layouts/Authlayouts";
import { signIn } from "next-auth/react";
import authService from "@/services/auth";

export default function Registerviews() {

    const [isLoading, setIsLoading] = useState(false)
    const [Error, setError] = useState('')


    const { push, query } = useRouter()

    const callbackUrl: any = query.callbackUrl || '/auth/login'

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true)
        setError('')
        const form = event.target as HTMLFormElement
        const data = {
            fullname: form.fullname.value,
            email: form.email.value,
            password: form.password.value,
        }

        const result = await authService.registerAccount(data)

        if (result.status === 200) {
            form.reset()
            setIsLoading(false)
            push('/auth/login')
        } else {
            setIsLoading(false)
            setError('Email is Already Registered')
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
            title="Welcome Aboard!"
            description="We're excited to have you join our community. Begin your journey with us by creating your account. "
            image="/register.png"
            link="/auth/login"
            linkText="Have an Account? "
            text="Login"
        >
            <form onSubmit={handleSubmit} className="mt-[50px] space-y-5">
                {Error && <div className="flex justify-center text-red-600">{Error}</div>}
                <Input
                    label="Fullname"
                    type="text"
                    name="fullname"
                    id="fullname"
                    placeholder="enter your name"
                    Image="/user.svg"
                    onChange={handleInputValue}
                />
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
                    className="text-base text-white font-semibold tracking-[-0.7px]"
                    style={{ backgroundColor: formFilled ? "#5D00FF" : "#BFBFBF" }}
                    type="submit">
                    {isLoading ? 'Loading' : 'Create Your Account'}
                </Button>

                <Button
                    className="text-base text-navy font-semibold tracking-[-0.7px]"
                    border="border-2 border-gray-300"
                    type="button"
                    Image={"/ic_google.svg"}
                    onClick={() => signIn("google", { callbackUrl, redirect: false })}
                >
                    Sign up with Google
                </Button>
            </form>
        </AuthLayouts>
    )
}