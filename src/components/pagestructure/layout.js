import React from "react";
import { Link, Outlet } from 'react-router-dom';
import Header from "./header";
import SideNavigation from "./sidenavigation";
import { motion } from "framer-motion";

const PageLayout = ({ children }) => children;

function Layout() {

    return (
        <React.Fragment>
            <div id="main">
                <div className="inner">
                    <Header />
                    <Link to="/">Home</Link> |{" "}
                    <Link to="hub">Hub</Link> |{" "}
                    <Link to="content">Content</Link>
                    <PageLayout>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <Outlet />
                        </motion.div>
                    </PageLayout>
                </div>
            </div>
            <SideNavigation />
        </React.Fragment >
    );
}

export default Layout;