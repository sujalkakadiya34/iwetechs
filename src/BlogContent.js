import React from "react";
import { FaRegUser, FaRegCommentDots } from "react-icons/fa";
import "./App.css";

function BlogContent() {
  const blogItems = [
    {
      id: 1,
      author: "Admin",
      comments: 2,
      title: "Let’s understand the different types of data backups",
      img: "https://picsum.photos/400/250?random=1",
    },
    {
      id: 2,
      author: "Admin",
      comments: 2,
      title: "Mauris are diam cursus, maximus ante at, blandit risus.",
      img: "https://picsum.photos/400/250?random=2",
    },
    {
      id: 3,
      author: "Admin",
      comments: 2,
      title: "Contrary to popular belief, Lorem Ipsum from 45 BC.",
      img: "https://picsum.photos/400/250?random=3",
    },
        {
      id: 4,
      author: "Admin",
      comments: 2,
      title: "Let’s understand the different types of data backups",
      img: "https://picsum.photos/400/250?random=1",
    },
    {
      id: 5,
      author: "Admin",
      comments: 2,
      title: "Mauris are diam cursus, maximus ante at, blandit risus.",
      img: "https://picsum.photos/400/250?random=2",
    },
    {
      id: 6,
      author: "Admin",
      comments: 2,
      title: "Contrary to popular belief, Lorem Ipsum from 45 BC.",
      img: "https://picsum.photos/400/250?random=3",
    },
  ];

  return (
    <div className="news-section">
      <div className="section-title">
        <span>— Latest Updates</span>
        <h2>Our Blog & Articles</h2>
      </div>

      <div className="news-container">
        {blogItems.map((blog) => (
          <div className="news-card" key={blog.id}>
            {/* Image */}
            <div className="news-img">
              <img src={blog.img} alt={blog.title} />
            </div>

            {/* Overlapping Content */}
            <div className="news-content">
              <div className="news-meta">
                <span>
                  <FaRegUser className="news-icon" /> by {blog.author}
                </span>
                <span>/</span>
                <span>
                  <FaRegCommentDots className="news-icon" /> {blog.comments} Comments
                </span>
              </div>
              <h3 className="news-title">{blog.title}</h3>
              <a href="#" className="read-more">
                READ MORE
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogContent;
