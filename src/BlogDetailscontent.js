import React, { useState, useEffect, useRef } from "react";
import "./css.css";
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from "react-icons/fa";
import Footer from "./Footer";

<<<<<<< HEAD
const API_URL = "/api/comments"; // our serverless API
=======
 const API_URL = "https://jsonplaceholder.typicode.com/comments";
>>>>>>> a6aa3e81804d8130cead094b85cc21b83b3e1f50

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

  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const [alertMsg, setAlertMsg] = useState("");
  const [alertType, setAlertType] = useState("");
  const [showAlert, setShowAlert] = useState(false);

<<<<<<< HEAD
  const newCommentRef = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        if (res.ok && data?.ok) {
          setComments(
            (data.items || []).map((c) => ({
              name: c.name,
              body: c.body,
              img: c.avatar || "./assets/comment-1.webp",
              date: c.createdAt,
            }))
          );
        } else {
          showCustomAlert("⚠️ Unable to load comments.", "error");
        }
      } catch (err) {
        console.error("Error loading comments:", err);
        showCustomAlert("⚠️ Unable to load comments.", "error");
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToNewComment = () => {
    if (newCommentRef.current) {
      const y = newCommentRef.current.getBoundingClientRect().top + window.scrollY - 250;
      window.scrollTo({ top: y, behavior: "smooth" });
=======
   const newCommentRef = useRef(null);

   useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const reversed = data.reverse();
        setComments(reversed.slice(0, 2));
      })
      .catch(err => console.error("Error loading comments:", err));
  }, []);

   const scrollToNewComment = () => {
    if (newCommentRef.current) {
const y = newCommentRef.current.getBoundingClientRect().top + window.scrollY - 250;
      window.scrollTo({
        top: y,
        behavior: "smooth"
      });
>>>>>>> a6aa3e81804d8130cead094b85cc21b83b3e1f50
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !text.trim()) {
      showCustomAlert("⚠️ Please fill all fields.", "error");
      return;
    }

<<<<<<< HEAD
    const payload = { name, email, body: text };
=======
    const newComment = {
      name,
      email,
      body: text,
      img: "./assets/comment-1.webp",
      date: new Date().toISOString(),
    };
>>>>>>> a6aa3e81804d8130cead094b85cc21b83b3e1f50

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
<<<<<<< HEAD
        body: JSON.stringify(payload),
      });

      let data = {};
      try { data = await response.json(); } catch {}

      if (!response.ok || !data?.ok) {
        throw new Error(data?.error || "Failed to submit");
      }

      const newItem = {
        name: data.item.name,
        body: data.item.body,
        img: data.item.avatar || "./assets/comment-1.webp",
        date: data.item.createdAt,
      };

      setComments((prev) => [newItem, ...prev]);
      setName("");
      setEmail("");
      setText("");
      showCustomAlert("✅ Submitted successfully!", "success");
      setTimeout(scrollToNewComment, 300);
=======
        body: JSON.stringify(newComment),
      });

      if (!response.ok) throw new Error("Failed to submit comment");

       setComments(prev => [newComment, ...prev].slice(0, 2));

      setName("");
      setEmail("");
      setText("");

      showCustomAlert("submitted successfully!", "success");

       setTimeout(scrollToNewComment, 300);
>>>>>>> a6aa3e81804d8130cead094b85cc21b83b3e1f50
    } catch (error) {
      console.error("Error adding comment:", error);
      showCustomAlert("❌ Something went wrong. Please try again.", "error");
    }
  };

  const showCustomAlert = (message, type) => {
    setAlertMsg(message);
    setAlertType(type);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <>
      <div className="blogDetails-section">
        <div className="blogDetails-container">
<<<<<<< HEAD
          <div className="blogDetails-left">
=======
           <div className="blogDetails-left">
>>>>>>> a6aa3e81804d8130cead094b85cc21b83b3e1f50
            <div className="blogDetails-imgBox">
              <span className="date-badge">18 MAR</span>
              <img src="./assets/blogdetails.webp" alt="Blog Detail" className="blogDetails-image" />
            </div>

            <div className="blogDetails-meta">
              <p>
                <img src="./assets/user-icon1.webp" className="image" alt="" /> by Admin /{" "}
                <img src="./assets/comments-icon1.webp" alt="" /> {comments.length} Comments
              </p>
            </div>

            <h2 className="blogDetails-title-h2">
              Let’s Understand The Different Types Of Data Backups
            </h2>
            <p className="blogDetails-title-p">
              Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum...
            </p>

            <hr className="hr" />

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

<<<<<<< HEAD
            <div className="related-posts">
=======
             <div className="related-posts">
>>>>>>> a6aa3e81804d8130cead094b85cc21b83b3e1f50
              {relatedPosts.map((post, index) => (
                <div key={index} className="related-post-box">
                  <h4>{post.title}</h4>
                </div>
              ))}
            </div>

<<<<<<< HEAD
            <div className="comments-section">
=======
             <div className="comments-section">
>>>>>>> a6aa3e81804d8130cead094b85cc21b83b3e1f50
              <h3>{comments.length} Comments</h3>
              {comments.map((c, index) => (
                <div
                  key={index}
                  className="comment-box fade-in"
<<<<<<< HEAD
                  ref={index === 0 ? newCommentRef : null}
=======
                  ref={index === 0 ? newCommentRef : null} 
>>>>>>> a6aa3e81804d8130cead094b85cc21b83b3e1f50
                >
                  <img src={c.img} alt={c.name} className="comment-avatar" />
                  <div className="comment-content">
                    <h4>{c.name}</h4>
<<<<<<< HEAD
                    <p>{c.body}</p>
=======
                    <p>{c.body || c.text}</p>
>>>>>>> a6aa3e81804d8130cead094b85cc21b83b3e1f50
                  </div>
                  <button className="reply-btn">REPLY</button>
                </div>
              ))}
            </div>

<<<<<<< HEAD
            <div className="leave-comment">
=======
             <div className="leave-comment">
>>>>>>> a6aa3e81804d8130cead094b85cc21b83b3e1f50
              <h3>Leave a Comment</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <textarea
<<<<<<< HEAD
                    placeholder="Write your comment..."
                    className="form-row-input"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
=======
                  placeholder="Write your comment..."
                  className="form-row-input"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  required
>>>>>>> a6aa3e81804d8130cead094b85cc21b83b3e1f50
                ></textarea>
                <button type="submit" className="submit-btn">SUBMIT COMMENT</button>
              </form>
            </div>
          </div>

<<<<<<< HEAD
          <div className="blogDetails-right">
=======
           <div className="blogDetails-right">
>>>>>>> a6aa3e81804d8130cead094b85cc21b83b3e1f50
            <div className="blogDetails-section-search">
              <input type="search" className="search-class" placeholder="Search here" />
              <span className="search-icon">🔍</span>
            </div>

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

      {showAlert && (
        <div className="custom-alert-wrap">
          <div className={`custom-alert ${alertType}`}>
            <span className="ca-icon">🔔</span>
            <span className="ca-msg">{alertMsg}</span>
            <button className="ca-close" onClick={() => setShowAlert(false)}>×</button>
<<<<<<< HEAD
            <div className="ca-progress" />
=======
>>>>>>> a6aa3e81804d8130cead094b85cc21b83b3e1f50
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default BlogDetailsContent;
