import React from "react";
import "./../styles/postEditor.css";

class PostEditor extends React.Component {
    state = {
        title: "",
        type: "",
        description: "",
    };

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    render() {
        return (
            <div className="postEditor">
                <div className="editorTitle"> Create/Update Post</div>
                <form>
                    <div className="postForm">
                        <label className="top">Title:</label>
                        <input
                            type="text"
                            name="title"
                            className="titleInput"
                            value={this.state.name}
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
                            name="description"
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
