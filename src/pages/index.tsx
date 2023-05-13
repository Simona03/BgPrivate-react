import Navigation from "../pages/components/common/Navigation";
import About from "../pages/components/common/About";
import {FaChevronRight, FaMapMarkedAlt} from "react-icons/fa";
import ChooseUs from "../pages/components/common/ChooseUs";
import OurBlog from "../pages/components/common/OurBlog";
import Footer from "../pages/components/common/Footer";
import React from "react";

interface homeProps {
    reload: boolean,
    scrollY: number
}

export default class Home extends React.Component<any, homeProps> {
    state = {
        reload: false,
        scrollY: 0
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        const iconShownBefore: string | null = localStorage.getItem('iconShownBefore');

        if (!iconShownBefore) {
            this.setState({reload: true})
            localStorage.setItem('iconShownBefore', 'true');

            setTimeout(() => {
                this.setState({reload: false})
            }, 2000)
        }
    }


    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        this.setState({scrollY: window.scrollY})
    }

    render() {
        console.log(this.state.scrollY)
        return (
            <>
                {this.state.reload ?
                    <div className="realod-div">
                        <FaMapMarkedAlt className={"reload-icon"}/>
                        <h1 className={"welcome-message"}>Welcome to Bulgarian Private Tours & Transfers</h1>
                    </div>
                    : (
                        <div className={"main-container"}>
                            <div className={"home-page"}>
                                <div className={"header-container"}>
                                    <Navigation/>
                                    <div className={"header-title"}>
                                        <p className={'title'}>
                                            Book With Us
                                            <br/>
                                            And Book It Out
                                            <br/>
                                            Of Here!
                                        </p>
                                        <div className={"transfers-btn"}>
                                            <FaChevronRight className={"button-circle"} size={25} color={"#B4B4B4"}/>
                                            <p className={"transfers"}>Transfers</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={"banner-container"}>
                                    <div className={"banner-content"}>
                                        <div className={"experience"}>
                                            <p className={"sub-experience"}>5+</p>
                                            <p className={"description"}>Years experience</p>
                                        </div>
                                        <div className={"destination"}>
                                            <p className={"sub-destination"}>10+</p>
                                            <p className={"destination-collab"}>Destination Collaboration</p>
                                        </div>
                                        <div className={"tourist-dest"}>
                                            <p className={"sub-tourist"}>50+</p>
                                            <p className={"tourist-destination"}>Tourist Destination</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                this.state.scrollY >= 250 && <About/>
                            }
                            {
                                this.state.scrollY >=1200 && <ChooseUs/>
                            }

                            {
                                this.state.scrollY >=2000 && <OurBlog/>
                            }

                            {
                                this.state.scrollY > 3000 && <Footer/>
                            }

                        </div>
                    )}
            </>
        )
    }
}
