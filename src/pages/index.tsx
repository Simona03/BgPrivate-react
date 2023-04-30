import Navigation from "@/pages/components/common/Navigation";
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
                  </div>
              </div>

          </div>
      </div>
  )
}
