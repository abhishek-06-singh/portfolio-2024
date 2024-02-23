import React from "react";
import ProfilePage from "./ProfilePage";
import React19 from "./blogList/Blog1/React19";

const BlogsAll = () => {
  return (
    <div className="">
      <div className="">
        <ProfilePage />
      </div>
      <div className="p-5 lg:p-20">
        <React19 />
      </div>
    </div>
  );
};

export default BlogsAll;
