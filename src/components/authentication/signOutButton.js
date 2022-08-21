import React, { useEffect } from "react";
import { useMsal } from "@azure/msal-react";

function handleRedirectLogout(instance) {
    instance.logoutRedirect().catch(e => {
        console.error(e);
    });    
}

function handlePopupLogout(instance) {
    instance.logoutPopup().catch(e => {
        console.error(e);
    });
}

export const SignOutButton = () => {
    const { instance } = useMsal();

    useEffect(() => {
        window.executeMainJs();
    }, []);

    return (
        <ul className="actions stacked">
            <li><a onClick={(e) => handleRedirectLogout(instance)} className="button small icon solid fa-user">Sign Out via Redirect</a></li>
            <li><a onClick={(e) => handlePopupLogout(instance)} className="button small icon solid fa-user">Sign Out via Popup</a></li>
        </ul>
    );
}