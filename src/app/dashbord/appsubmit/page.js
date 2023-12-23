"use client";

import React, { useState } from "react";

const appsubmit = () => {
  const [Heading, setHeading] = useState("");
  const [Message, setMessage] = useState("");

  const save = async () => {
    const data = await fetch("/api/appapi", {
      method: "POST",
      body: JSON.stringify({ Heading, Message }),
    });
  };

  return (
    <div>
      <input
        name='Heading'
        type='text'
        onChange={(e) => setHeading(e.target.value)}
      />
      <br />
      <br />
      <textarea
        name='Message'
        id=''
        cols='30 '
        rows='10'
        onChange={(e) => setMessage(e.target.value)}></textarea>
      <br />
      <br />
      <a href='/dashbord/appsubmit'>
        <button onClick={save}>save</button>
      </a>
    </div>
  );
};

export default appsubmit;
