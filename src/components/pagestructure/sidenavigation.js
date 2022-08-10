import React, { useEffect } from "react";
import NavigationHubLinks from "../navigation/navigationhublinks";
import NavigationLinks from "../navigation/navigationlinks";
import Search from "../navigation/search";
import Footer from "./footer";


function SideNavigation() {
    
    useEffect(() => {                
        window.executeMainJs();
    }, []);

    return (
        <div id="sidebar">
            <React.Fragment>                
                <div className="inner">
                    <Search />
                    <NavigationLinks />
                    <NavigationHubLinks />
                    <Footer />
                </div>
            </React.Fragment>
        </div >
    );
}

export default SideNavigation;