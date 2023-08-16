import PropTypes from "prop-types";
import styles from "../styles/home.module.css";
import { useEffect, useState } from "react";

const Comments = ({ id }) => {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
  const [comments, setComment] = useState([]);
  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setComment(d));
  };
  // console.log(comments);

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div>
      {comments.map((comment, index) => (
        <div className={styles.postCommentsItem} key={index}>
          <div className={styles.postCommentHeader}>
            <span className={styles.postCommentAuthor}>{comment.name}</span>
            <span className={styles.postCommentTime}>a minute age</span>
            <span className={styles.postCommentLikes}>22</span>
          </div>

          <div className={styles.postCommentContent}>{comment.body}</div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
