import React, { useState, useEffect } from "react";
import "./style.css";
import Card from "../UI/Card";
import blogPost from "../../data/blog.json";
import { NavLink } from "react-router-dom";
/**
 * @author
 * @function Sidebar
 **/

const Sidebar = props => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    const posts = blogPost.data;
    setPost(posts);
  }, posts);
  return (
    <div className="sidebarContainer">
      <Card style={{ marginBottom: "20px", boxSizing: "border-box" }}>
        <div className="CardHeader">
          <span>About-Us</span>
        </div>
        <div className="profileimageContainer">
          <img src="https://media-cdn.tripadvisor.com/media/photo-s/17/3c/49/f8/persepolis-a-journey.jpg" />
        </div>
        <div className="cardBody">
          <p className="personalBio">
            This is test for sharlyfe website. we should add more text here.
            this is going to be aweesome!!!It's better to put some personal bio
            here
          </p>
        </div>
      </Card>
      <Card style={{ marginBottom: "20px", boxSizing: "border-box" }}>
        <div className="CardHeader">
          <span>Social Network</span>
        </div>
      </Card>
      <Card style={{ marginBottom: "20px", boxSizing: "border-box" }}>
        <div className="CardHeader">
          <span>Recent Post</span>
        </div>
        <div className="recentPosts">
          {posts.map(post => {
            return (
              <NavLink to={`/post/${post.id}`}>
                <div className="recentPost">
                  <h3>{post.blogTitle}</h3>
                  <span>{post.postedOn}</span>
                </div>
              </NavLink>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
