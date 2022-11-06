export const msalConfig = {
    auth: {
        clientId: "c52305fd-aafa-4533-98c0-fa1d1847695e",
        authority: "https://login.microsoftonline.com/6fb68315-3b88-40d8-bd72-41d9bf6b7895",
        redirectUri: "http://localhost:8080/",
        postLogoutRedirectUri: "https://localhost:8080/"
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
    scopes: ["User.Read"]
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};