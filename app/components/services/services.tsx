"use client"

const Services = () => {
    const service = [
        {id: 1, heading: "Title Heading", paragraph: "Explore a wide variety of properties for renting, buying, selling, leasing, or finding, ensuring diverse choices to suit your needs."},
        {id: 2, heading: "Title Heading", paragraph: "Explore a wide variety of properties for renting, buying, selling, leasing, or finding, ensuring diverse choices to suit your needs."},
        {id: 3, heading: "Title Heading", paragraph: "Explore a wide variety of properties for renting, buying, selling, leasing, or finding, ensuring diverse choices to suit your needs."}
    ]
  return (
    <div className="bg-blue-600 mt-10 p-4 italic">
        <button className="text-white mt-6 rounded-3xl h-12 w-35 border-4 border-solid border-white bg-blue-600 lg:w-45 lg:text-xl">Our Services</button>
        <h1 className="mt-5 text-2xl text-white font-bold">WHY CHOOSE SLIMERENT</h1>
        <p className="mt-2 w-full text-sm text-white lg:w-[45%]">Welcome to SlimeRent, your ultimate destination for seamless property solutions. Whether you're renting, buying, selling, leasing, or finding your next home, our user-friendly platform offers comprehensive listings, customizable search filters, and secure transactions. Find exactly what you need with ease at SabiRent, your trusted partner in real estate.</p>
        <div className="flex flex-wrap gap-10 mt-5 md:flex-nowrap md:justify-between">
            {service.map((services) => (
            <div className="bg-white w-full p-4 flex flex-col gap-2 text-blue-600 sm:w-[40%] lg:w-[30%]" key={services.id}>
                <img className="h-10 w-10" src="/SVG's/building-svgrepo-com.svg" alt="building" />
                <h1 className="">{services.heading}</h1>
                <p className="text-sm">{services.paragraph}</p>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Services
