import Image from "next/image"
import { FormEvent, useEffect } from "react"
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import AuthLayouts from "@/components/layouts/Authlayouts";

export default function Registerviews() {

    const [isLoading, setIsLoading] = useState(false)
    const [Error, setError] = useState('')


    const { push } = useRouter()

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

        const result = await fetch('/api/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

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
        <AuthLayouts
            title="Hi, Welcome Back!"
            description="Glad to see you again! Enter your credentials to access your account
            and explore what awaits you. We're thrilled to have you back!"
            image="/register.png"
            link="/auth/login"
            linkText="Don't have an account? "
            text="Login"
        >
            <form onSubmit={handleSubmit} className="mt-[50px] space-y-5">
                {Error && <div className="flex justify-center text-red-600">{Error}</div>}
                <Input
                    label="Fullname"
                    type="text"
                    name="fullname"
                    id="fullname"
                    placeholder="enter your name.."
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
                <Button
                    className="text-base text-white font-semibold"
                    style={{ backgroundColor: formFilled ? "#5D00FF" : "#BFBFBF" }}
                    type="submit">
                    {isLoading ? 'Loading' : 'Create Your Account'}
                </Button>
            </form>

        </AuthLayouts>
    )
}