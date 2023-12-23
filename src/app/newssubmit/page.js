"use client";

import React, { useState } from "react";

const newssubmit = () => {
  const [Newsheading, setNewsheading] = useState("");
  const [Newsdecription, setNewsdecription] = useState("");

  const save = async () => {
    const data = await fetch("/api/newsparaapi", {
      method: "POST",
      body: JSON.stringify({ Newsheading, Newsdecription }),
    });
  };

  return (
    <div>
      <input
        name="Newsheading"
        type="text"
        onChange={(e) => setNewsheading(e.target.value)}
      />
      <br />
      <br />
      <textarea
        name="Newsdecription"
        id=""
        cols="30"
        rows="10"
        onChange={(e) => setNewsdecription(e.target.value)}
      ></textarea>
      <br />
      <br />
      <a href="/newssubmit">
        <button onClick={save}>save</button>
      </a>
    </div>
  );
};

export default newssubmit;
