import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class NavBar extends Component {
    render() {

        let { title } = this.props;
        return (

            <div>
                <nav className="navbar navbar-expand-lg navBar">
                    <div className="container-fluid">
                        <Link className="navbar-brand navbarTitle" to="/">&#127752;{title}</Link>
                        <button className="navbar-toggler navbar-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon navbar-light"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-light">
                                <li className="nav-item">
                                    <Link className="nav-link active navBarItem" aria-current="page" to="/">Home</Link>
                                </li>
           
                                <li className="nav-item dropdown navbar-light">
                                    <Link className="nav-link dropdown-toggle navBarItem" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Category
                                    </Link>
                                    <ul className="dropdown-menu navbar-light" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item navbar-light" to="/business">Business</Link></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><Link className="dropdown-item navbar-light" to="/entertainment">Entertainment</Link></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><Link className="dropdown-item navbar-light" to="/sports">Sports</Link></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><Link className="dropdown-item navbar-light" to="/health">Health</Link></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><Link className="dropdown-item navbar-light" to="/technology">Technology</Link></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><Link className="dropdown-item navbar-light" to="/health">Health</Link></li>
                    
                                    </ul>

                                </li>
                            </ul>
                        
        
                        </div>
                    </div>
                </nav>
            </div>

        )
    }
}
