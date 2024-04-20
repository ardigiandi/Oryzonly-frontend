import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const Faq = () => {
    const faqs = [
        {
            question: "Is there any cost to access the content on this website?",
            description: 'No, this site provides educational content for free to all users.'
        },
        {
            question: "How can I start learning on this site?",
            description: 'You can begin learning by creating a free account and exploring the various subject materials available according to your interests and needs.'
        },
        {
            question: "Is there an age limit for using this site?",
            description: 'No, this site is open to all ages designed to meet learning needs from children to adults.'
        },
        {
            question: "How can I interact with teachers or instructors?",
            description: 'You can interact with instructors through discussion forums, live classes, or via email to get assistance or have your questions answered '
        },
        {
            question: "Is the content on this site aligned with school curricula?",
            description: 'Yes, most of the content is aligned with school curricula to help students prepare for exams or deepen their understanding of specific subjects.'
        },
        {
            question: "How can I obtain a certificate after completing a course?",
            description: 'After completing a course, you can take an assessment exam, and if successful, you will be awarded a downloadable as proof of course completion.'
        }
    ];

    const [openStates, setOpenStates] = useState(Array(faqs.length).fill(false));


    const toggleAccordion = (index: number) => {
        const newOpenStates = [...openStates];
        newOpenStates[index] = !newOpenStates[index];
        setOpenStates(newOpenStates);
    };

    return (
        <div className="flex flex-col mt-24 gap-y-12 px-5 lg:px-0">
            <div className="text-center space-y-4">
                <h1 className="text-2xl lg:text-4xl font-semibold text-navy">
                    Where Questions Find Answers
                </h1>
                <p className="text-sm lg:text-base text-gray-500">
                    Get Inspired by Real Experiences - Dive into Our Testimonials Section
                    and Hear from Those Who Have Experienced the Difference.
                </p>
            </div>

            <div className="flex flex-wrap justify-center lg:flex-row gap-x-4 gap-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={faq.question}
                        className="flex flex-col gap-y-4 w-[600px]">
                        <div className="border-2 rounded-xl ">

                            <div
                                onClick={() => toggleAccordion(index)}
                                className="flex text-lg font-semibold text-navy cursor-pointer justify-between">

                                <div className="p-4 text-navy text-sm lg:text-xl w-[300px] lg:w-[550px] tracking-[-0.7px]">
                                    {faq.question}
                                </div>
                                <button
                                    type="button"
                                    className="focus:outline-none relative right-4"
                                >
                                    {openStates[index] ? (
                                        <motion.div
                                            className="w-5 h-5 lg:w-8 lg:h-8 bg-navy rounded-full flex justify-center items-center"
                                            animate={{ rotate: openStates[index] ? -180 : 0, opacity: openStates[index] ? 1 : 0 }}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}

                                        >
                                            <Image
                                                src="/arrow-down-white.svg"
                                                alt=""
                                                width={18}
                                                height={18}
                                                priority={true}
                                                className="w-[13px] h-[13px] lg:w-[18px] lg:h-[18px]"
                                            />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            animate={{ rotate: openStates[index] ? -180 : 0, opacity: openStates[index] ? 0 : 1 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <Image
                                                src="/btn arrow faq.svg"
                                                alt=""
                                                width={18}
                                                height={18}
                                                priority={true}
                                                className="w-[13px] h-[13px] lg:w-[18px] lg:h-[18px]"
                                            />
                                        </motion.div>
                                    )}
                                </button>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: openStates[index] ? 1 : 0, y: openStates[index] ? 0 : -20 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className={`${openStates[index] ? 'block' : 'hidden'} px-4 mb-3`}
                            >
                                <h1 className="text-xs lg:text-sm text-navy tracking-[-0.7px]">{faq.description}</h1>
                            </motion.div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
