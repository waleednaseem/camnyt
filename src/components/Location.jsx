import { useState } from 'react';
import Image from 'next/image';
import Gender from "@/images/gender-removebg-preview.png"
import VIP from "@/images/pngtree-3d-metal-vip-badge-png-image_2893598-removebg-preview.png"
import Location from "@/images/location-removebg-preview.png"
import KillAds from "@/images/Kill_Ads-removebg-preview.png"
import GainFollowers from "@/images/gainFollowers-removebg-preview.png"
import HideLocation from "@/images/no-location-2837148-2357543-removebg-preview.png"
import IntroMessage from "@/images/IntroMessage-removebg-preview.png"
import PrivateChat from "@/images/PrivateChat-removebg-preview.png"
import LiveSupport from "@/images/LiveSupport.png"




import eye from "@/images/eye.png"


const LocationCard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
    const [showText, setShowText] = useState(false);
    const [showText1, setShowText1] = useState(false);
    const [showText2, setShowText2] = useState(false);

    const toggleCard = () => {
        setIsOpen(!isOpen);
    };

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        toggleCard(); // Close the card after selecting a country
        setShowSubscriptionModal(true); // Open the subscription modal
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubscriptionModalClose = () => {
        setShowSubscriptionModal(false);
    };
    const countries = [
        { name: 'USA', flag: '/images/USA.png' },
        { name: 'Canada', flag: '/images/Canda.png' },
        { name: 'UK', flag: '/images/UK.png' },
        { name: 'Australia', flag: '/images/Australia.png' },
        { name: 'Bangladesh', flag: '/images/Bangladesh.png' },
        { name: 'Turkey', flag: '/images/Turkey.png' },
        { name: 'Russia', flag: '/images/Russia.png' },
        { name: 'Malaysia', flag: '/images/Malaysia.png' },
        { name: 'Indonesia', flag: '/images/Indonesia.png' },
        { name: 'Spain', flag: '/images/Spain.png' },
        { name: 'Egypt', flag: '/images/Egypt.png' },
        { name: 'Brazil', flag: '/images/Brazil.png' },
        { name: 'Netherland', flag: '/images/Netherlands.png' },
        { name: 'Italy', flag: '/images/Italy.png' },
        { name: 'Romania', flag: '/images/Romania.png' },
        { name: 'Ukraine', flag: '/images/Ukrain.png' },
        { name: 'Azerbaijan', flag: '/images/Azerbaijan.png' },
        { name: 'Philippines', flag: '/images/Philippines.png' },
        { name: 'Moroco', flag: '/images/Morocco.png' },
        { name: 'Pakistan', flag: '/images/Pakistan.png' },
        { name: 'India', flag: '/images/India.png' },
        { name: 'Newzeland', flag: '/images/New_Zealand.png' },
        { name: 'Mexico', flag: '/images/Mexico.png' },
        { name: 'Iraq', flag: '/images/Iraq.png' },
        { name: 'Gerogia', flag: '/images/Georgia.png' },
        { name: 'Algeria', flag: '/images/Algeria.png' },
        { name: 'France', flag: '/images/France.png' },
        { name: 'Jordan', flag: '/images/Jordan.png' },
        // Add more countries with their flags
    ];

    // Filter countries based on search term
    const filteredCountries = countries.filter(country =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="relative">
            {/* Button to toggle the card */}
            <button onClick={toggleCard} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Select Country
            </button>

            {/* Selected country display */}
            {selectedCountry && (
                <div className="absolute left-0 mt-2 flex items-center">
                    <img src={countries.find(country => country.name === selectedCountry).flag} alt={`${selectedCountry} flag`} className="w-6 h-6 mr-2 " />
                    <p>{selectedCountry}</p>
                </div>
            )}

            {/* Card content */}
            {isOpen && (
                <div className="absolute left-0 mt-10 w-[700px] bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="px-4 py-2">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Select your country</h3>
                        <input type="text" name="location" id="location" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full mt-2 sm:text-sm border-gray-300 rounded-md" placeholder="Search for a country" value={searchTerm} onChange={handleSearchChange} />
                    </div>
                    <div className="mt-2 grid grid-cols-4 gap-4 px-4 pb-4">
                        {/* List of countries with flags */}
                        {filteredCountries.map(country => (
                            <button key={country.name} onClick={() => handleCountrySelect(country.name)} className={`flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-9 00 font-semibold py-2 px-4 rounded ${selectedCountry === country.name ? 'bg-blue-500 text-white' : ''}`}>
                                <img src={country.flag} alt={`${country.name} flag`} className="w-14 h-10 rounded-full mx-2" />
                                {country.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Subscription modal */}
            {showSubscriptionModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-gradient-to-br from-blue-300 to-blue-500 p-8 rounded-xl h-[70%] w-[70%]">
                        <h1 className=" font-semibold mb-4 text-2xl">Upgrade To CamNyt</h1>
                        <div className='flex'>
                            <div className='flex flex-col'>
                                <div>
                                    <span className='text-lg font-bold flex gap-2'><Image src={Gender} alt="" className='h-10 w-10 mx-2' />Gender Filter<Image src={eye} alt="" className='h-5 w-5' /> </span>

                                </div>
                                <span className='my-4 text-lg font-bold flex gap-2'><Image src={KillAds} alt="" className='h-10 w-10 mx-2' />Kill The Ads<Image src={eye} alt="" className='h-5 w-5' /></span>
                                <span className='mb-10 text-lg font-bold flex gap-2'><Image src={IntroMessage} alt="" className='h-10 w-10 mx-2' />Intro Message<Image src={eye} alt="" className='h-5 w-5' /></span>
                            </div>
                            <div className='flex flex-col ml-[12%]'>
                                <span className='text-lg font-bold flex gap-2'><Image src={VIP} alt="" className='h-10 w-10 mx-2' />VIP Badge<Image src={eye} alt="" className='h-5 w-5' /></span>
                                <span className='my-4 text-base font-bold flex gap-2'><Image src={GainFollowers} alt="" className='h-10 w-10 mx-2' />Gain Followers
                                    <Image src={eye} alt="" className='h-5 w-5' />
                                </span>
                                <span className='mb-10 text-base font-bold flex gap-2'><Image src={PrivateChat} alt="" className='h-10 w-10 mx-2' />Private chat <Image src={eye} alt="" className='h-5 w-5' /></span>
                            </div>
                            <div className='flex flex-col ml-[12%]'>
                                <span className='text-lg font-bold flex gap-2'><Image src={Location} alt="" className='h-10 w-10 mx-2' />Location Filter
                                    <Image src={eye} alt="" className='h-5 w-5' />
                                </span>
                                <span className='my-4 text-lg font-bold flex gap-2'><Image src={HideLocation} alt="" className='h-10 w-10 mx-2' />Hide Your Location <Image src={eye} alt="" className='h-5 w-5 ml-2' /></span>
                                <span className='mb-10 text-lg font-bold flex gap-2'><Image src={LiveSupport} alt="" className='h-10 w-10 mx-2' />24/7 Live Support<Image src={eye} alt="" className='h-5 w-5 ' /></span>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-gray-100 p-4 rounded-xl border hover:bg-gray-200 hover:border-gray-400 shadow-lg">
                                <h3 className="text-xl font-semibold mb-2">6 Months</h3>
                                <p className='flex'>$89.94/<p className='text-gray-400'>month</p></p>
                                <p className='text-xs mt-2 mb-5'>rebills after every 6 months at 89.94$</p>
                                <button className='bg-gray-400 rounded-xl py-2 px-12'>Continue</button>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-xl border hover:bg-gray-200 hover:border-gray-400 shadow-lg">
                                <h3 className="text-xl font-semibold mb-2">1 Month</h3>
                                <p className='flex'>$19.99/<p className='text-gray-400'>6 month</p></p>
                                <p className='text-xs mt-2 mb-5'>rebills after every 6 months at 19.99$</p>
                                <button className='bg-orange-400 rounded-xl py-2 px-12'>Continue</button>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-xl border hover:bg-gray-200 hover:border-gray-400 shadow-lg">
                                <h3 className="text-xl font-semibold mb-2">1 Week</h3>
                                <p className='flex'>$7.99/<p className='text-gray-400'>1 week</p></p>
                                <p className='text-xs mt-2 mb-5'>rebills after every 6 months at 7.99$</p>
                                <button className='bg-gray-400 rounded-xl py-2 px-12'>Continue</button>
                            </div>
                        </div>
                        <button onClick={handleSubscriptionModalClose} className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LocationCard;