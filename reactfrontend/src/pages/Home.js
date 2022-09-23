import React from "react";
import Posts from "./../components/Posts";
import LeftBar from "./../components/LeftBar";
import RightBar from "./../components/RightBar";

import "./../styles/home.css";
class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <LeftBar />
                <div className="posts">
                    <Posts />
                </div>
                <RightBar />
            </div>
        );
    }
}

export default Home;
