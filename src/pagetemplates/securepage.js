import React from "react";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import ProfileContent from "../components/authentication/profileContent";

const SecurePage = () => {
    return (
        <React.Fragment>
            <AuthenticatedTemplate>
                <ProfileContent/>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <h3>I'm afraid you need to be authenticated to view this page</h3>
            </UnauthenticatedTemplate>
        </React.Fragment>        
    );
}

export default SecurePage;