import React from "react";
import "./style.css";
import Card from "../UI/Card";
/**
 * @author
 * @function Sidebar
 **/

const Sidebar = props => {
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
          <div className="recentPost">
            <h3>Post Title</h3>
            <span>Feb 8,2020</span>
          </div>
        </div>

        <div className="recentPosts">
          <div className="recentPost">
            <h3>Post Title</h3>
            <span>Feb 8,2020</span>
          </div>

          <div className="recentPost">
            <h3>Post Title</h3>
            <span>Feb 8,2020</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
