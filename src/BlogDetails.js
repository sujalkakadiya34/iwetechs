import React from 'react'
import BlogDetailsContent from "./BlogDetailscontent";


function BlogDetails() {
  return (
    <>
        <div className="ourteam-frame">
        <div className="ourteam-layer">
          <h1 className="ourteam-title">BLOG</h1>
          <p className="ourteam-breadcrumbs">
            HOME <span>/</span>BLOG
          </p>
        </div>
      </div>
      <BlogDetailsContent />
    </>
  )
}

export default BlogDetails

