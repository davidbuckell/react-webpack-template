import React from "react";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";

const SecurePage = () => {
    return (
        <React.Fragment>
            <AuthenticatedTemplate>
                <h3>I am a secure page</h3>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <h3>I'm afraid you need to be authenticated to view this page</h3>
            </UnauthenticatedTemplate>
        </React.Fragment>        
    );
}

export default SecurePage;