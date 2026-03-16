"use client"

const SearchContainer = () => {
    return (
        <div className="bg-white text-xs mb-10 italic flex flex-col gap-4 p-4 rounded-lg shadow-lg w-full text-black md:text-base">
            <div className="flex text-white justify-between w-full">
                <button className="w-[48%] hover:bg-blue-800  p-2 bg-blue-600 cursor-pointer">Rent</button>
                <button className="w-[48%] p-2 hover:bg-blue-800 bg-blue-600 cursor-pointer">Buy</button>
            </div>
            <input className="w-full text-blue-600 outline-none border-2 cursor-pointer p-2 border-blue-600 " type="search" placeholder="Enter Location" />
            <div className="flex justify-between w-full">
                <select className="text-white p-3 h-10 cursor-pointer w-[48%] hover:bg-blue-800 outline-none bg-blue-600" id="Property Type">
                    <option className="cursor-pointer" value="PropertyType">Property Type</option>
                    <option className="cursor-pointer" value="Duplex">Duplex</option>
                    <option className="cursor-pointer" value="Bungalows">Bungalows</option>
                    <option className="cursor-pointer" value="Apartment">Apartment</option>
                    <option className="cursor-pointer" value="Mansions">Mansions</option>
                    <option className="cursor-pointer" value="Terrace">Terrace</option>
                </select>
                <select className="text-white cursor-pointer h-10 p-3 w-[48%] hover:bg-blue-800 outline-none bg-blue-600" id="Price Range">
                    <option className="cursor-pointer" value="PriceRange">Price Range</option>
                    <option className="cursor-pointer" value="$500 - $4500">$500 - $4500</option>
                    <option className="cursor-pointer" value="$5000 - $10000">$5000 - $10000</option>
                    <option className="cursor-pointer" value="$11000 - $20000">$11000 - $20000</option>
                    <option className="cursor-pointer" value="$25000 and above">$25000 and above</option>
                </select>
            </div>
            <button className="p-3 hover:bg-blue-800 cursor-pointer bg-blue-600 text-white w-full ">Search</button>
        </div>
    )
}

export default SearchContainer
