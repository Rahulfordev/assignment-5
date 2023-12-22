import { useState } from "react";
import Comment from "../Comment/Comment";
import "./comments.css";
const Comments = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [userdata, setUserData] = useState([]);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userComment = {
      name,
      comment,
    };
    setUserData([...userdata, userComment]);
    setName("");
    setComment("");
  };
  return (
    <div className="comment-section">
      <h1 className="comment__title">Dynamic Comment Section</h1>
      <form className="comment_form" action="" onSubmit={handleSubmit}>
        <div className="form">
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleName}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form">
          <label htmlFor="comment">Comment:</label>
          <input
            type="text"
            name="comment"
            id="comment"
            value={comment}
            onChange={handleComment}
            placeholder="Add a comment..."
            required
          />
        </div>

        <button className="comment-button" type="submit">
          Comment
        </button>
      </form>
      {userdata.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
