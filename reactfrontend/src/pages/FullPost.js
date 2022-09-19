import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import Post from "./../components/Post";
import "./../styles/post.css";

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
    }, []);

    console.log(post);

    return (
        <div>
            <Post posts={post} />
        </div>
    );
}

export default FullPost;
