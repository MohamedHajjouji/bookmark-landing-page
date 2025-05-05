export default function Hero(){
    return(
        <div className="hero flex   flex-col gap-16 md:items-center lg:flex-row pt-32 md:pt-16 ">
            <div className="hero-text text-center w-[100%] md:max-w-[600px] md:text-center md:mt-0  lg:text-left lg:w-[50%] lg:min-w-[400px]">
                <h1 className="text-3xl font-[600] md:text-[40px]">A Simple Bookmark Manager</h1>
                <p className="text-gray-500 mt-4 text-sm md:text-base"> A clean and simple interface to organize your favourite websites. Open a new 
                browser tab and see your sites load instantly. Try it for free.</p>
                <div className="flex  justify-center md:gap-4 lg:justify-start">
                    <button className="py-[12px] px-[15px] text-sm text-white rounded-[8px] bg-[#5368df] mt-8 md:text-base border-[2px] hover:text-[#5368df] hover:bg-white cursor-pointer">Get it on Chrome</button>
                    <button className="py-[12px] px-[15px] text-sm rounded-[4px] md:text-base mt-8 border-[2px] border-white hover:border-black cursor-pointer">Get it on FireFox</button>
                </div>
            </div>
            <div className="hero-images  ">
                <img src="/src/assets/illustration-hero.svg" alt="hero" className="hero-image mb-[-25px] lg:mb-[-50px] lg:ml-[50px]"/>   
            </div>

        </div>
    )
}
