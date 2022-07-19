import React from "react";
import HomePageIntro from "../components/pagestructure/homepageintro";
import PrimaryLinks from "../components/navigation/primarylinks";
import HubLinks from "../components/navigation/hublinks";

const HomePage = () => {
    return (
        <React.Fragment>
            <HomePageIntro />
            <PrimaryLinks />
            <HubLinks />
        </React.Fragment>        
    );
}

export default HomePage;