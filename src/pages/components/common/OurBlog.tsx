const OurBlog = (props: any) => {
    return (
        <div className={"blog-container"}>
            <div className={"our-blog"}>
                <div className={"blog-elements"}>
                    <div className={"blog-title"}>
                        <p className={"title-b"}>OUR BLOG</p>
                        <p className={"subtitle-blog"}>Adventure Travel Stories From Our Blog</p>
                    </div>
                    <div className={"description-blog"}>
                        <div className={"text-blog"}>
                            <p className={"textblog-description"}>Stories about inspirational destinations and adventures with us.
                                It has become a popular tourist destination for rural and mountain tourism in recent years.
                                Located on the steep slopes of the Western Rhodopes, is one of the historical and architectural
                                reserves of Bulgaria – the village Kovachevitsa.
                                <br/>
                            </p>
                            <button className={"button-blog bttn"}>Read more</button>
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

                <div className="image-blog-row">
                    <div className="image-blog-container">
                        <img src="images/img kovachevitsa.png" alt="Image 1" />
                        <div className="text-block">
                            <p>Kovachevitsa</p>
                        </div>
                        <p className={"subheading-title"}><strong>Quiet Rhodope place – village of Kovachevitsa</strong></p>
                        <p className={"subheading-description"}>It has become a popular tourist destination for rural and mountain tourism in recent years. Located on the steep slopes of the Western Rhodopes, is one of the historical and architectural reserves of Bulgaria.</p>
                        <p className={"blog-date"}>11/04/2020</p>
                    </div>
                    <div className="image-blog-container">
                        <img src="images/img istanbul.png" alt="Image 2" />
                        <div className="text-block">
                            <p>Turkey, Istanbul</p>
                        </div>
                        <p className={"subheading-title"}><strong>A guide for a first-time stopper by the intercontinental</strong></p>
                        <p className={"subheading-description"}>Istanbul is an absolute must-visit city at least once in a lifetime. Whoever you ask about Istanbul, everyone will tell you that one visit is not enough to feel this vibrant megapolis.</p>
                        <p className={"blog-date"}>30/01/2020</p>
                    </div>
                    <div className="image-blog-container">
                        <img src="images/img bulgaria.png" alt="Image 3" />
                        <div className="text-block">
                            <p>Bulgaria</p>
                        </div>
                        <p className={"subheading-title"}><strong>Live the fairy tale in the Rhodopes Mountains</strong></p>
                        <p className={"subheading-description"}>To really immerse yourself in Bulgarian nature, you have to visit the Rhodope mountains. This mythical and mystical landscape will enchant you from the first sight.</p>
                        <p className={"blog-date"}>02/12/2019</p>
                    </div>
                </div>
            </div>
        </div>
    );


}

export default OurBlog