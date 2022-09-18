import "./../styles/post.css";

function Post() {
    return (
        <div className="card-post">
            <div className="cardHeader">
                <div className="type">Announcement</div>
                <p className="cardTitle">Title</p>
                <div className="time-stamp">September 17, 2022 2:53 PM</div>
            </div>
            <div className="cardBody">
                <p className="description">
                    The online technical re-assessment is scheduled for enclosed
                    list of students on 18th September 2022 in the below
                    pre-assigned slot and the assessment duration for the same
                    is 90 minutes.
                </p>
                <button> ReadMore</button>
            </div>
        </div>
    );
}
export default Post;
