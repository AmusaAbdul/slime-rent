"use client"

const Properties = () => {

    const Properties = [
        { id: 1, name: "Modern Apartment", location: "Surulere, Lagos", price: "$3000", bed: "2 beds", bath: "2 baths", upload: "posted a year ago", image: "/Images/Modern house 1.jpg" },
        { id: 2, name: "Modern Apartment", location: "Victoria Island, Lagos", price: "$2000", bed: "2 beds", bath: "2 baths", upload: "posted 6mths ago", image: "/Images/Modern house 1.jpg" },
        { id: 3, name: "Modern Apartment", location: "Gwarinpa, Abuja", price: "$12000", bed: "4 beds", bath: "4 baths", upload: "posted 3 weeks ago", image: "/Images/Modern house 1.jpg" },
        { id: 4, name: "Modern Apartment", location: "Ikotun, Lagos", price: "$500", bed: "1 bed", bath: "1 bath", upload: "posted 4mths ago", image: "/Images/Modern house 1.jpg" },
        { id: 5, name: "Modern Apartment", location: "Ikoyi, Lagos", price: "$26000", bed: "4 beds", bath: "4 baths", upload: "posted 8mths ago", image: "/Images/Modern house 1.jpg" },
        { id: 6, name: "Modern Apartment", location: "Lekki, Lagos", price: "$17000", bed: "3 beds", bath: "3 beds", upload: "posted 1 week ago", image: "/Images/Modern house 1.jpg" },
    ]
    return (
        <div className="mt-10  italic text-blue-600">
            <div className="p-4">
                <button className="text-blue-600 rounded-3xl h-12 w-35 border-4 border-solid border-blue-600 bg-white lg:w-45 lg:text-xl">Discover</button>
                <h1 className="mt-2 text-base font-bold lg:text-xl ">FEATURED PROPERTIES</h1>
            </div>   
            <div className="mt-3 flex overflow-x-auto gap-4">
                {Properties.map((property) => (
                    <div key={property.id} className="flex min-w-64 animate-scroll flex-col gap-4 text-white bg-blue-600 p-2">
                        <div className="relative">
                            <img className="object-cover h-60" src={property.image} alt={property.name} />
                            <button className="bg-blue-600 cursor-pointer p-2 h-7 ml-1 flex justify-center items-center absolute top-0.5 text-sm">For Sale</button>
                        </div>
                        <h1 className="font-bold">{property.name}</h1>
                        <p className="text-sm flex">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="white"
                                viewBox="0 0 24 24" 
                                width="20"
                                height="20"
                            >
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 
                                    9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 
                                    2.5 2.5S13.38 11.5 12 11.5z"
                                />
                            </svg>                
                            {property.location}
                        </p>
                        <h1 className="text-sm font-bold">{property.price}</h1>
                        <p className="text-sm flex gap-1">
                            <>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="white"
                                    width="20"
                                    height="20"
                                >
                                    <path d="M21 10V7a2 2 0 0 0-2-2h-6v5H3V5H1v13h2v-3h18v3h2v-8h-2zm-8 0V7h6v3h-6z" />
                                </svg>
                                {property.bed}
                            </>,
                            <>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="white"
                                    width="20"
                                    height="20"
                                >
                                    <path d="M7 7V5a5 5 0 0 1 10 0h-2a3 3 0 0 0-6 0v2h11v4a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7h5zm13 4V9H4v2a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3zM6 18a1 1 0 0 0 1 1h1v2H6v-3zm10 1a1 1 0 0 0 1-1v3h-2v-2h1z" />
                                </svg>
                                {property.bath}
                            </>
                        </p>
                        <div className="flex flex-col gap-2">
                            <p className="text-xs flex gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="20"
                                    height="20"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="12" x2="12" y2="7"></line>
                                    <line x1="12" y1="12" x2="16" y2="12"></line>
                                </svg>
                                {property.upload}</p>
                            <button className="text-sm bg-white text-blue-600 p-1 cursor-pointer  hover:bg-amber-100">View</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center">
                <button className="bg-blue-600 text-sm hover:bg-blue-800 mt-5 p-3 cursor-pointer text-white w-[50%]">View Properties</button>
            </div>
        </div>
    )
}

export default Properties
