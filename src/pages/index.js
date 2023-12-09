import Image from 'next/image'
import {Inter, Raleway} from 'next/font/google'
import {Component} from "react";
import {useState} from "react";
import Link from "next/link";
import image1 from "/public/image (1).jpg";
import image2 from "/public/image (2).jpg";
import image3 from "/public/image3.jpg";
import icon1 from "/public/icon (1).png";
import icon2 from "/public/icon (2).png";
import icon3 from "/public/icon (3).png";
import icon4 from "/public/icon (4).png";
import icon5 from "/public/icon (5).png";
import correctIcon from "/public/icons8-correct-96.png";


const inter = Raleway({subsets: ['latin']})

const Header = ({isOpen, setIsOpen}) => {


    return <div className="p-4 lg:px-32 flex justify-between items-center">
        <div className={` flex flex-row justify-center items-center`}>
            <div
                className="bg-white rounded-full w-12 h-12 flex items-center justify-center border-gray-600 border-2">
                <span className="text-gray-600 text-2xl">D</span>
            </div>
            <p className={`text-3xl text-gray-600 mx-3`}>divi</p>
        </div>

        <ul className={` flex-row space-x-6 items-center justify-center hidden lg:flex`}>
            <li>
                <a href={`#home`} className="text-xl">Home</a>
            </li>
            <li>
                <a href={`#about`} className="text-xl">About Us</a>
            </li>
            <li>
                <a href={`#services`} className="text-xl">Our Services</a>
            </li>
            <li>
                <a href={`#contact`} className="text-xl">Contact Us</a>
            </li>
        </ul>
        <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu-button">
                <svg className="w-6 h-6 text-gray-200 hover:text-gray-400"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="#383fc4"
                     viewBox="0 0 24 24"
                     stroke="#383fc4">
                    <path strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16m-7 6h7"/>
                </svg>
            </button>
        </div>

    </div>;
}

const HomePage = () => {
    return <div
        className={`flex-grow text-white flex flex-col items-start justify-start lg:justify-center mt-20 lg:p-4 ${inter.className}`}>
        <h1 className="w-full text-5xl sm:text-5xl lg:text-8xl mb-2 px-10 sm:px-20 text-start font-semibold">ALNJWM
            ALRAYH</h1>
        <h1 className="w-full text-5xl sm:text-5xl lg:text-8xl mb-4 px-10 sm:px-20 font-semibold">COMMERCIAL BROKERS
            EST.</h1>
        <button
            className={`bg-blue-600 mt-10 hover:bg-blue-700 text-white text-2xl font-bold py-6 px-5 lg:px-20 mb-4 mx-10 lg:mx-20 ${inter.className}`}>
            Get a free quote
        </button>
        <p className="text-start text-2xl mt-10 font-bold px-10 lg:hidden">
            ALNJWM ALRAYH COMMERCIAL BROKERS EST is designed to provide specialized, proficient, and
            thorough services specifically designed to meet every client's particular need and interest.
        </p>

    </div>;
}

const PageTwo = () => {
    return (
        <div id={`about`}
             className="w-fit h-screen bg-white ml-14 lg:container flex flex-col lg:flex-row items-center lg:ml-auto px-4">
            <div className={`w-full lg:w-1/3 flex flex-col items-start justify-center`}>
                <h2 style={{letterSpacing: "1rem"}}
                    className="text-sm lg:text-xl mt-5 font-bold text-blue-900 mb-4">ABOUT
                    US</h2>
                <h1 className="text-2xl lg:text-7xl font-bold text-blue-600 lg:mb-4">Our Approach</h1>
                <div className="w-full lg:w-96 flex justify-start lg:justify-center">
                    <button
                        className={`bg-blue-600 mt-10 hover:bg-blue-700 text-white text-xl lg:text-2xl font-bold py-6 px-10 lg:px-20 mb-4 ${inter.className}`}>
                        Contact an Expert
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-start justify-center lg:ml-20 my-8 w-full h-screen lg:w-1/2">
                <p className="text-dark text-xl lg:text-xl text-gray-700 mb-4">
                    ALNJWM ALRAYH COMMERCIAL BROKERS EST is a go-to point for all your financial services and needs
                    where the customer’s needs are always put first.
                </p>
                <p className="text-dark text-xl lg:text-xl text-gray-700 mb-4">
                    We are partnered with leading banks and financial institutions across the UAE which allows us to
                    fulfill all your banking needs with ease and give you, the customer, peace of mind.
                </p>
                <p className="text-dark text-xl lg:text-xl text-gray-700 mb-8">
                    ALNJWM is heavily involved in providing financial solutions, which extends to, but is not limited
                    to, credit cards, personal financing, and mortgage options from leading financial institutions in
                    the UAE, which also helps us provide you with competitive rates.
                </p>

            </div>
        </div>
    );
};

