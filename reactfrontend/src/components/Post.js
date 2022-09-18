import "./../styles/post.css";

function Post() {
    return (
        <div className="card-post">
            <div className="cardHeader">
                <div className="type">Announcement</div>
                <div className="cardTitle">TECHNICAL TASK FOR TNP POST CARD SAMPLE TEXT</div>
                <div className="timeStamp">September 17, 2022 2:53 PM</div>
            </div>
            <div className="cardBody">
                <p className="description">
                    The online technical re-assessment is scheduled for enclosed
                    list of students on 18th September 2022 in the below
                    pre-assigned slot and the assessment duration for the same
                    is 90 minutes.
                </p>
            </div>
            <button className="readMore"> ReadMore</button>
        </div>
    );
}
export default Post;
