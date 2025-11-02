import React from "react";
import { blogs } from "../Utils/Data";

const NewsHero = () => {
  return (
    <>
      <div className="blog-section">
        <div className="container">
          <h2 className="blog-heading">
            Latest <span>Fitness Articles</span>
          </h2>
          <div className="blog-grid">
            {blogs.map((blog, index) => (
              <div className="blog-card" key={index}>
                <div className="blog-meta">
                  <span className="blog-date">{blog.date}</span> •{" "}
                  <span className="blog-author">{blog.author}</span>
                </div>
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-desc">{blog.desc}</p>
                <a href="#" className="read-more">
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsHero;
