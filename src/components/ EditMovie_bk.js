import React, { Component, Fragment } from 'react';

export default class EditMovie extends Component {
    state = {
        movie: {},
        isLoaded: false,
        error: null
    }

    render() {
        let { movie } = this.state;

        return(
            <Fragment>
                <h2>Add/Edit Movie</h2>
                <hr />
                <form method="post">
                    <div className="mb-3">
                        <label for="title" className="form-label">Title</label>
                    </div>
                    <input 
                        type="text" 
                        className="form-control"
                        id="title"
                        name="title"
                        value={movie.title}
                    />
                </form>
            </Fragment>
        )
    }
}