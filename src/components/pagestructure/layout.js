import React from "react";
import { Link, Outlet, useLocation } from 'react-router-dom';
import Header from "./header";
import SideNavigation from "./sidenavigation";
import { motion } from "framer-motion";

const PageLayout = ({ children }) => children;

const pageVariants = {
    initial: {
        opacity: 0
    },
    in: {
        opacity: 1
    },
    out: {
        opacity: 0
    }
};

const pageTransition = {
    type: "tween",
    ease: "linear",
    duration: 0.5
};

function Layout() {
    const { pathname } = useLocation();

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
                            key={pathname}
                            initial="initial"
                            animate="in"
                            variants={pageVariants}
                            transition={pageTransition}
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