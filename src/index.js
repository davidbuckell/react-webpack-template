import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
const container = document.getElementById('wrapper');
const root = createRoot(container);
import App from "./app";
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './authentication/authConfig';
const msalInstance = new PublicClientApplication(msalConfig);

root.render(
    <BrowserRouter>
        <MsalProvider instance={msalInstance}>
            <App />
        </MsalProvider>
    </BrowserRouter>
);