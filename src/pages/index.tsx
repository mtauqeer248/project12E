import {navigate } from "gatsby";
import React from "react";
import Lolly from "../components/Lolly";
import "../styles/main.css";

const Home = () => {
  return (
    <div>
      <div className="lolliesList">
        <Lolly lollyBottom="#C06C50" lollyTop="#E3A28D" lollyMiddle="#8C0040" />
        <Lolly lollyBottom="#C24C50" lollyTop="#8B4513" lollyMiddle="#8C0090" />
        <Lolly lollyBottom="#FF00FF" lollyTop="#A52A2A" lollyMiddle="#ADFF2F" />
        <Lolly lollyTop="#21ed87" lollyBottom="#4067a3" lollyMiddle="#f22307" />
      </div>
<input type="button" className="btn" value="Make a new lolly to send to a friend"
    onClick={()=>
    navigate("/createLolly")
    }
    ></input>
    </div>
  );
};

export default Home;
