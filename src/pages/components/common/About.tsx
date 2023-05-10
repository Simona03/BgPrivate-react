const About = (props: any) => {
    return (
        <div className={"about-container"}>
            <div className={"about-us"}>
                <div className={"about-elements"}>
                    <div className={"about-title"}>
                        <p className={"title-a"}>ABOUT US</p>
                        <p className={"subtitle-about"}>Explore All Corners Of Bulgaria With Us</p>
                    </div>
                    <div className={"description-about"}>
                        <div className={"text-about"}>
                            <p className={"text-description"}>We would like to offer you the opportunity for an
                                unforgettable experience among the most beautiful and picturesque places in Bulgaria.
                                Trust the invaluable experience and professionalism of our drivers. Choose from our
                                ready-made small group excursion programs or design your own individual journey to your
                                liking.
                                <br/>
                            </p>
                            <button className={"button btn"}>Read more</button>
                        </div>
                    </div>
                </div>
                {/*    <div className={"images-container"}>*/}
                {/*        /!*<div className={"container"}>*!/*/}
                {/*            <img src={"images/people1.jpg"} className={"image"}/>*/}
                {/*            /!*<div className={"overlay"}>*!/*/}
                {/*            /!*    <div className={"image-text"}>Hello World</div>*!/*/}
                {/*            /!*</div>*!/*/}
                {/*        /!*</div>*!/*/}
                {/*        /!*<div className={"container"}>*!/*/}
                {/*            <img src={"images/venice.jpg"} className={"image"}/>*/}
                {/*            /!*<div className={"overlay"}>*!/*/}
                {/*            /!*    <div className={"image-text"}>Hello World</div>*!/*/}
                {/*            /!*</div>*!/*/}
                {/*        /!*</div>*!/*/}
                {/*        /!*<div className={"container"}>*!/*/}
                {/*            <img src={"images/palms.jpg"} className={"image"}/>*/}
                {/*            /!*<div className={"overlay"}>*!/*/}
                {/*            /!*    <div className={"image-text"}>Hello World</div>*!/*/}
                {/*            /!*</div>*!/*/}
                {/*        /!*</div>*!/*/}
                {/*</div>*/}

                <div className="image-row">
                    <div className="image-container">
                        <img src={"images/people1.jpg"} alt="Image 1"/>
                            <div className="overlay"></div>
                            <div className="text">It has become a popular tourist destination for rural and mountain tourism in recent years. Located on the steep slopes of the Western Rhodopes</div>
                    </div>
                    <div className="image-container">
                        <img src={"images/venice.jpg"} alt="Image 2"/>
                            <div className="overlay"></div>
                            <div className="text">Venice is a city in northeastern Italy and the capital of the Veneto region. It is built on a group of 118 small islands that are separated by canals and linked by over 400 bridges</div>
                    </div>
                    <div className="image-container">
                        <img  src={"images/palms.jpg"} alt="Image 3"/>
                            <div className="overlay"></div>
                            <div className="text">Thasos or Thassos is a Greek island in the North Aegean Sea. It is the northernmost major Greek island, and 12th largest by area. The island has an area of 380 km² and...</div>
                    </div>
                </div>
            </div>
        </div>
    );


}

export default About