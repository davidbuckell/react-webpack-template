import React from "react";
import { Link } from 'react-router-dom';
import { AuthenticatedTemplate } from "@azure/msal-react";

function NavigationLinks() {
    return (
        <nav id="menu">
            <header className="major">
                <h2>Menu</h2>
            </header>
            <ul>                    
                <li><Link to="/">Home</Link></li>
                <li><Link to="hub">Hub</Link></li>
                <li><Link to="content">Content</Link></li>
                <AuthenticatedTemplate>
                <li>
                    <span className="opener">Secure Content</span>
                    <ul>
                        <li><Link to="secure-page">Secure Page</Link></li>
                    </ul>
                </li>
                </AuthenticatedTemplate>
                <li><a href="#">Etiam Dolore</a></li>
                <li><a href="#">Adipiscing</a></li>
                <li>
                    <span className="opener">Another Submenu</span>
                    <ul>
                        <li><a href="#">Lorem Dolor</a></li>
                        <li><a href="#">Ipsum Adipiscing</a></li>
                        <li><a href="#">Tempus Magna</a></li>
                        <li><a href="#">Feugiat Veroeros</a></li>
                    </ul>
                </li>
                <li><a href="#">Maximus Erat</a></li>
                <li><a href="#">Sapien Mauris</a></li>
                <li><a href="#">Amet Lacinia</a></li>
            </ul>
        </nav>
    );
}

export default NavigationLinks;