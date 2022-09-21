import React from "react";
import axios from "axios";

import "./../styles/postEditor.css";

class PostEditor extends React.Component {
    state = {
        title: "",
        type: "Announcement",
        desc: "",
    };

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    savePost = async (e) => {
        e.preventDefault();
        if (!this.props.id) {
            const res = await axios.post(
                "http://localhost:8000/api/addPost/",
                this.state
            );

            if (res.data.status === 200) {
                this.setState({
                    title: "",
                    type: "Announcement",
                    desc: "",
                });
            }
        } else {
            const res = await axios.post(
                `http://localhost:8000/api/posts/edit/${this.props.id}`,
                this.state
            );
            if (res.data.status === 200) {
                alert("Post Updated!");
            }
        }
    };
    fetchPost = async () => {
        const res = await axios.get(
            `http://localhost:8000/api/posts/${this.props.id}`
        );
        if (res.data.status === 200) {
            console.log(res.data.post.title);
            this.setState({
                title: res.data.post.title,
                type: res.data.post.type,
                desc: res.data.post.desc,
            });
        }
    };
    componentDidMount() {
        this.fetchPost();
    }
    render() {
        return (
            <div className="postEditor">
                <div className="editorTitle"> Create/Update Post</div>
                <form onSubmit={this.savePost}>
                    <div className="postForm">
                        <label className="top">Title:</label>
                        <input
                            type="text"
                            name="title"
                            className="titleInput"
                            value={this.state.title}
                            onChange={this.handleInput}
                            placeholder="Enter the Title"
                            required
                        />
                    </div>
                    <div className="postForm">
                        <label>Type:</label>
                        <select
                            name="type"
                            className="typeInput"
                            value={this.state.type}
                            onChange={this.handleInput}
                            required
                        >
                            <option value="Announcement">Announcement</option>
                            <option value="News">News</option>
                            <option value="Notice">Notice</option>
                        </select>
                    </div>
                    <div className="postForm">
                        <label>Description:</label>
                        <textarea
                            type="text"
                            name="desc"
                            className="descInput"
                            value={this.state.desc}
                            onChange={this.handleInput}
                            placeholder="Write Something"
                            required
                        />
                    </div>

                    <button type="submit" className="primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default PostEditor;