const PageThree = () => {
    const Card = ({color, icon, text}) => {
        return <div style={{backgroundColor: color}}
                    className={`w-9/12 flex flex-col justify-center items-center p-10 rounded`}>
            <Image src={icon} width={100} height={100} alt={``}/>
            <p className={`text-gray-600 text-xl font-bold text-center`}>{text}</p>
        </div>
    };
    return <div className={`w-full bg-white flex flex-col items-center`}>
        <Image className={`lg:w-full `} src={image3} width={500} height={400} alt={``}/>
        <div id={`services`}
            className="w-fit lg:w-full lg:mt-10 lg:ml-14 lg:container flex flex-col lg:flex-row items-center ">
            <div className={`w-full lg:w-1/2 flex flex-col px-8 items-start justify-center lg:px-10 `}>
                <h2 style={{letterSpacing: "1rem"}}
                    className="text-sm lg:text-xl mt-5 font-bold text-blue-900 mb-4">Services</h2>
                <h1 className="text-2xl lg:text-7xl font-bold text-blue-600 lg:mb-4">Our Services</h1>
                <div className="flex flex-col items-start justify-center my-8 w-full h-full">
                    <p className="text-dark text-xl lg:text-xl text-gray-700 mb-4">
                        ALNJWM ALRAYH COMMERCIAL BROKERS EST provide wide range of services from pump repairs
                        to installation of water pumps, Storm water and drainage pumps. Control panel supply and fitting
                        to
                        modifications to include OSM or landing alarm fault units.
                    </p>
                    <p className="text-dark text-xl lg:text-xl text-gray-700 mb-4">
                        ALNJWM ALRAYH COMMERCIAL BROKERS EST provide many specialized services in media & publication
                        industry as:
                    </p>
                </div>

            </div>
            <div className=" grid place-items-center grid-cols-1 lg:grid-cols-2 gap-y-10 lg:ml-20 my-8 w-full h-full">
                <Card color="rgba(222, 222, 222, 0.69)" icon={icon4} text="Preparing and distributing pres materials"/>
                <Card color="rgba(233, 245, 122, 0.89)" icon={icon3} text="Distribution of advertising materials"/>
                <Card color="rgba(148, 248, 122, 0.69)" icon={icon2} text="Distribution of newspaper and magazine"/>
                <Card color="rgba(222, 222, 222, 0.69)" icon={icon1} text="Distribution of books"/>
                <Card color="rgba(127, 187, 255, 0.69)" icon={icon5} text="Distribution of gifts"/>
            </div>

        </div>

        <div className={`w-full flex flex-col space-y-4`}>


        </div>

    </div>
};

const PageFour = () => {
    return <div className={`w-full h-full bg-white flex flex-col items-center justify-start  pt-20`}>
        <p className={`text-blue-600 text-2xl font-bold lg:text-7xl`}>Benefit of dealing with us</p>

        <div className={`w-full flex flex-col `}>
            <div className={`flex items-start justify-start lg:justify-center p-10 `}>
                <Image className={`mr-2`} src={correctIcon} width={35} height={35} alt={``}/>
                <p className={`text-xl text-gray-600`}>We provide the greatest flexibility, simplicity of use,
                    safety, and security of your clients demand</p>
            </div>
            <div className={`flex items-start justify-start p-10 lg:justify-center`}>
                <Image className={`mr-2`} src={correctIcon} width={35} height={35} alt={``}/>
                <p className={`text-xl text-gray-600`}>We are a team of experts with years of banking sector expertise
                    and
                    in-depth market understanding</p>
            </div>
            <div
                className={`w-full h-full flex flex-col lg:flex-row items-center justify-center lg:mb-10 lg:space-x-3`}>
                <Image className={`mt-10 mx-12`} src={image1} width={400} height={400} alt={``}/>
                <Image className={`mt-10 mb-10 lg:mb-0`} src={image2} width={400} height={400} alt={``}/>
            </div>
        </div>
    </div>
};

