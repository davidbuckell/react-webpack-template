import React, { useState } from "react";
import { useMsal } from "@azure/msal-react";
import { ProfileData } from "../authentication/profileData";
import { loginRequest, graphConfig } from "../../authentication/authConfig";

function ProfileContent() {
    const { instance, accounts } = useMsal();
    const [graphData, setGraphData] = useState(null);
    const [accessToken, setAccessToken] = useState(null);

    const name = accounts[0] && accounts[0].name;

    function RequestAccessToken() {
        const request = {
            ...loginRequest,
            account: accounts[0]
        };

        // Silently acquires an access token which is then attached to a request for Microsoft Graph data
        instance.acquireTokenSilent(request).then((response) => {
            setAccessToken(response.accessToken);
        }).catch((e) => {
            instance.acquireTokenPopup(request).then((response) => {
                setAccessToken(response.accessToken);
            });
        });
    }

    // 
    async function callMsGraph(accessToken) {
        const headers = new Headers();
        const bearer = `Bearer ${accessToken}`;

        headers.append("Authorization", bearer);

        const options = {
            method: "GET",
            headers: headers
        };

        return fetch(graphConfig.graphMeEndpoint, options)
            .then(response => response.json())
            .catch(error => console.log(error));
    }

    function RequestProfileData() {
        const request = {
            ...loginRequest,
            account: accounts[0]
        };

        // Silently acquires an access token which is then attached to a request for Microsoft Graph data
        instance.acquireTokenSilent(request).then((response) => {            
            callMsGraph(response.accessToken).then(response => setGraphData(response));
        }).catch((e) => {
            instance.acquireTokenPopup(request).then((response) => {
                callMsGraph(response.accessToken).then(response => setGraphData(response));
            });
        });
    }

    return (
        <>
            <h5 className="card-title">Welcome {name}</h5>
            {accessToken ? 
                <p>Access Token Acquired!</p>
                :
                <>                
                <ul className="actions">
                    <li><a onClick={RequestAccessToken} className="button small icon solid fa-user">Request Access Token</a></li>                    
                </ul>
                </>
            }
            {graphData ? 
                <ProfileData graphData={graphData} />
                :                
                <ul className="actions">
                    <li><a onClick={RequestProfileData} className="button small icon solid fa-user">Request Profile Information</a></li>                    
                </ul>
            }
        </>
    );
};

export default ProfileContent;