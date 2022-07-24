import React from "react";
import { Route, Routes } from 'react-router-dom';
import HomePage from "./pagetemplates/homepage";
import HubPage from "./pagetemplates/hubpage";
import ContentPage from "./pagetemplates/contentpage";
import Layout from "./components/pagestructure/layout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="hub" element={<HubPage />} />
        <Route path="content" element={<ContentPage />} />
        <Route path="*" element={<div>Oops! nothing here</div>} />
      </Route>
    </Routes>
  );
}