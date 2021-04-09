import React from "react";
// import "./Player";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
import "./Player.css";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        {/* Sidebar */}
        <Sidebar />
        {/* Body */}
        <Body spotify={spotify} />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Player;
