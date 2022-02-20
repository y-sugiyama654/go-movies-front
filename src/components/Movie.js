import React, { Component, Fragment } from 'react';

export default class Movie extends Component {

    state = { movie: []}

    componentDidMount() {
        this.setState({movie: { 
            id: this.id, 
            title: "mid90s", 
            runtime: 142 
        }})
    }

    render() {
        return (
            <Fragment>
                <h2>Movie: {this.state.movie.title} {this.state.movie.id}</h2>
                <table className='table table-compact table-striped'>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td><strong>Title:</strong></td>
                            <td>{this.state.movie.title}</td>
                        </tr>
                        <tr>
                            <td><strong>Run Time:</strong></td>
                            <td>{this.state.movie.runtime}minutes</td>
                        </tr>
                    </tbody>
                </table>
            </Fragment>
            
        );
    }
}