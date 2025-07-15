import React from "react";
import "./NoteFound.css";
import { Link } from "react-router-dom";

const NoteFound = () => {
  return (
    <div className="note_found">
      <Link to="/">
        <div className="note_found_img">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/error/title._TTD_.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/error/5._TTD_.png"
            alt=""
          />
        </div>
      </Link>
    </div>
  );
};

export default NoteFound;
