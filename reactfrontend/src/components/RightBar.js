import "./../styles/rightBar.css";
import { FaLinkedin, FaTwitterSquare } from "react-icons/fa";

function RightBar() {
    return (
        <div className="rightBar">
            <div className="socialMedia">
                <h1>Find me on:</h1>
                <div className="socialLinks">
                    <div>
                        <a href="https://linkedin.com/in/harshvse">
                            <FaLinkedin className="socialIcon" />
                            Linkedin
                        </a>
                    </div>
                    <div>
                        <a href="https://twitter.com/harshvse">
                            <FaTwitterSquare className="socialIcon" />
                            Twitter
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightBar;
