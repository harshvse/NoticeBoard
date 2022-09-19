import React from "react";
import { useParams } from "react-router";

function FullPost() {
    const { id } = useParams();
    console.log(id);
    return (
        <div>
            <h1>Current Post: {id}</h1>
        </div>
    );
}

export default FullPost;
