import React from "react";
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from "./pagetemplates/homepage";
import HubPage from "./pagetemplates/hubpage";
import ContentPage from "./pagetemplates/contentpage";
import Layout from "./components/pagestructure/layout";
import { AnimatePresence } from "framer-motion";
import SecurePage from "./pagetemplates/securepage";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="hub" element={<HubPage />} />
          <Route path="content" element={<ContentPage />} />
          <Route path="secure-page" element={<SecurePage />} />          
          <Route path="*" element={<div>Oops! nothing here</div>} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default App;