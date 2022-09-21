import PostEditor from "./../components/PostEditor";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "./../styles/editor.css";

function EditPost() {
    const { id } = useParams();

    return (
        <div className="editorArea">
            <PostEditor id={id} />
        </div>
    );
}

export default EditPost;
