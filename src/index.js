import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src="" />
        </a>
        <div className="content">
          <a href="/" className="Author">
            Abraham
          </a>
          <div className="metadata">
            <span className="date">Today at 6 : 00PM</span>
          </div>
          <div className="Text">
            Steven Grider is giving the tutorial on React.JS{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
