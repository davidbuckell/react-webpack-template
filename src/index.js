import React from "react";
import { createRoot } from 'react-dom/client';
const container = document.getElementById('wrapper');
const root = createRoot(container);
import App from "./app";

root.render(<App />)