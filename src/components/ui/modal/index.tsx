import { Dispatch, useEffect, useRef } from "react";

const Modal = ({
    children,
    onClose
}: {
    children: React.ReactNode;
    onClose: any
}) => {

    const ref: any = useRef()
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClose()
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [onClose])
    return (
        <div className="flex align-center top-0 justify-center items-center fixed w-[100vw] h-[100vh] z-1000 bg-black bg-opacity-50">
            <div className="bg-white p-5 w-[50vw] h-[80vh]" ref={ref}>
                {children}
            </div>
        </div>
    )
}

export default Modal