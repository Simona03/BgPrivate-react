import {NextRouter, useRouter} from "next/router";
import {useEffect} from "react";
import CustomLink from "@/pages/components/common/CustomLink";
import routes from "@/config/routes"


const Navigation = (props: any) => {
    const router: NextRouter = useRouter();

    useEffect(() => {
            if (router.pathname === router.pathname) {
                console.log(router.pathname)
            }
        }, [router.pathname]
    )

    return (
        <nav className={"navigation"}>
            <CustomLink href={routes.home}>Home</CustomLink>
            <CustomLink className={"split"} href={routes.signup}>Signup</CustomLink>
            <CustomLink className={"split"} href={routes.login}>Login</CustomLink>
        </nav>
    );


}

export default Navigation