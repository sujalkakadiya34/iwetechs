import React from 'react';
import OurProjects from "./OurProjects";
import OurProjectscontent from "./OurProjectscontent";

function BlogDetails() {
  return (
    <>
        <div className="ourteam-frame">
        <div className="ourteam-layer">
          <h1 className="ourteam-title">Our Projects</h1>
          <p className="ourteam-breadcrumbs">
            HOME <span>/</span>BLOG
          </p>
        </div>
      </div>
      <OurProjectscontent />
    </>
  )
}

export default BlogDetails