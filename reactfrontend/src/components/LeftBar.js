import "./../styles/leftBar.css";

function LeftBar() {
    const current = new Date();
    const date = `${current.getDate()}/${
        current.getMonth() + 1
    }/${current.getFullYear()}`;

    return (
        <div className="leftBar">
            <div className="welcomeBox">
                <h1>Welcome To My Notice Board</h1>
                <h3>Today is {date}</h3>
            </div>
        </div>
    );
}

export default LeftBar;
