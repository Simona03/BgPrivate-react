const ChooseUs = (props: any) => {
    return (
        <div className={"choose-container"}>
            <div className={"choose-us"}>
                <div className={"choose-elements"}>
                    <div className={"choose-title"}>
                        <p className={"ch-title"}>WHY CHOOSE US</p>
                        <p className={"subtitle-choose"}>With Our Experience We Will Serve You</p>
                    </div>
                    <p className={"description-choose"}>The personal driving service we bring to your attention is designed to provide
                        the highest possible quality and service and convenience for you. Whether your trip is work-related or you want
                        to get to the international airport to go on your vacation, we will provide you with the most comfortable transportation.
                        <br/>
                    </p>
                    <button className={"button-choose choose"}>Read more</button>
                </div>
            </div>
            <img className={"choose-img"} src={"images/rectangle-2416.png"}/>
        </div>
    );


}

export default ChooseUs