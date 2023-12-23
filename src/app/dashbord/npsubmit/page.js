"use client";

import React, { useState } from "react";

const npsubmit = () => {
  const [Npheading, setNpheading] = useState("");
  const [Npdecription, setNpdecription] = useState("");

  const save = async () => {
    const data = await fetch("/api/npapi", {
      method: "POST",
      body: JSON.stringify({ Npheading, Npdecription }),
    });
  };

  return (
    <div>
      <input
        name="Npheading"
        type="text"
        onChange={(e) => setNpheading(e.target.value)}
      />
      <br />
      <br />
      <textarea
        name="Npdecription"
        id=""
        cols="30"
        rows="0"
        onChange={(e) => setNpdecription(e.target.value)}
      ></textarea>
      <br />
      <br />
      <a href="/dashbord/npsubmit">
        <button onClick={save}>save</button>
      </a>
    </div>
  );
};

export default npsubmit;
