"use client"
import { useState } from "react"
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [translateX, setTranslateX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;

        const currentX = e.touches[0].clientX;
        const diff = currentX - startX;

        if (diff > 0) {
            setTranslateX(diff);
        }
    };

    const handleTouchEnd = () => {
        setIsDragging(false);

        if (translateX > 100) {
            setIsMenuOpen(false);
        }
        setTranslateX(0);
    };


    return (
        <div className="flex items-center justify-between p-3 italic bg-blue-600 text-white w-full ">
            <div className="text-base italic flex gap-1 justify-center items-center font-bold bg-white  text-blue-600 px-2 py-1 lg:text-xl ">
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
                <div className="flex flex-col justify-center cursor-pointer w-fit z-1002 lg:hidden gap-1 " onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <div className="bg-white h-1 w-4 rounded"></div>
                    <div className="bg-white h-1 w-6 ml-1 rounded"></div>
                    <div className="bg-white h-1 w-4 ml-3 rounded"></div>
                </div>
               {isMenuOpen && (<div className="fixed inset-0 bg-black/50 z-998" onClick={() => setIsMenuOpen(false)} />)}
               <nav onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    style={{
                        transform: isMenuOpen
                            ? `translateX(${translateX}px)`
                            : `translateX(-100%)`,
                        transition: isDragging ? "none" : "transform 0.3s ease",
                    }}
                    className={`z-999 p-7 pt-10 text-base fixed top-0 right-0 h-full w-[80%] flex flex-col text-center gap-7 bg-blue-600 ${isMenuOpen ? "block" : "hidden"}`}
                >
                    <ul className="flex flex-col gap-4 cursor-pointer">
                        <li className="hover:bg-white hover:text-blue-600 p-2 rounded"><a href="#home">Home</a></li>
                        <li className="hover:bg-white hover:text-blue-600 p-2 rounded"><a href="#propertyListing">Property Listing</a></li>
                        <li className="hover:bg-white hover:text-blue-600 p-2 rounded"><a href="">About Us</a></li>
                        <li className="hover:bg-white hover:text-blue-600 p-2 rounded"><a href="#agents">Agents</a></li>
                        <li className="hover:bg-white hover:text-blue-600 p-2 rounded"><a href="">Contact</a></li>
                    </ul>
                    <div className="flex flex-col gap-4">
                        <div className="bg-white hover:bg-amber-100 px-2 py-1 rounded font-bold cursor-pointer">
                            <h1 className="text-blue-600">Post a Property</h1>
                        </div>
                        <div className="bg-white hover:bg-amber-100 px-2 py-1 rounded font-bold cursor-pointer">
                            <h1 className="text-blue-600">Sign In</h1>
                        </div>
                    </div>
                </nav>
            <nav className="hidden lg:flex  lg:items-center lg:justify-between ">
                <ul className="flex space-x-4 cursor-pointer">
                    <li className="hover:bg-white hover:text-blue-600 p-2 rounded"><a href="#home">Home</a></li>
                    <li className="hover:bg-white hover:text-blue-600 p-2 rounded"><a href="#propertyListing">Property Listing</a></li>
                    <li className="hover:bg-white hover:text-blue-600 p-2 rounded"><a href="">About Us</a></li>
                    <li className="hover:bg-white hover:text-blue-600 p-2 rounded"><a href="#agents">Agents</a></li>
                    <li className="hover:bg-white hover:text-blue-600 p-2 rounded"><a href="">Contact</a></li>
                </ul>
            </nav>
            <div className="hidden lg:flex gap-4">
                <div className="bg-white hover:bg-amber-100 px-2 py-1 rounded font-bold cursor-pointer">
                    <h1 className="text-blue-600">Post a Property</h1>
                </div>  
                <div className="bg-white hover:bg-amber-100 px-2 py-1 rounded font-bold cursor-pointer">
                    <h1 className="text-blue-600">Sign In</h1>
                </div>
            </div>
        </div>
    )
}

export default Navbar
