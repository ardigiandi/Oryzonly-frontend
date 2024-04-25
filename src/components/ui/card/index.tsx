import Image from 'next/image';

type Cardlist = {
    image: string;
    title: string;
    price?: string;
};

const Card = ({ cardList }: { cardList: Cardlist[] }) => {
    return (
        <>
            {cardList.map((item, index) => (
                <div key={index} className="flex flex-col gap-y-4 lg:gap-y-6 border-2 justify-center rounded-xl px-5 py-5 mx-5 lg:mx-0">
                    <Image src={item.image} alt={item.title} priority={true} width={355} height={200} />
                    <div className="flex flex-col gap-y-5 lg:flex-row justify-between items-start lg:items-center">
                        <h1 className="text-sm font-semibold w-[235px] tracking-[-0.7px]">
                            {item.title}
                        </h1>
                        <p className="text-sm text-gray-500 tracking-[-0.7px]">
                            {item.price}
                        </p>
                    </div>
                    <a
                        href="#your-link-target"
                        className="bg-ungu text-sm lg:text-base flex justify-center py-2 lg:py-4 text-white font-semibold rounded-xl tracking-[-0.7px] w-full"
                    >
                        Join Now!
                    </a>
                </div>
            ))}
        </>
    );
};

export default Card;
