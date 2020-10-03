import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postActions';
class Postform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body,
        };
        this.props.createPost(post);
    }

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="title">Title</label> <br />
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={this.state.title}
                            onChange={this.onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="body">Body</label> <br />
                        <textarea
                            name="body"
                            id="body"
                            cols="30"
                            rows="10"
                            value={this.state.body}
                            onChange={this.onChange}
                        ></textarea>
                    </div>
                    <hr />
                    <div>
                        <input
                            type="submit"
                            name="submit"
                            id="sb"
                            value="Submit"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

Postform.propTypes = {
    createPost: PropTypes.func.isRequired,
};

export default connect(null, { createPost })(Postform);
