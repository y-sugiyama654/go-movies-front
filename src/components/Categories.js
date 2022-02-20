import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Categories extends Component {

    
    render() {
        return (
            <div>
                <h2>Categories</h2>
                <ul>
                    <li><Link to="/categories/comedy">Comedy</Link></li>
                    <li><Link to="/categories/drama">Drama</Link></li>
                </ul>
            </div>
            
        );
    }
}