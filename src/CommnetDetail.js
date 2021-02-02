import React from "react";

export const CommnetDetail = (props) => {
    console.log(props)
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.image()} />
      </a>
      <div className="content">
        <a href="/" className="Author">
        {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="Text">
          {props.comment}
        </div>
      </div>
    </div>
  );
};
export default CommnetDetail;
