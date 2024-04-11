import Image from "next/image"
import { Children } from "react";


type Propstypes = {
    label: string;
    name: string;
    id: string;
    type: string;
    placeholder: string;
    value?: string;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    Image: string;
    passwordvisible?: boolean | undefined;
    children? : React.ReactNode
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
}

const Input = (props: Propstypes) => {

    const { label, name, type, placeholder, value, onChange, children, onSubmit } = props
    return (
        <div>
            <label htmlFor={name} className="text-base text-navy font-semibold ">
                {label}
            </label>
            <div className="relative mt-2">
                <input
                    name={name}
                    id={name}
                    type={type}
                    className="w-full px-10 py-[14px] rounded-lg border-2 border-gray-300 focus:outline-none focus:border-ungu"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                <div className="absolute inset-y-0 left-3 flex items-center pr-3 pointer-events-none">
                    <Image src={props.Image} width={20} height={20} alt="search" />
                </div>
                <div onClick={props.onClick} className="absolute inset-y-0 right-3 flex items-center">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Input