import { useState } from 'react';
import firstFeatureIllustration from "/src/assets/illustration-features-tab-1.svg"
import secondFeatureIllustration from "/src/assets/illustration-features-tab-2.svg"
export default function Features(){
    const [activeTab, setActiveTab] = useState(1);
    const tabs = [
        {
            id: 1,
            title: "Simple Bookmarking",
            description: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
            image: firstFeatureIllustration,
            link: secondFeatureIllustration
        },
        {
            id: 2,
            title: "Speedy Searching",
            description: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
            image: "/src/assets/illustration-features-tab-2.svg",
            link: "https://www.google.com"
        },
      
    ]
    const tabsNavigation = tabs.map(tab => 
    
            <button onClick={() => setActiveTab(tab.id)} className={activeTab == tab.id ? "cursor-pointer text-black px-[25px] py-[15px] text-grey-400 border-red-400 border-b-[5px]": "px-[25px] py-[15px] text-gray-600 border-b-[5px] border-white cursor-pointer hover:text-red-400"} key={tab.id}>
            {tab.title}  
            </button>
     
    )
      
    const listTabs = tabs.map(tab => 
        <div className={activeTab == tab.id ? "pt-[50px] flex gap-16 flex-col w-full  md:flex-row justify-center md:justify-between items-center ": "hidden"}>
            <img src={tab.image} alt="" className="md:w-[45%]" />
            <div className="text-center md:text-left md:w-[45%]">
                <h1 className="text-3xl font-bold">{tab.title}</h1>
                <p className="text-gray-500 mt-4  text-base">{tab.description}</p>
                <button className='py-[10px] cursor-pointer px-[20px] text-[14px] text-white rounded-[4px] bg-[#5368df]  mt-8'>Learn More</button>
            </div>
            
        </div>
    )

    return(
        <div className="features flex flex-col justify-center items-center gap-16 mt-[160px]">
            <div className="features-text text-center max-w-[500px]">
                <h1 className="text-4xl font-bold">Features</h1>
                <p className="text-gray-500 mt-4 text-base">Our aim is to make it quick and easy for you to access your favourite websites. Your
                bookmarks sync between your devices so you can access them on the go.</p>
            </div>
            <div className="features-tabs flex flex-col items-center justify-center">
                <div className='flex tabs-navigation justify-center flex-col w-fit md:flex-row '>
                {tabsNavigation}
                </div>
               {listTabs}
            </div>
        </div>
    )
}