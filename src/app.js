import React from "react";
import Header from "./components/pagestructure/header";
import HomePage from "./pagetemplates/homepage";
import SideNavigation from "./components/pagestructure/sidenavigation";

export default function App() {
  return (
    <React.Fragment>
      <div id="main">
        <div className="inner">
          <Header />
          <HomePage />
        </div>
      </div>
      <SideNavigation />
    </React.Fragment>
  );
}