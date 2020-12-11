import { navigate } from "gatsby";
import React from "react";
import Lolly from "../components/Lolly";
import "../styles/main.css";

const Template = ({ pageContext: { data } }) => {
  return (
    <div className="createLolly">
      <Lolly
        lollyTop={data.colorTop}
        lollyMiddle={data.colorMiddle}
        lollyBottom={data.colorBottom}
      />
      <div className="info">
        <div className="details">
          <p id="recipient" className="recipient">
            {data.recipient}
          </p>
          <div id="message" className="message">
            {data.message}
          </div>
          <p id="from" className="from">
            — {data.sender}
          </p>
        </div>
        <p className="bytheway">
          {data.sender}
         
          <button onClick={()=>navigate("/createLolly")} value="Create New Lolly"/>
        </p>
      </div>
    </div>
  );
};

export default Template;
