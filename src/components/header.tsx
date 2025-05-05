
import { useState, useEffect } from "react";
import logo from "/src/assets/logo-bookmark.svg";
import iconHamburger from "/src/assets/icon-hamburger.svg"
import iconClose from "/src/assets/icon-close.svg"
import logoPhone from "/src/assets/logo-nav-phone.svg"
export default function Header() {
    const [isOpen, setIsOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(()=>{
        const handleResize = () => {
            if (window.innerWidth <= 758) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize(); // Call it once to set the initial state
        
    })
    
  
    if(isMobile){
        if (isOpen) {
            return(
            
                    <header style={{background: "rgb(37, 43, 70, 0.95)"}} className="header flex flex-col items-center justify-start  text-[14px] uppercase fixed  w-screen h-screen px-4">
                        <div className="container flex flex-col  align-center justify-between">
                            <div className="logo flex items-center py-8  border-b-gray-500 justify-between border-b-[1px]">
                                <img src={logoPhone} alt="logo" className="" />
                                <img  onClick={()=> setIsOpen(false)} src={iconClose} className="cursor-pointer" alt="" />
                            </div>
                            <nav className="nav flex justify-center" >
                                <ul className="w-full items-center gap-16 text-white tracking-[5px] text-xl font-[300]  flex-col ">
                                    <li className="w-full flex"><a className="py-4  border-b-gray-500 justify-between border-b-[1px] w-full text-center" href="#features">features</a></li>
                                    <li className="w-full flex"><a className="py-4  border-b-gray-500 justify-between border-b-[1px] w-full text-center" href="#Pricing">Pricing</a></li>
                                    <li className="w-full flex"><a className="py-4  border-b-gray-500 justify-between border-b-[1px] w-full text-center" href="#contact">contact</a></li>
                                    <li className="w-full flex"><a href="#login" className="  py-[6px] mt-4   rounded-[4px] w-full border-[2px] border-white text-center">login</a></li>
                                </ul>
                            </nav>
                        </div>
                    </header>
                
                
            )
        }
        else{
            return(
                <header className="py-8 bg-white fixed flex w-screen px-4 flex items-center justify-between">
                    <img src={logo} alt="" />
                     <img src={iconHamburger} onClick={()=> setIsOpen(true)} alt="" className="cursor-pointer" />
    
                </header>
            )
        }
    }
    else{
        return(
            
             <header className="header uppercase max-w-[1440px] px-[100px] py-12 ">
                        <div className="container flex  align-center min-w-full  justify-between">
                            <div >
                                <img src="/src/assets/logo-bookmark.svg" alt="logo"  />
                               
                            </div>
                            <nav className="nav flex " >
                                <ul className=" flex items-center  text-gray-600 font-[500] gap-8 tracking-[2px] text-[12px]">
                                    <li ><a className="hover:text-red-400" href="#features">features</a></li>
                                    <li ><a className="hover:text-red-400" href="#Pricing">Pricing</a></li>
                                    <li ><a className="hover:text-red-400" href="#contact">contact</a></li>
                                    <li ><a  href="#login" className=" px-[30px] py-3 bg-red-400 rounded-[4px] border-[2px] border-red-400 text-white hover:text-red-400 hover:bg-white">login</a></li>
                                </ul>
                            </nav>
                        </div>
                    </header>
            
        )
    }
}
