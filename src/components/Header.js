import React, { Component } from 'react';
import './Header.scss';


class Header extends Component {

    render() {
        return(
            <div className="jumbotron-fluid container-fluid text-center header">
                <h1 className="headerText">This is iTunes's 100 Best Albums</h1>
            </div>
        )
    }
}
export default Header;