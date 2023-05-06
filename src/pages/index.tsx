import Navigation from "@/pages/components/common/Navigation";
import { FaChevronRight } from "react-icons/fa";
export default function Home() {
  return (
      <div className={"main-container"}>
          <div className={"home-page"} >
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
      </div>
  )
}
