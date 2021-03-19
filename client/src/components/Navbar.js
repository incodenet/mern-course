import React, {useContext} from 'react';
import {Link, NavLink, useHistory} from 'react-router-dom';
import {AuthContext} from "../context/auth.context";

export const Navbar = () => {
    const history = useHistory();
    const isAuth = useContext(AuthContext);

    const logoutHandler = (event) => {
        event.preventDefault();

        isAuth.logout();

        history.push("/");
    };

    return(
        <nav>
            <div className="nav-wrapper blue darken-1" style={{paddingLeft: 15}}>
                <Link to="/" className="brand-logo">Increase Links</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <NavLink to="/">
                            Create
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/links">
                            Links
                        </NavLink>
                    </li>
                    <li>
                        <a href="" onClick={logoutHandler}>
                            Log out
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};