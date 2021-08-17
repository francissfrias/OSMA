import React from "react";
import "./featuredInfo.css";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        {" "}
        <div className="experiment">
          <span className="featuredTitle">Mandate</span>
        </div>
        <div className="featuredMessageOT">
          <span className="featuredMessageboxTop">
            Section 2 of Republic Act No. 8468 “An Act Converting the Don
            Severino Agricultural College in the Municipality of Indang,
            Province of Cavite into a State University, to be Known as the
            Cavite State University” states that,
          </span>
          <span className="featuredMessageboxItal">
            “The University shall primarily provide advance instruction and
            professional training in agriculture, science and technology,
            education and other related fields, undertake research and extension
            services, and provide progressive leadership in these areas.”
          </span>
        </div>
      </div>
    </div>
  );
}
