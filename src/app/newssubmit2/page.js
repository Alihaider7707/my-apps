"use client";

import React, { useState } from "react";

const newssubmit2 = () => {
  const [Newsheading2, setNewsheading2] = useState("");
  const [Newsdecription2, setNewsdecription2] = useState("");

  const save = async () => {
    const data = await fetch("/api/newsparaapi2", {
      method: "POST",
      body: JSON.stringify({ Newsheading2, Newsdecription2 }),
    });
  };

  return (
    <div>
      <input
        name="Newsheading2"
        type="text"
        onChange={(e) => setNewsheading2(e.target.value)}
      />
      <br />
      <br />
      <textarea
        name="Newsdecription2"
        id=""
        cols="30"
        rows="10"
        onChange={(e) => setNewsdecription2(e.target.value)}
      ></textarea>
      <br />
      <br />
      <a href="/newssubmit2">
        <button onClick={save}>save</button>
      </a>
    </div>
  );
};

export default newssubmit2;
