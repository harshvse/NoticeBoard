import axios from "axios";
import React from "react";
import Post from "./Post";
import InfiniteScroll from "react-infinite-scroll-component";

class Posts extends React.Component {
    state = {
        posts: [],
        loading: true,
        count: 2,
    };

    fetchPosts = async () => {
        const res = await axios.post(
            "http://localhost:8000/api/posts",
            this.state
        );
        if (res.data.status === 200) {
            this.setState({ count: this.state.count + 2 });
            this.setState({
                posts: res.data.posts,
                loading: false,
            });
            console.log(res.data.message);
        }
    };

    componentDidMount() {
        this.fetchPosts();
    }

    render() {
        if (this.state.loading) {
            return <h1>Loading....</h1>;
        }
        return (
            <div>
                <InfiniteScroll
                    dataLength={this.state.posts.length}
                    next={this.fetchPosts}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                >
                    {this.state.posts.map((posts) => (
                        <Post posts={posts} key={posts.id} />
                    ))}
                </InfiniteScroll>
            </div>
        );
    }
}

export default Posts;
