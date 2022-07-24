import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
const container = document.getElementById('wrapper');
const root = createRoot(container);
import App from "./app";

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);