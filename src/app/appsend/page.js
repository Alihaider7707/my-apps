"use client";
import React, { useEffect, useState } from "react";

import Tabledatas from "../appjson/appsjson";

const Appsend = () => {
  const [Tabledata, setTabledata] = useState([]);

  const show = async () => {
    const data = await fetch("/api/appapi");
    const jsondata = await data.json();
    setTabledata(jsondata);
  };

  useEffect(() => {
    show(), [];
  });

  return (
      <div>
    <div className="appgrid">
        {Tabledata.map((items) => (
          <div key={items._id} className="grid-area">
            
            <h3>{items.Heading}</h3>
            <p>{items.Message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appsend;
