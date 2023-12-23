"use client";

import React, { useState } from "react";

const newssubmit1 = () => {
  const [Newsheading1, setNewsheading1] = useState("");
  const [Newsdecription1, setNewsdecription1] = useState("");

  const save = async () => {
    const data = await fetch("/api/newsparaapi1", {
      method: "POST",
      body: JSON.stringify({ Newsheading1, Newsdecription1 }),
    });
  };

  return (
    <div>
      <input
        name="Newsheading1"
        type="text"
        onChange={(e) => setNewsheading1(e.target.value)}
      />
      <br />
      <br />
      <textarea
        name="Newsdecription1"
        id=""
        cols="30"
        rows="10"
        onChange={(e) => setNewsdecription1(e.target.value)}
      ></textarea>
      <br />
      <br />
      <a href="/newssubmit1">
        <button onClick={save}>save</button>
      </a>
    </div>
  );
};

export default newssubmit1;
