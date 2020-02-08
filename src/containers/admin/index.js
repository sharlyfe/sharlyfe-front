import React from "react";
import BlogList from "../../components/Blog";
import CreateBlog from "../../components/create-blog.component";
import CreateUser from "../../components/create-user.component";
import EditBlog from "../../components/edit-blog.component";
import Navbar from "../../components/navbar.component";

/**
 * @author
 * @function Admin
 **/

const Admin = props => {
  return (
    <div>
      <Navbar />
      <br />
      <BlogList />
      <CreateBlog />
      <CreateUser />
    </div>
  );
};

export default Admin;
