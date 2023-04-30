import {NextRouter, useRouter} from "next/router";
import {useEffect} from "react";
import CustomLink from "@/pages/components/common/CustomLink";
import routes from "@/config/routes"

const Navigation = (props: any) => {
    const router: NextRouter = useRouter();

    useEffect(() => {
            if (router.pathname === router.pathname) {
                // console.log(router.pathname)
            }
        }, [router.pathname]
    )

    return (
        <nav className={"navigation"}>
            <img
                className={"logo"}
                src={"/images/logo.png"}
                alt={"Main-logo"}/>
            <CustomLink className={"navigation-bnt active "} href={routes.home}> Home </CustomLink>
            <CustomLink className={"navigation-bnt active "} href={routes.aboutUs}>About us</CustomLink>
            <div className="navigation-bnt dropdown ">
                <a className="dropbtn ">
                    Services
                </a>

                <div className="dropdown-content">
                    <a href={routes.airportTrans} >Airport Transfers</a>
                    <a href="#">Rent car</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
            <CustomLink className={"navigation-bnt active "} href={routes.blog}>Blog</CustomLink>
            <CustomLink className={"navigation-bnt active "} href={routes.contact}>Contact</CustomLink>

        </nav>
    );


}

export default Navigation