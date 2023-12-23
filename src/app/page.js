"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [Tabledata, setTabledata] = useState([]);

  const show = async () => {
    const data = await fetch("/api/appapi");
    const jsondata = await data.json();
    setTabledata(jsondata);
  };

  useEffect(() => {
    show(), [];
  });

  const [Boxdata, setBoxdata] = useState([]);

  const boxshow = async () => {
    const data = await fetch("/api/appapi");
    const jsondata = await data.json();
    setBoxdata(jsondata);
  };

  useEffect(() => {
    boxshow(), [];
  });

  return (
    <section>
      <div className="container">
        <div className="row">
          {Tabledata.map((items) => (
            <div className="news-max">
              <Link href="/Newspara">
              <div>
                <img src="/img/1.jpg" alt="" />
              </div>
              <div className="news-text">
                <h3>{items.Heading}</h3>
                <p>{items.Message}</p>
              </div>
              </Link>
            </div>
          ))}

          {Boxdata.map((items) => (
            <div className="news-max2">
              <div className="news-img">
                <img
                  src="https://ichef.bbci.co.uk/ace/standard/232/cpsprodpb/a818/live/be2fd2d0-9fbb-11ee-b9a7-c91b9dfa91e5.jpg"
                  alt=""
                />
              </div>
              <div>
                <h3>{items.Head}</h3>
                <p>{items.Decription}</p>
              </div>
            </div>
          ))}

          
        </div>
      </div>
    </section>
  );
};

export default Home;
