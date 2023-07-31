import React from 'react'

const ConceptItem = ({image,title,description}) => {
  return (
    
      <li className="concept">
        <img src={image} alt="TODO: TITLE" />
        <h2>{title}</h2>
        <p>{description}</p>
      </li>
    
  );
}

export default ConceptItem