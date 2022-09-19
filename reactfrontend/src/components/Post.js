import Moment from "react-moment";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

import "./../styles/post.css";
import { Link } from "react-router-dom";

function Post(props) {
    const { id } = useParams();
    let desc = props.posts.desc;
    if (!id && desc.length > 200) {
        desc = desc.substring(0, 200);
        desc += "...";
    }
    const navigate = useNavigate();

    function readMore() {
        navigate(`/posts/${props.posts.id}`);
    }

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
