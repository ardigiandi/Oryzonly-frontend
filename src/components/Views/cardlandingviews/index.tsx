import AuthCardLanding from "@/components/layouts/AuthCardLanding"
import Card from "@/components/ui/card";

const list = [
    {
        image: '/card 1.png',
        title: 'Coding Odyssey: Journey into the World of Programming',
        price: 'Rp 240,000',
    },
    {
        image: '/card 2.png',
        title: 'Unleashing Creativity: Understanding Design in all Dimensions',
        price: 'Free',
    },
    {
        image: '/card 3.png',
        title: 'Digital Mastery: Unleashing Your Marketing Potential',
        price: 'Rp 250,000',
    },
];


const Cardlandingviews = () => {
    return (
        <AuthCardLanding>
            <div className="flex justify-center flex-wrap gap-x-5 gap-y-5 mt-12 mx-2">
                <Card cardList={list} />
            </div>
        </AuthCardLanding>
    )
}

export default Cardlandingviews