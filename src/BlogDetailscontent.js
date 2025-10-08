import React from "react";
import "./css.css";
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from "react-icons/fa";
import Footer from "./Footer";

function BlogDetailsContent() {
  const latestPosts = [
    { img: "./assets/blogd1.webp", comments: 2, title: "Tech experiences that connect us" },
    { img: "./assets/blogd2.webp", comments: 2, title: "Tech experiences that connect us" },
    { img: "./assets/blogd3.webp", comments: 2, title: "Tech experiences that connect us" },
  ];

  const popularPosts = [
    { title: "Web Development" },
    { title: "Digital Marketing" },
    { title: "Technology" },
    { title: "Data Analysis" },
    { title: "Cyber Security" },
  ];

  const tags = ["DEVELOPMENT", "DESIGNING"];
  const relatedPosts = [
    { title: "How much a website cost to build" },
    { title: "We love design the latest trendy websites" },
  ];

  const comments = [
    {
      img: "./assets/comment-1.webp",
      name: "Kevin Martin",
      text: "It has survived not only five centuries, but also the leap into electronic typesetting simply free text unchanged. It was popularised in the sheets containing lorem ipsum is simply free text."
    },
    {
      img: "./assets/comment-2.webp",
      name: "Sarah Albert",
      text: "It has survived not only five centuries, but also the leap into electronic typesetting simply free text unchanged. It was popularised in the sheets containing lorem ipsum is simply free text."
    }
  ];

  return (
    <>
    <div className="blogDetails-section">
      <div className="blogDetails-container">
        
        {/* Left Side (Main Content) */}
        <div className="blogDetails-left">
          {/* Blog Image + Content */}
          <div className="blogDetails-imgBox">
            <span className="date-badge">18 MAR</span>
            <img src="./assets/blogdetails.webp" alt="Blog Detail" className="blogDetails-image" />
          </div>
          <div className="blogDetails-meta">
            <p>
              <img src="./assets/user-icon1.webp" className="image" alt="" /> by Admin /{" "}
              <img src="./assets/comments-icon1.webp" alt="" /> 2 Comments
            </p>
          </div>
          <h2 className="blogDetails-title-h2">Let’s Understand The Different Types Of Data Backups</h2>
          <p className="blogDetails-title-p">Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. 
            There are many variations of passages of Lorem Ipsum available, but the majority have alteration in 
            some injected or words which don't look even slightly believable. If you are going to use a passage 
            of Lorem Ipsum, you need to be sure there isn't anything embarrang hidden in the middle of text. All 
            the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this 
            the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a 
            handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
          <p className="blogDetails-title-p">Lorem Ipsum has been the industry's standard dummy text ever since the 
            1500s, when an unknown printer took a galley of type and scrambled it to make a type simen book. It has 
            survived not only five centuries, but also the leap into electronic typesetting.</p>
          <p className="blogDetails-title-p1">Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. orem Ipsum has been the industry's standard dummy text ever since the when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book. It has survived not only five 
            centuries, but also the leap into unchanged.</p>
          <hr className="hr" />

          {/* Tags + Social */}
          <div className="tags-social-section">
            <div className="tags">
              <strong>Tags</strong>
              {tags.map((tag, index) => (
                <span key={index} className="tag-item">{tag}</span>
              ))}
            </div>
            <div className="social-icons">
              <FaFacebookF />
              <FaTwitter />
              <FaPinterestP />
              <FaInstagram />
            </div>
          </div>

          {/* Related Posts */}
          <div className="related-posts">
            {relatedPosts.map((post, index) => (
              <div key={index} className="related-post-box">
                <h4>{post.title}</h4>
              </div>
            ))}
          </div>

          {/* 🔹 Comments Section */}
          <div className="comments-section">
            <h3>2 Comments</h3>
            {comments.map((c, index) => (
              <div key={index} className="comment-box">
                <img src={c.img} alt={c.name} className="comment-avatar" />
                <div className="comment-content">
                  <h4>{c.name}</h4>
                  <p>{c.text}</p>
                </div>
                <button className="reply-btn">REPLY</button>
              </div>
            ))}
          </div>

          {/* 🔹 Leave a Comment */}
          <div className="leave-comment">
            <h3>Leave a Comment</h3>
            <form>
              <div className="form-row">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
              </div>
              <textarea placeholder="Write your comment..." required></textarea>
              <button type="submit" className="submit-btn">SUBMIT COMMENT</button>
            </form>
          </div>
        </div>

        {/* Right Side (Sidebar) */}
        <div className="blogDetails-right">
          {/* Search */}
          <div className="blogDetails-section-search">
            <input type="search" className="search-class" placeholder="Search here" />
            <span className="search-icon">🔍</span>
          </div>

          {/* Latest Posts */}
          <div className="latest-posts">
            <h3 className="latest-posts-title">Latest Posts</h3>
            <div className="latest-posts-list">
              {latestPosts.map((post, index) => (
                <div key={index} className="latest-post-item">
                  <img src={post.img} alt={post.title} className="post-thumb" />
                  <div className="post-info">
                    <p className="post-comments">💬 {post.comments} Comments</p>
                    <h4 className="post-title">{post.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Posts */}
          <div className="popular-posts">
            <h3 className="popular-posts-title">Categories</h3>
            <div className="popular-posts-list">
              {popularPosts.map((post, index) => (
                <div key={index} className="popular-category">
                  <span className="category-title">{post.title}</span>
                  <span className="category-icon">→</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Tags */}
          <div className="sidebar-tags-box">
            <h3 className="sidebar-tags-heading">Tags</h3>
            <div className="sidebar-tags-grid">
              <span className="sidebar-tag-item">DEVELOPMENT</span>
              <span className="sidebar-tag-item">DESIGNING</span>
              <span className="sidebar-tag-item">BUSINESS</span>
              <span className="sidebar-tag-item">MARKETING</span>
              <span className="sidebar-tag-item">TECHNOLOGY</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default BlogDetailsContent;
