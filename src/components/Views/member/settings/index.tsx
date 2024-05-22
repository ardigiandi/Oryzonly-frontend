import Memberlayout from "@/components/layouts/Memberlayout";
import Image from "next/image";

export default function Settingviews() {
    return (
        <Memberlayout>
            <div className="flex flex-col lg:py-[60px] lg:px-8 px-5 lg:ml-[300px]">
                <div className="gap-y-4">
                    <h1 className="text-2xl lg:text-[32px] font-semibold text-navy">
                        Settings
                    </h1>
                    <p className="text-sm lg:text-base font-semibold text-gray-600">
                        Personalize your experience with our platform using our customizable
                        settings.
                    </p>
                </div>

                <div className="bg-white mt-[50px] rounded-lg p-5">
                    <div className="w-[80px] h-[80px] bg-soft rounded-full relative">
                        <Image
                            src="/upload-cloud 1.svg"
                            alt="Upload"
                            className="bg-biru px-7 py-7 object-cover"
                            width={80}
                            height={80}
                            priority={true}
                        />
                        <input
                            type="file"
                            className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                    </div>

                    <div className="mt-8 space-y-5">
                        <div className="gap-y-2 flex flex-col">
                            <label
                                className="text-sm lg:text-base font-semibold text-navy"
                            >Full Name</label>
                            <input
                                id="full-name"
                                type="text"
                                placeholder=""
                                className="border text-base font-semibold text-navy rounded-md py-2 lg:py-[14px] border-ungu px-4"
                            />
                        </div>
                        <div className="gap-y-2 flex flex-col">
                            <label
                                className="text-sm lg:text-base font-semibold text-navy"
                            >Email Address</label>
                            <input
                                id="email"
                                type="email"
                                placeholder=""
                                className="border text-base font-semibold text-navy rounded-md py-2 lg:py-[14px] border-ungu px-4"
                            />
                        </div>
                        <div className="gap-y-2 flex flex-col">
                            <label
                                className="text-sm lg:text-base font-semibold text-navy"
                            >Occupation</label>
                            <input
                                id="occupation"
                                type="text"
                                placeholder=""
                                className="border text-base font-semibold text-navy rounded-md py-2 lg:py-[14px] border-ungu px-4"
                            />
                        </div>
                        <div className="gap-y-2 flex flex-col">
                            <label
                                className="text-sm lg:text-base font-semibold text-navy"
                            >Phone</label>
                            <input
                                id="phone"
                                type="text"
                                placeholder=""
                                className="border text-base font-semibold text-navy rounded-md py-2 lg:py-[14px] border-ungu px-4"
                            />
                        </div>
                        <div className="gap-y-2 flex flex-col">
                            <label
                                className="text-sm lg:text-base font-semibold text-navy"
                            >Nationality</label>
                            <input
                                id="nationality"
                                type="text"
                                placeholder=""
                                className="border text-base font-semibold text-navy rounded-md py-2 lg:py-[14px] border-ungu px-4"
                            />
                        </div>

                        <button
                            className="bg-ungu flex justify-center w-full py-2 lg:py-[14px] text-base text-white rounded-md"
                        >
                            Save My Profile
                        </button>
                    </div>
                </div>
            </div>
        </Memberlayout>
    )
}