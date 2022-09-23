import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import Moment from "react-moment";

import "./../styles/post.css";
import "./../styles/fullpost.css";

function FullPost() {
    const { id } = useParams();
    const [post, setPost] = useState({
        id: "",
        title: "",
        type: "",
        desc: "",
        updated_at: "",
    });

    async function fetchPost() {
        const res = await axios.get(`http://localhost:8000/api/posts/${id}`);
        if (res.data.status === 200) {
            console.log(res.data.post.title);
            setPost({
                id: res.data.post.id,
                title: res.data.post.title,
                type: res.data.post.type,
                desc: res.data.post.desc,
                updated_at: res.data.post.updated_at,
            });
        }
    }

    useEffect(() => {
        fetchPost();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const navigate = useNavigate();

    function editPost() {
        navigate(`/posts/edit/${id}`);
    }
    async function deletePost() {
        const res = await axios.get(
            `http://localhost:8000/api/posts/delete/${id}`
        );
        if (res.data.status === 200) {
            alert("Post Deleted");
            navigate("/home");
        }
    }

    return (
        <div className="posts">
            <div className="card-post">
                <div className="type">{post.type}</div>

                <div className="cardHeader">
                    <div className="cardTitle">{post.title}</div>
                    <div className="timeStamp">
                        <Moment format="dddd, MMMM Do YYYY, h:mm:ss a">
                            {post.updated_at}
                        </Moment>
                    </div>
                </div>
                <div className="cardBody">
                    <p className="description">{post.desc}</p>
                </div>

                <div className="postOperations">
                    <button className="postButtons" onClick={editPost}>
                        Edit Post
                    </button>
                    <button className="postButtons" onClick={deletePost}>
                        Delete Post
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FullPost;
