import Image from "next/image"

type Propstypes = {
    children: React.ReactNode
    Image?: string
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    style?: React.CSSProperties
    className?: string
    border?: string
    type? : "submit" | "reset" | "button"
}
const Button = (props: Propstypes) => {

    const { children, onClick, style, className, border, type} = props
    return (
        <div className="flex flex-col gap-y-5 mt-5">
            <button
                onClick={onClick}
                style={style}
                type={type}
                className={`flex flex-row gap-x-2 justify-center ${border} rounded-md py-4 items-center`}>
                {props.Image && <Image src={props.Image} width={20} height={20} alt="search" />}
                <h1 className={className}>{children}</h1>
            </button>
        </div>
    )
}

export default Button