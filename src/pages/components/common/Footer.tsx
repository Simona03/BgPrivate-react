import {FaChevronRight, FaFacebook, FaInstagram, FaPinterest} from "react-icons/fa";
const Footer = (props: any) => {
    return (
        <div className={"footer-container"}>
            <div className={"footer"}>
                <img className={"footer-logo"} src={"images/asset-211x-2.png"}/>
                <div className={"txt-contact"}>
                    <p className={"contact-us"}>CONTACT US</p>
                    <p className={"location"}>Burgas 8000, Lorna 8</p>
                    <p className={"phone"}>+359 988 20 63 18</p>
                    <p className={"email"}>office@bgprivatetour.com</p>
                </div>
                <div className={"socials"}>
                    <div className={"txt-social"}>
                        <p className={"follow-us"}>FOLLOW US</p>
                        <p className={"message-social"}>Yes, we are social</p>
                    </div>
                </div>
                <div className="social-icons">
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaPinterest /></a>
                    <a href="#"><FaInstagram /></a>
                </div>
            </div>
            <div className={"line"}></div>
            <p className={"company-name"}>©{new Date().getFullYear()} MountainCode Intellegence | All Rights Reserved</p>
        </div>
    );


}

export default Footer