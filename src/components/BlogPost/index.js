import React, { useState, useEffect } from "react";
import "./style.css";
import Card from "../UI/Card";
import blogPost from "../../data/blog.json";
/**
 * @author
 * @function BlogPost
 **/

const BlogPost = props => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const postid = props.match.params.postid;
    const post = blogPost.data.find(post => post.id == postid);
    setPost(post);
  });
  return (
    <div className="blogPostContainer">
      <Card>
        <div className="blogHeader">
          <span className="blogCategory">Featured</span>
          <h1 className="postTitle">testtestreplace with props</h1>
          <span className="postedBy">
            posted on feb 8, 2020 by behnam heirani
          </span>
        </div>
        <div className="postimageContainer">
          <img
            src={require("../../blogPostImages/memories-from.jpg")}
            alt="Post Image"
          />
        </div>

        <div className="postContent">
          <h3>Post Title</h3>
          <p>this is test !</p>
        </div>
      </Card>
    </div>
  );
};

export default BlogPost;
