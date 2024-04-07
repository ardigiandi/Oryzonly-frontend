import Image from "next/image"
import Mentorlayouts from "@/components/layouts/Mentorlayouts"

const Mycourse = () => {
    return (
        <Mentorlayouts>
        <div
            className="lg:w-[380px] lg:h-[284px] w-[310px] h-[200px] mx-auto lg:mx-0 px-0 lg:px-7"
        >
            <Image src="/Frame_dashboard.png" alt="" width={380} height={284} priority={true} className="cursor-pointer" />
        </div>
    </Mentorlayouts>
    )
}

export default Mycourse