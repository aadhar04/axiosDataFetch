import { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      error: ""
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        this.setState({ posts: res.data });
        console.log(res);
      })
      .catch((error) => {
        this.setState({ error: "URL Error" });
        console.log(error);
      });
  }

  render() {
    const { posts, error } = this.state;
    return (
      <div>
        List of posts
        {posts.length
          ? posts.map((posts) => <div key={posts.id}>{posts.title}</div>)
          : null}
        {error ? <div>{error}</div> : null}
      </div>
    );
  }
}

export default PostList;
