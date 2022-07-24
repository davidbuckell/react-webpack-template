import React, { Component } from "react";
import { Route, Routes } from 'react-router-dom';
import HomePage from "./pagetemplates/homepage";
import HubPage from "./pagetemplates/hubpage";
import ContentPage from "./pagetemplates/contentpage";
import Layout from "./components/pagestructure/layout";

function App() {
  const routes = [
    { path: '/', Component: HomePage },
    { path: '/hub', Component: HubPage },
    { path: 'content', Component: ContentPage },
  ]

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="hub" element={<HubPage />} />
        <Route path="content" element={<ContentPage />} />
        <Route path="*" element={<div>Oops! nothing here</div>} />
      </Route>
    </Routes>
  )
}


{/*}
<Routes>
<Route path="/" element={<Layout />}>
  <Route index element={<HomePage />} />
  <Route path="hub" element={<HubPage />} />
  <Route path="content" element={<ContentPage />} />
  <Route path="*" element={<div>Oops! nothing here</div>} />
</Route>
</Routes>
*/}

export default App;