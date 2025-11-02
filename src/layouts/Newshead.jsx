import React from "react";

const Newshead = () => {
  return (
    <>
      <div className="news-section" style={{  background: "url('img/news-head.jpg')", backgroundSize: "cover",
        backgroundPosition: "center", backgroundRepeat:"no-repeat"}}>
        <div className="container text-center">
          <h2>News</h2>
        </div>
      </div>
    </>
  );
};

export default Newshead;
