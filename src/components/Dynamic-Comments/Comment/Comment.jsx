/* eslint-disable react/prop-types */
const Comment = ({ comment }) => {
  return (
    <div className="comment__container">
      <div className="comment">
      <h1 className="comment__name">@{comment.name}</h1>
      <h1 className="comment__comment"> {comment.comment}</h1>
    </div>
    </div>
  );
};

export default Comment;
