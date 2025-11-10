import React from 'react'
import BlogContent from "./BlogContent";
import Footer from "./Footer";


function Blog() {
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
      <BlogContent />
      <Footer />
      </>
  )
}

export default Blog