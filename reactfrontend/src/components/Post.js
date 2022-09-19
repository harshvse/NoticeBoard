import Moment from "react-moment";
import { useNavigate } from "react-router-dom";

import "./../styles/post.css";
import { Link, Navigate } from "react-router-dom";

function Post(props) {
    console.log(props);
    let desc = props.posts.desc;
    if (desc.length > 200) {
        desc = desc.substring(0, 200);
        desc += "...";
    }
    const navigate = useNavigate();

    function readMore() {
        navigate(`/posts/${props.posts.id}`);
    }

    console.log(typeof desc);
    return (
        <div className="card-post">
            <div className="type">{props.posts.type}</div>

            <div className="cardHeader">
                <div className="cardTitle">{props.posts.title}</div>
                <div className="timeStamp">
                    <Moment format="dddd, MMMM Do YYYY, h:mm:ss a">
                        {props.posts.updated_at}
                    </Moment>
                </div>
            </div>
            <div className="cardBody">
                <p className="description">{desc}</p>
            </div>

            <button className="readMore" onClick={readMore}>
                ReadMore
            </button>
        </div>
    );
}
export default Post;
