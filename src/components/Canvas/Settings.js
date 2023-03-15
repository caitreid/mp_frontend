import React from 'react';
import { Link } from 'react-router-dom'

const Settings = () => {

    const linkStyle = {
        color: 'black',
        
    }

    return(
        <div className="container-fluid m-4">
            <h1>Settings</h1>
            <ul>
                <li>
                    <Link to='/change-password' style={linkStyle}>
                        Change Password
                    </Link>
                </li>
                <li>
                    <Link to='/sign-out' style={linkStyle}>
                        Sign Out
                    </Link>
                </li>
                {/* <li>
                    <Link to="/mangos" style={linkStyle}>
                        Mangos
                    </Link>
                </li> */}
            </ul>            
        </div>
        
    )
}

export default Settings;