import { useRouter } from 'next/router';
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { IoGameControllerOutline, IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import { RxPerson } from "react-icons/rx";
import { createSlug } from '@/utils/slug';
import Ads from '@/components/Ads';
import Modal from '@/components/Modal';

function GamesDetails() {
    const router = useRouter();
    const { slug } = router.query;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [storeLink, setStoreLink] = useState("");
    const [storeType, setStoreType] = useState("");



    const scrollRef = useRef(null);

    console.log("slug", slug)

    useEffect(() => {
        const loadData = async () => {
            try {
                const res = await fetch('/gameData.json');
                const json = await res.json();
                setData(json);
            } catch (err) {
                console.error('Failed to load game data:', err);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);
    if (loading) {
        return <div className="text-white p-5">Loading...</div>;
    }

    const game = data.find(item => createSlug(item.name) === slug);

    console.log("game", game)

    if (!game) return <div>Game not found</div>;

    const otherGames = data.filter(item => createSlug(item.name) !== slug);
    const featuredApp = data.filter(item => createSlug(item.name) !== slug);



    const handleStoreClick = (link, type) => {
        setStoreLink(link);
        setStoreType(type); // 👈 important
        setIsModalOpen(true);
    };

    const handleContinue = () => {
        window.open(storeLink, "_blank");
        setIsModalOpen(false);
    };


    const scrollLeft = () => {
        scrollRef.current.scrollBy({
            left: -300,
            behavior: 'smooth',
        });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({
            left: 300,
            behavior: 'smooth',
        });
    };

    // if (!game?.screenshots?.length) return null;
    return (
        <Fragment>
            <div className='bg-white min-h-screen'>
                <div className='lg:flex justify-between lg:gap-5 p-2 md:p-6 lg:m-6.75'>
                    <div className='flex flex-col gap-5 w-full lg:w-[70%] '>

                        {/* Banner and Info */}
                        <div className='flex gap-5'>
                            <img
                                src={game.banner}
                                alt={game.name}
                                className='rounded-[20px] h-25 md:h-35 lg:h-40'
                            />
                            <div className='flex flex-col justify-center'>
                                <h1 className='text-[20px] md:text-[25px] lg:text-[30px] font-bold'>{game.name}</h1>
                                <div className='hidden md:flex  gap-3  mt-4'>
                                    <div className='flex text-[20px] gap-3'>
                                        <IoGameControllerOutline size={25} color="black" /> {game.category}  <span> | </span>
                                    </div>
                                    <div className='flex text-[20px] gap-3'>
                                        <RxPerson size={25} color="black" /> {game.age}
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 mt-4">
                                    {Array.from({ length: 5 }).map((_, i) => {
                                        const rating = game.ratings; // ✅ correct

                                        if (i + 1 <= Math.floor(rating)) {
                                            return <IoStar key={i} color="gold" size={25} />;
                                        } else if (i < rating) {
                                            return <IoStarHalf key={i} color="gold" size={25} />;
                                        } else {
                                            return <IoStarOutline key={i} color="gold" size={25} />;
                                        }
                                    })}
                                    <span className="ml-2 text-[18px] font-semibold">
                                        {game.ratings}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Ads Section */}
                        <Ads
                            data-ad-slot="9642275970"
                            data-ad-format="auto"
                            data-full-width-responsive="true" />

                        {/* Game Details Grid */}
                        <div className="grid grid-cols-[180px_1fr] lg:grid-cols-[280px_1fr] gap-y-6 lg:w-125">

                            <p className="font-semibold text-[18px]">Platform</p>
                            <p className="text-gray-500 text-[18px]">{game.platform}</p>

                            <p className="font-semibold text-[18px]">Price</p>
                            <p className="text-gray-500 text-[18px]">{game.price}</p>

                            <p className="font-semibold text-[18px]">Installs</p>
                            <p className="text-gray-500 text-[18px]">{game.installs}</p>

                            <p className="font-semibold text-[18px]">Updated</p>
                            <p className="text-gray-500 text-[18px]">{game.updated}</p>

                            <p className="font-semibold text-[18px]">Size</p>
                            <p className="text-gray-500 text-[18px]">{game.size}</p>

                        </div>

                        {/* Ads Section */}
                        <Ads
                            data-ad-slot="4254217925"
                            data-ad-format="auto"
                            data-full-width-responsive="true" />


                        {/* Editor's Review */}
                        <div className="mt-8 ">
                            <h1 className="text-[25px] font-bold mb-4">Editor's Review</h1>
                            <p className="text-gray-700 text-[17px] leading-relaxed">
                                {game.editors_review}
                            </p>
                        </div>

                        {/* How to Play Section */}
                        <div className="mt-8 ">
                            <h1 className="text-[25px] font-bold mb-4">How to Play?</h1>
                            {game.how_to_play.map((step, index) => (
                                <p key={index} className="text-gray-700 text-[17px] leading-relaxed mb-2">
                                    {index + 1}. {step}
                                </p>
                            ))}

                        </div>

                        {/* Ads Section */}
                        <Ads
                            data-ad-slot="3351188037"
                            data-ad-format="auto"
                            data-full-width-responsive="true" />


                        {/* Button Section */}
                        <div className="flex gap-5 mt-8">
                            <button
                                onClick={() => handleStoreClick(game.appstore_link, "appstore")}
                                className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded-3xl"
                            >
                                <img
                                    src="/assets/images/Icon/app-store.png"
                                    className="w-6 h-6 inline-block mr-2"
                                    alt="App Store Icon"
                                />
                                App Store
                            </button>

                            <button
                                onClick={() => handleStoreClick(game.playstore_link, "playstore")}
                                className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded-3xl"
                            >
                                <img
                                    src="/assets/images/Icon/playstore.png"
                                    className="w-6 h-6 inline-block mr-2"
                                    alt="Play Store Icon"
                                />
                                Play Store
                            </button>
                        </div>


                        {/* Screenshots */}
                        <div className="mt-8 relative ">
                            <h1 className="text-[25px] font-bold mb-4">Screenshots</h1>

                            {/* Left Button */}
                            <button
                                onClick={scrollLeft}
                                className="absolute left-3 top-[55%] -translate-y-1/2 z-10 bg-black/60 text-white px-3 py-2 rounded-full hover:bg-black cursor-pointer"
                            >
                                ◀
                            </button>

                            {/* Screenshots */}
                            <div
                                ref={scrollRef}
                                className="flex gap-4  overflow-x-auto scroll-smooth scrollbar-hide"
                            >
                                {game.screenshots.map((screenshots, index) => (
                                    <img
                                        key={index}
                                        src={screenshots}
                                        alt={`Screenshot ${index + 1}`}
                                        loading="lazy"
                                        onClick={() => window.open(screenshots, '_blank')}
                                        className="w-auto h-57.5 md:h-77.5 rounded-[15px] shrink-0 cursor-pointer "
                                    />
                                ))}
                            </div>

                            {/* Right Button */}
                            <button
                                onClick={scrollRight}
                                className="absolute right-3 top-[55%] -translate-y-1/2 z-10 bg-black/60 text-white px-3 py-2 rounded-full hover:bg-black cursor-pointer"
                            >
                                ▶
                            </button>
                        </div>

                        {/* Rattings Section */}
                        <div className="flex flex-col md:flex-row gap-8 mt-8">
                            {/* LEFT SIDE – MAIN RATING */}
                            <div>
                                <h1 className="font-bold text-[25px]">Ratings</h1>

                                <div className="mt-5">
                                    <div className="text-[80px] font-[700]">
                                        {game.ratings}
                                    </div>

                                    <div className="flex items-center gap-1">
                                        {Array.from({ length: 5 }).map((_, i) => {
                                            const rating = game.ratings;

                                            if (i + 1 <= Math.floor(rating)) {
                                                return <IoStar key={i} color="gold" size={25} />;
                                            } else if (i < rating) {
                                                return <IoStarHalf key={i} color="gold" size={25} />;
                                            } else {
                                                return <IoStarOutline key={i} color="gold" size={25} />;
                                            }
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT SIDE – RATING BARS */}
                            <div className="flex-1 space-y-3 mt-10 md:mt-14">

                                {[5, 4, 3, 2, 1].map((star) => {

                                    // ✅ correct logic: 5 star = max, 1 star = min
                                    const percent = Math.max(
                                        0,
                                        Math.min(100, (game.ratings / 5) * 100 * (star / 5))
                                    );

                                    return (
                                        <div key={star} className="flex items-center gap-3">
                                            <span className="w-4 ">
                                                {star}
                                            </span>

                                            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                                <div
                                                    className="bg-blue-500 h-3 rounded-full transition-all duration-500"
                                                    style={{ width: `${percent}%` }}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}

                            </div>

                        </div>

                        {/* Featured App */}
                        <div>
                            <h1 className='text-[25px] font-bold'>Featured App</h1>
                            <div className="grid grid-cols-3 md:grid-cols-5 gap-5">
                                {[...featuredApp]
                                    .sort(() => 0.5 - Math.random())
                                    .slice(0, 15)
                                    .map((item, index) => (
                                        <div
                                            key={index}
                                            className="items-center gap-3 mt-4 cursor-pointer"
                                            onClick={() => router.push(`/games/${createSlug(item.name)}`)}
                                        >
                                            <img
                                                src={item.banner}
                                                alt={item.name}
                                                className="w-full rounded-[10px]"
                                            />

                                            <h2 className="mt-2 text-[18px]">
                                                {item.name.length > 20
                                                    ? item.name.slice(0, 15) + "..."
                                                    : item.name}
                                            </h2>
                                        </div>
                                    ))}
                            </div>


                        </div>
                    </div>

                    {/* Top Games */}
                    <div className=' hidden lg:block w-[30%]  p-4'>
                        <h1 className='font-bold text-[25px]'>Top Games</h1>
                        {[...otherGames]
                            .sort(() => 0.5 - Math.random())
                            .slice(0, 22).map((item, index) => (
                                <div
                                    key={index}
                                    className='flex items-center gap-3 mt-4 cursor-pointer hover:bg-gray-200 p-2 rounded-lg '
                                    onClick={() => router.push(`/games/${createSlug(item.name)}`)}>
                                    <img src={item.banner} alt={item.name} className='w-20 h-20 rounded-[10px]' />
                                    <div>
                                        <h2 className=' text-[18px]'>
                                            {item.name.length > 20 ? item.name.slice(0, 20) + '...' : item.name}
                                        </h2>
                                        <div className='flex text-gray-400 text-[16px] gap-2'>
                                            {item.category}
                                        </div>
                                        <div className='flex text-gray-400 items-center gap-1'> {item.ratings} <IoStar size={10} /></div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                {/* Footer */}
                <footer className="w-full    border-t-2 border-black border-solid text-center py-4">
                    <div className="flex justify-center gap-4 mt-2 text-[18px]">
                        <a href="/about" className="">About</a>
                        <a href="/privacy-policy" className="">Privacy</a>
                        <a href="/terms" className="">Terms</a>
                    </div>
                    <div className="text-sm">
                        © {new Date().getFullYear()} FinGameon. All rights reserved.
                    </div>
                </footer>


            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                size="sm"
                showCloseBtn={false}
            >
                <div className="text-center px-4">
                    <h2 className="text-[20px] font-bold mb-3">
                       {storeType === "appstore"
                ? "Coming soon to the App Store"
                : "Coming soon to the  Play Store"}
                    </h2>

                    <p className="text-gray-600 mb-6">
                        Are you sure you want to continue?
                    </p>

                    <div className="flex gap-4 justify-center">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="px-6 py-2 rounded-full cursor-pointer border border-gray-400 font-semibold"
                        >
                            CANCEL
                        </button>

                        <button
                            onClick={handleContinue}
                            className="px-6 py-2 rounded-full cursor-pointer bg-blue-600 text-white font-semibold"
                        >
                            CONTINUE
                        </button>
                    </div>
                </div>
            </Modal>

        </Fragment >

    )
}


export default GamesDetails
