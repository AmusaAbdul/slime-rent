"use client"

const propertyTypes = () => {
    const images = [
        {id: 1, image: "/Images/Apartment 1.jpg"},
        {id: 2, image: "/Images/Apartment 2.jpg"},
        {id: 3, image: "/Images/Modern house 2.jpg"},
        {id: 4, image: "/Images/Apartment 3.jpg"},
        {id: 5, image: "/Images/Apartment 4.jpg"},
    ]
  return (
    <div id="propertyListing" className="mt-5  italic">
        <div className="p-4">
              <button className="text-blue-600 mt-6 rounded-3xl h-12 w-35 border-4 border-solid border-blue-600 bg-white lg:w-45 lg:text-xl">Property Types</button>
              <h1 className="text-2xl text-blue-600 mt-3 font-bold">LET'S FIND A HOME THAT IS PERFECT FOR YOU</h1>
        </div>
        <div className="mt-3 flex overflow-x-auto gap-4">
            {images.map((apartment) => (
                <img className="flex min-w-64 animate-scroll flex-col gap-4 text-white bg-blue-600 p-2" key={apartment.id} src={apartment.image} alt="Apartment" />
            ))}
        </div>
        <div className="flex justify-center items-center">
            <button className="bg-blue-600 text-sm hover:bg-blue-800 mt-5 cursor-pointer p-3 text-white w-[50%]">Get Started</button>
        </div>
    </div>
  )
}

export default propertyTypes
