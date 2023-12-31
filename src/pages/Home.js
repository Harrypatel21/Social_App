// import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Comments } from "../components";
import styles from "../styles/home.module.css";

const Home = ({ posts }) => {
  // comments.map((comment3) => {
  //   console.log(comment3.name);
  // });
  // console.log(comments);

  return (
    <div className={styles.postsList}>
      {posts?.map((post) => (
        <div className={styles.postWrapper} key={post.id}>
          <div className={styles.postHeader}>
            <div className={styles.postAvatar}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/4322/4322991.png"
                alt="user-pic"
              />
              <div>
                <span className={styles.postAuthor}>{post.name}</span>
                <span className={styles.postTime}>a minute ago</span>
              </div>
            </div>
            <div className={styles.postContent}>{post.title}</div>

            <div className={styles.postActions}>
              <div className={styles.postLike}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
                  alt="likes-icon"
                />
                <span>5</span>
              </div>

              <div className={styles.postCommentsIcon}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1380/1380338.png"
                  alt="comments-icon"
                />
                <span>2</span>
              </div>
            </div>
            <div className={styles.postCommentBox}>
              <input placeholder="Start typing a comment" />
            </div>

            <div className={styles.postCommentsList}>
              <Comments id={post.id} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Home.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Home;
