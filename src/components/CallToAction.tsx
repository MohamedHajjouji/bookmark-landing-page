import { useEffect, useState } from "react"
export default function CallToAction(){
    const extensions = [
        {
            id: 0,
            title: "Add to Chrome",
            image: "/src/assets/logo-chrome.svg",
            link: "https://www.google.com",
            version: "Minimum Version 1.0.0"
        },
        {
            id: 1,
            title: "Add to Firefox",
            image: "/src/assets/logo-firefox.svg",
            link: "https://www.google.com",
            version: "Minimum Version 1.0.0"
        },
        {
            id: 2,
            title: "Add to Opera",
            image: "/src/assets/logo-opera.svg",
            link: "https://www.google.com",
            version: "Minimum Version 1.0.0"
        },
    ]
    const [isMobile, setMobile] = useState(75)
    
    function eventHandler(){
        if(window.innerWidth < 768){
            setMobile(0)
        }else{
            setMobile(75)
        }

    }
    useEffect(() => {
        eventHandler()
        window.addEventListener("resize", eventHandler)
    }, [])

    const extentionsList = extensions.map(extension =>
        <div style={{ marginTop: `${isMobile * extension.id}px` }}      className={"extension flex flex-col justify-center items-center gap-4"} key={extension.id}>
            <img src={extension.image} alt="" className="w-[80px]" />
            <h1 className=" text-[20px] font-[500]">{extension.title}</h1>
            <p className="text-[14px] text-gray-600">{extension.version}</p>
            <button className='py-[10px] px-[20px] text-[14px] border-[2px] cursor-pointer text-white rounded-[4px] bg-[#5368df] mt-8 hover:text-[#5368df] hover:bg-white'>Add & Install extension</button>
        </div>
    )
    return(
        <div className=" call-to-action flex flex-col justify-center items-center gap-16 mt-[200px] mb-[100px]">
            <div className="  CTA-text text-center max-w-[500px]">
                <h1 className="text-3xl font-bold"> Download the extension</h1>
                <p className="text-gray-500 mt-6 text-base">we're got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize</p>
            </div>
            <div className="extensions flex  flex-col md:flex-row gap-16 ">
                {extentionsList}
            </div>
        </div>
    )
}