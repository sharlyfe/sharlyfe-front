import React from "react";
import "./style.css";
import Card from "../UI/Card";
/**
 * @author
 * @function BlogPost
 **/

const BlogPost = props => {
  return (
    <div className="blogPostContainer">
      <Card>
        <div className="blogHeader">
          <span className="blogCategory">Featured</span>
          <h1 className="postTitle">Beautiful is always beautiful</h1>
          <span className="postedBy">
            {" "}
            posted on feb 8, 2020 by behnam heirani
          </span>
        </div>
        <div className="postimageContainer">
          <img
            src={require("../../blogPostImages/memories-from.jpg")}
            alt="Post Image"
          ></img>
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
