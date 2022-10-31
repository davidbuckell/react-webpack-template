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
    const pages = [
        { id: 0, title: 'home', url: '/' },
        { id: 1, title: 'hub', url: 'hub' },
        { id: 2, title: 'content', url: 'content' },
        { id: 3, title: 'secure page', url: 'secure-page' }
    ];

    useEffect(() => {        
        window.executeMainJs();
        document.body.classList.remove('is-preload');
    }, []);

    return (
        <div id="sidebar">
            <React.Fragment>
                <div className="inner">
                    <Search pages={pages} />
                    { isAuthenticated ? <SignOutButton/> : <SignInButton/> }
                    <NavigationLinks />
                    <NavigationHubLinks />
                    <Footer />
                </div>
            </React.Fragment>
        </div>
    );
}

export default SideNavigation;