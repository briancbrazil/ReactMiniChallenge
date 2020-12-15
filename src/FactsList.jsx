import React from "react";
import Fact from "./Fact.jsx"
// TO DO: Create a FactsList functional component which maps through all of the animal facts in data.jsx and returns each item as a Fact component

// NOTE: In order to maintain CSS styling, do not alter the existing tags or their classNames
// props.facts === animalFacts;
// const FactsList = (props) => {
//   console.log(props.facts);
//   return <div className="factsList">
//     {/* <Fact /> */}
//     <h1>fact</h1>
//   </div>
// };

// export default FactsList;

const FactsList = ({facts}) => (
  <div className="factsList">
    {facts.map((item) => (
      <Fact fact = {item}/>
    ))}
  </div>
);

export default FactsList;

