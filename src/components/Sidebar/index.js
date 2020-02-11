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
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
  }, [posts]);

  return (
    <div
      className="sidebarContainer"
      style={{
        width: props.width
      }}
    >
      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box"
        }}
      >
        <div className="cardHeader">
          <span>About Us</span>
        </div>
        <div className="profileImageContainer">
          <img src="https://media-cdn.tripadvisor.com/media/photo-s/17/3c/49/f8/persepolis-a-journey.jpg" />
        </div>
        <div className="cardBody">
          <p className="personalBio">
            this is the test side bar and we need to put other stufrf here as
            well that makes it better to work with....:)
          </p>
        </div>
      </Card>

      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box"
        }}
      >
        <div className="cardHeader">
          <span>Social Network</span>
        </div>
      </Card>

      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box"
        }}
      >
        <div className="cardHeader">
          <span>Recent Posts</span>
        </div>

        <div className="recentPosts">
          {posts.map(post => {
            return (
              <NavLink key={post.id} to={`/post/${post.slug}`}>
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
