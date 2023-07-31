import React from "react";
import ConceptItem from "./ConceptItem";

const Concept = (props) => {
  return (<ul id="concepts">
    {console.log(props.data)}
    {
        props.data.map(value=>
            <ConceptItem key={value.title} image={value.image} title={value.title} description={value.description}/>
        )
    }
  </ul>
  )
};

export default Concept;
