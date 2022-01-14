import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class Header extends Component{

    
    
    
    
    render() {
        return(
            <div>
                <ul>
                    <li>
                        <Link to="/add">Add Film</Link>
                    </li>
                    <li>
                        <Link to="/modify">Modify Film</Link>
                    </li>
                    <li>
                        <Link to="/delete">Delete Film</Link>
                    </li>
                </ul>
            </div>
        );
    }

}