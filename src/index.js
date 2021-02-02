import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommnetDetail from "./CommnetDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommnetDetail
          image={faker.image.transport}
          comment="l am busy learning React from Steven Grider"
          author="Abraham Nkomo"
          timeAgo="Today at 23 :00AM"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommnetDetail
          image={faker.image.people}
          comment="l am at home staying with my grandfather"
          author="Timothy Nkomo"
          timeAgo="Today at 22 :00PM"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommnetDetail
          image={faker.image.food}
          comment="l am coach currently coaching Real Madrid"
          author="Zinedine Zidane"
          timeAgo="Today at 21 :00PM"
        />
      </ApprovalCard>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
