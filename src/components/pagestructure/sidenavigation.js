import React from "react";
import NavigationHubLinks from "../navigation/navigationhublinks";
import NavigationLinks from "../navigation/navigationlinks";
import Search from "../navigation/search";
import Footer from "./footer";

function SideNavigation() {
    return (
        <div id="sidebar">
            <div className="inner">                
                <Search />
                <NavigationLinks />
                <NavigationHubLinks />
                <Footer />
            </div>
        </div>
    );
}

export default SideNavigation;