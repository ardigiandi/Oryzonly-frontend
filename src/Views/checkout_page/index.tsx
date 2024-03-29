import Image from "next/image"

const Checkoutview = () => {
    return (
        <section
            className="max-w-4xl mx-auto flex flex-col justify-center mt-24 px-5 lg:px-0"
        >
            <div className="space-y-4">
                <h1
                    className="text-4xl text-navy font-semibold flex justify-center text-center"
                >
                    Complete Your Transaction Here
                </h1>
                <p
                    className="text-base text-gray-500 font-semibold flex justify-center text-center"
                >
                    Finalize your purchase securely and swiftly here. Enter your payment
                    details to complete <br />
                    the transaction hassle-free
                </p>
            </div>

            <div
                className="flex flex-col lg:flex-row justify-center mt-12 gap-x-7 gap-y-7 items-start"
            >
                <div className="flex flex-col gap-y-6 border-2 rounded-xl px-5 py-5">
                    <Image src="/card 1.png" alt="" width={355} height={200} />
                    <div
                        className="flex flex-col gap-y-5 lg:flex-row justify-between items-start lg:items-center"
                    >
                        <h1 className="text-sm font-semibold">
                            Coding Odyssey: Journey into the <br />
                            World of Programming
                        </h1>
                        <p className="text-sm text-gray-500">Rp 240,000</p>
                    </div>
                </div>

                <div
                    className="flex flex-col border-2 px-7 py-7 rounded-xl w-full lg:w-[477px]"
                >
                    <h1 className="text-xl text-navy font-semibold">Payment Details</h1>
                    <div className="flex flex-col mt-8 gap-y-5">
                        <div className="flex flex-col lg:flex-row justify-between">
                            <h1 className="text-base text-navy font-semibold">Course Price</h1>
                            <p className="text-base text-navy font-semibold">Rp 240, 000</p>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between">
                            <h1 className="text-base text-navy font-semibold">Payment Code</h1>
                            <p className="text-base text-navy font-semibold">Rp 110</p>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between">
                            <h1 className="text-base text-navy font-semibold">PPN 10%</h1>
                            <p className="text-base text-navy font-semibold">Rp 4,000</p>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between">
                            <h1 className="text-base text-navy font-semibold">Service Fee</h1>
                            <p className="text-base text-navy font-semibold">Rp 7,000</p>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between">
                            <h1 className="text-base text-navy font-semibold">Total Transfer</h1>
                            <p className="text-base text-ungu font-semibold">Rp 251,110</p>
                        </div>
                    </div>

                    <div className="flex gap-x-2 mt-8 items-center">
                        <input
                            type="checkbox"
                            className="border-2 w-[18px] h-[18px] rounded-md"
                        />
                        <p className="text-base text-navy font-semibold">
                            I agree with <span className="text-ungu"> Terms & Conditions </span>
                        </p>
                    </div>

                    <a
                        href=""
                        className="flex justify-center bg-ungu mt-8 py-[14px] rounded-lg text-white text-base font-semibold"
                    >Complete Payment</a>
                </div>
            </div>
        </section>
    )
}

export default Checkoutview