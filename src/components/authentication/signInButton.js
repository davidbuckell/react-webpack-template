import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../authentication/authConfig";

function handleRedirectLogin(instance) {
    instance.loginRedirect(loginRequest).catch(e => {
        console.error(e);
    });
}

function handlePopupLogin(instance) {
    instance.loginPopup(loginRequest).catch(e => {
        console.error(e);
    });
}

export const SignInButton = () => {
    const { instance } = useMsal();

    return (
        <ul className="actions stacked">
            <li><a onClick={(e) => handleRedirectLogin(instance)} className="button small icon solid fa-user">Sign In via Redirect</a></li>
            <li><a onClick={(e) => handlePopupLogin(instance)} className="button small icon solid fa-user">Sign In via Popup</a></li>
        </ul>
    );
}