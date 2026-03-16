"use client"
import BackgroundText from "./backgroundText"
import SearchContainer from "./searchContainer"

const Background = () => {
  return (
    <div className="flex items-center justify-center  text-white p-5 bg-center bg-cover w-full " style={{backgroundImage: "url('/Images/backgroundImage.jpg')"}}>
      <div className="flex flex-col mt-10 items-center gap-6 w-full lg:w-[60%] xl:w-[50%]">
        <BackgroundText />
        <SearchContainer />
      </div>
    </div>
  )
}

export default Background




