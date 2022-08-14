import React, { useEffect } from "react";
import NavigationHubLinks from "../navigation/navigationhublinks";
import NavigationLinks from "../navigation/navigationlinks";
import Search from "../navigation/search";
import Footer from "./footer";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "../authentication/signInButton";
import { SignOutButton } from "../authentication/signOutButton";


function SideNavigation() {
    const isAuthenticated = useIsAuthenticated();

    useEffect(() => {                
        window.executeMainJs();
    }, []);

    return (
        <div id="sidebar">
            <React.Fragment>
                <div className="inner">
                    <Search />
                    { isAuthenticated ? <SignOutButton/> : <SignInButton/> }
                    <NavigationLinks />
                    <NavigationHubLinks />
                    <Footer />
                </div>
            </React.Fragment>
        </div >
    );
}

export default SideNavigation;