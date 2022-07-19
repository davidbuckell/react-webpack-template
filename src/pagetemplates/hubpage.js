import React from "react";
import Content from "../components/pagestructure/content";
import HubLinks from "../components/navigation/hublinks";

const HubPage = () => {
    return (
        <React.Fragment>
            <Content />
            <HubLinks />
        </React.Fragment>        
    );
}

export default HubPage;