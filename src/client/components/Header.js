import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCurrentUser } from "../actions";

const Header = ({ auth, fetchCurrentUser }) => {
    useEffect(() => {
        fetchCurrentUser();
    }, []);

    return (
        <div className="nav-wrapper">
            <Link className="brand-logo" to="/">
                React SSR
            </Link>
            <ul className="flex gap-10">
                <li>
                    <Link to="/users">Users</Link>
                </li>
                <li>
                    <Link to="/admins">Admins</Link>
                </li>
                <li>
                    {!auth && auth !== null ? (
                        <a href="/api/auth/google">login</a>
                    ) : (
                        <a href="/api/logout">Logout</a>
                    )}
                </li>
            </ul>
        </div>
    );
};

const mapStateToProps = ({ auth }) => {
    return { auth };
};

export default connect(mapStateToProps, { fetchCurrentUser })(Header);
