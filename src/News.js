import React from "react";
import { FaRegUser, FaRegCommentDots } from "react-icons/fa";
import "./App.css";

function News() {
  const newsItems = [
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
  ];

  return (
    <div className="news-section">
      <div className="section-title">
        <span>— What’s Happening</span>
        <h2>News & Articles</h2>
      </div>

      <div className="news-container">
        {newsItems.map((news) => (
          <div className="news-card" key={news.id}>
            {/* Image */}
            <div className="news-img">
              <img src={news.img} alt={news.title} />
            </div>

            {/* Overlapping Content */}
            <div className="news-content">
                <div className="news-meta">
                <span>
                    <FaRegUser className="news-icon" /> by {news.author}
                </span>
                <span>/</span>
                <span>
                    <FaRegCommentDots className="news-icon" /> {news.comments} Comments
                </span>
                </div> 
              <h3 className="news-title">{news.title}</h3>
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

export default News;