const PageFive = () => {
    return <div className={`py-20 px-10 flex flex-col items-center justify-center`}>
        <h1 className={`text-white text-3xl`}>Vision and mission statement</h1>
        <h1 className={`text-white text-4xl mt-16`}>Vision</h1>
        <p className={`text-white text-base text-center mt-2`}>To maintain steady growth as we diversify our portfolio
            strengthen
            our position in each of the sectors that we server improve our rating and consolidate our position as
            company
            in a commercial brokerage firm.</p>
        <Image className={`mt-10`} src={image1} width={400} height={400} alt={``}/>
        <h1 className={`text-white text-4xl mt-16`}>Mission</h1>
        <p className={`text-white text-base text-center mt-2`}>We strive to assist our existing client age to maximize
            their
            investment profitability by creating marketing solutions to meet their needs and maintain focus to continue
            to upload our
            reputation and pursue as a top reputable commercial brokerage and firm in UAE.</p>
        <Image className={`mt-10`} src={image2} width={400} height={400} alt={``}/>
    </div>
};

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            console.log('Email sent successfully');
            setFormData({
                name: '',
                email: '',
                message: '',
            });
            // Handle success (e.g., showing a success message)
        } else {
            console.error('Failed to send email');
            // Handle error (e.g., showing an error message)
        }

    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 w-full flex flex-col justify-center max-w-2xl">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
                <input type="text" value={formData.name} name="name" id="name" required
                       className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                       onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                <input type="email" name="email" value={formData.email} id="email" required
                       className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                       onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
                <textarea name="message" id="message" value={formData.message} rows="4" required
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          onChange={handleChange}></textarea>
            </div>
            <div>
                <button type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Send Message
                </button>
            </div>
        </form>
    );
};

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div style={{backgroundColor: "#383fc4"}}>
            <div className={`flex flex-col h-full ${inter.className} justify-center  custom-gradient`}>
                <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
                {/* Mobile Menu */}
                <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden bg-white shadow-md rounded-lg`}>
                    <a href="#about" onClick={() => {
                        setIsOpen(false);
                    }} className="block py-3 px-4 text-xl text-gray-800 hover:bg-gray-100 hover:text-gray-900">About</a>
                    <a href="#services" onClick={() => {
                        setIsOpen(false);
                    }}
                       className="block py-3 px-4 text-xl text-gray-800 hover:bg-gray-100 hover:text-gray-900">Services</a>
                    <a href="#contact" onClick={() => {
                        setIsOpen(false);
                    }}
                       className="block py-3 px-4 text-xl text-gray-800 hover:bg-gray-100 hover:text-gray-900">Contact</a>
                </div>

                <HomePage/>
                <div className={`flex flex-col lg:flex-row items-center justify-center lg:mb-10 lg:space-x-3 lg:mt-32`}>
                    <Image className={`mt-10 mx-12`} src={image1} width={400} height={400} alt={``}/>
                    <Image className={`mt-10 mb-10 lg:mb-0`} src={image2} width={400} height={400} alt={``}/>
                </div>

            </div>
            <PageTwo/>

            <PageThree/>

            <PageFour/>

            <PageFive/>

            <footer id={`contact`} className={`w-full h-full bg-blue-950 flex flex-col items-start justify-start py-10 px-10`}>
                <h2 style={{letterSpacing: "0.8rem"}}
                    className="text-sm lg:text-xl  font-bold text-white mb-4">INFORMATION</h2>
                <p className="text-sm lg:text-xl mt-5 font-bold text-white mb-4">Address of the office:</p>
                <p className="text-sm lg:text-xl  text-white mb-4">Clover Bay Tower - 6a Marasi Dr - Business Bay -
                    Dubai - United Arab Emirates</p>

                <p className="text-sm lg:text-xl mt-5 font-bold text-white mb-4">Phone Number:</p>
                <p className="text-sm lg:text-xl  text-white mb-4">Mobile Phone: <span>+971586279190</span></p>
                <p className="text-sm lg:text-xl  text-white mb-4">Landline: <span>+97142222567</span></p>

                <p className="text-sm lg:text-xl mt-5 font-bold text-white mb-4">E-mail:</p>
                <p className="text-sm lg:text-xl  text-white mb-4">alnjwmalrayh@gmail.com</p>
                <p className="text-sm lg:text-xl  text-white mb-4">info@alnjwmalrayh.com</p>


                <h2 style={{letterSpacing: "0.8rem"}}
                    className="text-sm lg:text-xl mt-10 font-bold text-white mb-4">WORKING HOURS</h2>
                <p className="text-sm lg:text-xl  text-white mb-4">Saturday: <span>9 AM - 5 PM</span></p>
                <p className="text-sm lg:text-xl  text-white mb-4">Sunday: <span>9 AM - 5 PM</span></p>
                <p className="text-sm lg:text-xl  text-white mb-4">Monday: <span>9 AM - 5 PM</span></p>
                <p className="text-sm lg:text-xl  text-white mb-4">Tuesday: <span>9 AM - 5 PM</span></p>
                <p className="text-sm lg:text-xl  text-white mb-4">Wednesday: <span>9 AM - 5 PM</span></p>
                <p className="text-sm lg:text-xl  text-white mb-4">Thursday: <span>9 AM - 5 PM</span></p>
                <p className="text-sm lg:text-xl  text-white mb-4">Friday: <span>9 AM - 1 PM/ 2 PM - 5 AM</span></p>

                <h2 style={{letterSpacing: "0.2rem"}}
                    className="text-sm lg:text-xl mt-10 font-bold text-white mb-4">Send us a message</h2>
                <ContactForm/>
            </footer>

        </div>
    )
}
