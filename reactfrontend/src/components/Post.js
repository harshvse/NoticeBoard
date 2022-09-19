import "./../styles/post.css";
import { Link } from "react-router-dom";

function Post(props) {
    console.log(props);
    return (
        <div className="card-post">
            <div className="type">{props.posts.type}</div>

            <div className="cardHeader">
                <div className="cardTitle">{props.posts.title}</div>
                <div className="timeStamp">{props.posts.updated_at}</div>
            </div>
            <div className="cardBody">
                <p className="description">{props.posts.desc}</p>
            </div>

            <Link to="/">
                <button className="readMore"> ReadMore</button>
            </Link>
        </div>
    );
}
export default Post;
