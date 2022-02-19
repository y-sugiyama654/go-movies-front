import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class Movies extends Component {

    state = { movies: []}

    componentDidMount() {
        this.setState({
            movies: [
                { id: 1, title: "mid90s", runtime: 142 },
                { id: 2, title: "The Usual Suspects", runtime: 120 },
                { id: 3, title: "Forest Gump", runtime: 249 },
            ]
        })
    }

    render() {
        return (
            <Fragment>
                <h2>Choose a Movie!</h2>
                <ul>
                    {this.state.movies.map((m)=>(
                        <li key={m.id}>
                            <Link to={`/movies/${m.id}`} >{m.title}</Link>
                        </li>
                    ))}
                </ul>
            </Fragment>
            
        );
    }
}