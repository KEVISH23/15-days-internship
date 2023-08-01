import React, { useState } from "react";
import Form from "./Form";

const Header = (props) => {
  const [showForm, setShowForm] = useState(false);
const newDataHandler = (data) =>{
    console.log(data)
    props.getNew(data)
}
  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ color: "#DDE6ED" }}>
        Enter Data/Hide Form
        <button
        className="showBtn"
          onClick={() => {
            setShowForm(!showForm);
          }}

        >
         
          {showForm? "\u2191":"\u2193"}
        </button>
      </h2>
      {showForm ? <Form getNewData={newDataHandler}/> : null}
    </div>
  );
};

export default Header;
