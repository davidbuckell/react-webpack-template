import React from "react";
import Content from "../components/pagestructure/content";
import HubLinks from "../components/navigation/hublinks";

const HubPage = () => {
    return (
        <React.Fragment>
            <Content title="Hub Page" pic="images/pic04.jpg" />
            <HubLinks />
        </React.Fragment>        
    );
}

export default HubPage;