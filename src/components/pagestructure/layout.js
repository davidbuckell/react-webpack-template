import React from "react";
import { Link, Outlet } from 'react-router-dom';
import Header from "./header";
import SideNavigation from "./sidenavigation";

function Layout() {
    return (
        <React.Fragment>
            <div id="main">
                <div className="inner">
                    <Header />
                    <Link to="/">Home</Link> |{" "}
                    <Link to="hub">Hub</Link> |{" "}
                    <Link to="content">Content</Link>
                    <Outlet /> {/* renders dynamic content */}
                </div>
            </div>
            <SideNavigation />
        </React.Fragment>
    );
}

export default Layout;