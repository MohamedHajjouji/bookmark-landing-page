import footerLogo from '/src/assets/logo-bookmark-footer.svg';
import iconFacebook from '/src/assets/icon-facebook.svg';
import iconTwitter from '/src/assets/icon-twitter.svg';
export default function Footer(){
    return(
        <div className="footer flex-col md:flex-row flex items-center px-[100px] gap-8 bg-[#252b46] py-[30px] max-w-[1440px] mx-auto justify-between ">
            <div className="flex flex-col md:flex-row items-center justify-start gap-8 text-[14px] md:gap-16 uppercase w-full">
            <img src={footerLogo} alt="logo" />
            <ul className="flex gap-4 text-white md:flex-row font-light flex-col">
                    <li><a className="hover:text-red-400" href="#features">features</a></li>
                    <li><a className="hover:text-red-400" href="#Pricing">Pricing</a></li>
                    <li><a className="hover:text-red-400" href="#contact">contact</a></li>
            </ul>      
            </div>
            <div className="social-media ">
                <ul className="flex justify-center items-center gap-4">
                    <li><a className="hover:text-red-400" href="#facebook"><img src={iconFacebook} alt="" /></a></li>
                    <li><a className="hover:text-red-400" href="#twitter"><img src={iconTwitter} alt="" /></a></li>
                </ul>
            </div>
        </div>
    )
}