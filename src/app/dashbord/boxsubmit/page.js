"use client";

import React, { useState } from "react";

const boxsubmit = () => {
  const [Head, setHead] = useState("");
  const [Decription, setDecription] = useState("");

  const save = async () => {
    const data = await fetch("/api/box", {
      method: "POST",
      body: JSON.stringify({ Head, Decription }),
    });
  };

  return (
    <div>
      <input
        name="Head"
        type="text"
        onChange={(e) => setHead(e.target.value)}
      />
      <br />
      <br />
      <textarea
        name="Decription"
        id=""
        cols="30"
        rows="10"
        onChange={(e) => setDecription(e.target.value)}
      ></textarea>
      <br />
      <br />
      <a href="/dashbord/boxsubmit">
        <button onClick={save}>save</button>
      </a>
    </div>
  );
};

export default boxsubmit;
