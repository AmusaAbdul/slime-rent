"use client"
import {useState} from "react"

const Footer = () => {

    const [email, setEmail] = useState<string>("")

    const isEmail = (value: string) => {
    return /\S+@\S+\.\S+/.test(value)
  }

  const handleClick = () => {
    if (isEmail(email)) {
      alert(`${email}, thanks for subscribing!!`)
    } else {
      alert("Please enter a valid email")
    }
  }
    const year = new Date().getFullYear()
    return (
        <div className="bg-blue-600 mt-10 italic">
            <div className="p-3 flex  flex-col lg:flex-row lg:justify-between lg:items-center">
                <div className="p-3 w-full lg:w-[30%]  ">
                    <div className="text-base italic flex gap-1  p-3 w-40  font-bold bg-white  text-blue-600  lg:text-xl ">
                        <h1>SLIMERENT</h1>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="#155dfc"
                        >
                            <path d="M10.8 2.6c.7-.6 1.7-.6 2.4 0l8 7.2c.5.4.8 1 .8 1.6v8.6c0 1.1-.9 2-2 2h-4.5c-.6 0-1-.4-1-1v-4.5c0-.8-.7-1.5-1.5-1.5h-2c-.8 0-1.5.7-1.5 1.5V21c0 .6-.4 1-1 1H4c-1.1 0-2-.9-2-2v-8.6c0-.6.3-1.2.8-1.6l8-7.2z" />
                        </svg>
                    </div>
                    <h1 className="text-white text-sm mt-5 w-full ">Discover your next home with SlimeRent. Find, lease, or buy houses effortlessly in your area with our user-friendly web application.</h1>
                </div>
                <div className="flex p-3 w-full gap-7 lg:justify-around lg:gap-0 lg:w-[30%] ">
                    <div>
                        <p className="text-white ">Company</p>
                        <ul className=" text-sm text-white mt-1">
                            <li>About Us</li>
                            <li>Properties</li>
                            <li>Agents</li>
                            <li>Contact Us</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-white">Legal</p>
                        <ul className=" text-sm text-white mt-1">
                            <li>Terms of use</li>
                            <li>Privacy policy</li>
                        </ul>
                    </div>
                </div>
                <div className="p-3 w-full lg:w-[30%]">
                    <h1 className="text-white text-base">Join Our Newsletter</h1>
                    <p className="text-white text-sm">Stay updated on SlimeRent! Sign up for exclusive offers, new listings, and real estate trends.</p>
                    <div className="flex relative gap-3">
                        <input onChange={(e) => setEmail(e.target.value)} className="text-white flex font-bold w-full outline-none cursor-pointer border-2 border-white mt-3 p-2" type="text" placeholder="Email Address" />
                        <button onClick={handleClick} className="bg-white absolute right-1 bottom-2 h-7 flex justify-center items-center hover:bg-amber-100 cursor-pointer font-bold text-blue-600 p-2">Suscribe</button>
                    </div>
                </div>
            </div>

            <hr className=" text-white" />
           
            <div className="flex w-full gap-5  flex-col p-6 md:flex-row md:justify-between md:items-center">
                <div className="flex gap-15 w-full text-white text-sm  md:w-[48%]">
                    <div className="cursor-pointer text-center">
                        <button className=" cursor-pointer">
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                <path
                                    d="M18.244 2H21.5l-7.52 8.59L23 22h-6.844l-5.351-6.934L4.5 22H1.243l8.033-9.17L1 2h6.97l4.743 6.231L18.244 2zm-2.404 17.403h1.799L7.516 4.51H5.59l10.25 14.893z" />
                            </svg>
                        </button>
                        <p>SlimeRent</p>
                    </div>
                    <div className="cursor-pointer text-center">
                        <button className=" cursor-pointer">
                            <svg role="img" aria-labelledby="igTitle" viewBox="0 0 24 24" width="27" height="27" fill="none"
                                stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
                                xmlns="http://www.w3.org/2000/svg">
                                <title id="igTitle">Instagram</title>
                                <rect x="3" y="3" width="18" height="18" rx="5" ry="5"></rect>
                                <circle cx="12" cy="12" r="3.2"></circle>
                                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"></circle>
                            </svg>
                        </button>
                        <p>SlimeRent</p>
                    </div>
                    <div className="cursor-pointer text-center">
                        <button className=" cursor-pointer">
                            <svg viewBox="0 0 128 128" width="27" height="27">
                                <rect fill="#3d5a98" x="4.83" y="4.83" width="118.35" height="118.35" rx="6.53" ry="6.53"></rect><path fill="#fff" d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A126.56 126.56 0 0091 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"></path>
                            </svg>
                        </button>
                        <p>SlimeRent</p>
                    </div>
                </div>
                <p className="text-white text-center  w-full text-sm lg:text-base md:text-right md:w-[48%]">© Copyright SlimeRent {year} All Right Reserved</p>

            </div>
        </div>
    )
}

export default Footer
