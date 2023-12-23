"use client";

import React, { useState } from "react";

const newspsubmit = () => {
  const [Newspheading, setNewspheading] = useState("");
  const [Newspdecription, setNewspdecription] = useState("");

  const save = async () => {
    const data = await fetch("/api/newspapi", {
      method: "POST",
      body: JSON.stringify({ Newspheading, Newspdecription }),
    });
  };

  return (
    <div>
      <input
        name='Newspheading'
        type='text'
        onChange={(e) => setNewspheading(e.target.value)}
      />
      <br />
      <br />
      <textarea
        name='Newspdecription'
        id=''
        cols='30'
        rows='10'
        onChange={(e) => setNewspdecription(e.target.value)}></textarea>
      <br />
      <br />
      <a href='/dashbord/newspsubmit'>
        <button onClick={save}> save </button>
      </a>
    </div>
  );
};

export default newspsubmit;
