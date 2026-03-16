"use client"
import { useState } from "react"

const Questions = () => {
  const [openId, setOpenId] = useState<number | null>(null)

  const question = [
    {
      id: 1,
      paragraph: "How can I list my property on SlimeRent?",
      answer: "To list your property on SlimeRent, you can create an account, log in, and navigate to the 'List Property' section. Fill out the necessary details about your property, including images, price, location, and type (buy, rent, sell, lease, short-let). Once submitted, your property will be listed on SlimeRent for potential buyers or renters to view."
    },
    {
      id: 2,
      paragraph: "What types of properties can I find on SlimeRent?",
      answer: "SlimeRent offers a wide range of properties for users, including houses, apartments, lands, commercial spaces, and more. You can browse listings for properties available for sale, rent, lease, or short-term rental."
    },
    {
      id: 3,
      paragraph: "How do I contact a property owner or agent?",
      answer: "Each property listing on SlimeRent includes contact information for the owner or agent. You can use the provided contact details to reach out directly for inquiries, scheduling viewings, or negotiating terms."
    },
    {
      id: 4,
      paragraph: "Can I search based on specific criteria?",
      answer: "Yes, SlimeRent allows you to search for properties based on specific criteria such as location, price range, number of bedrooms or bathrooms, property type (e.g., house, land), and more. Use the search filters on the website to narrow down your options."
    },
    {
      id: 5,
      paragraph: "Is it free to use SlimeRent?",
      answer: "Yes, SlimeRent allows you to search for properties based on specific criteria such as location, price range, number of bedrooms or bathrooms, property type (e.g., house, land), and more. Use the search filters on the website to narrow down your options."
    }
  ]

  return (
    <div className="mt-5 p-4 italic">
      <button className="text-blue-600 mt-6 rounded-3xl h-12 p-2 border-4 border-solid border-blue-600  bg-white lg:text-xl">What you want to know</button>

      <h1 className="text-2xl text-blue-600 mt-3 font-bold">
        FREQUENTLY ASKED QUESTIONS
      </h1>

      <div className="mt-5 w-full  flex flex-col gap-2 md:flex-row md:justify-between">
        <img className="h-96 object-cover" src="/Images/Agent.jpg" alt="Agent" />
        <div className="w-full flex gap-4 flex-col justify-between md:w-[70%] ">
        {question.map((quest) => (
          <div key={quest.id} className="border-2 border-blue-600 p-3">

            <div className="flex justify-between">
              <p className="text-blue-600 font-bold">{quest.paragraph}</p>

              <button
                className="text-blue-600 cursor-pointer"
                onClick={() =>
                  setOpenId(openId === quest.id ? null : quest.id)
                }
              >
                ▼
              </button>
            </div>

            {openId === quest.id && (
              <p className="mt-2 text-blue-600">{quest.answer}</p>
            )}

          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Questions