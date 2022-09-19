import React from "react";
import Posts from "./../components/Posts";
import "./../styles/home.css";
class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="posts">
                    <Posts />
                </div>
            </div>
        );
    }
}

export default Home;
