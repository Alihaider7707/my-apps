"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaShareAltSquare,
} from "react-icons/fa";

const Newspara = () => {
  const [Newspara, setNewspara] = useState([]);

  const show = async () => {
    const data = await fetch("/api/newsparaapi");
    const jsondata = await data.json();
    setNewspara(jsondata);
  };
  useEffect(() => {
    show(), [];
  });



  return (
    <>
      <div className="container">
        <div className="news-flex">
          {Newspara.map((items) => (
            <div>
              <div key={items._id} className="newspara-text">
                <h1> {items.Newsheading} </h1> <p> {items.Newsdecription} </p>
              </div>
            </div>
          ))}
          <div className="social-icons">
            <Link href="#0" className="socialicon">
              <FaShareAltSquare />
            </Link>
            <Link href="#0" className="socialicon">
              <FaTwitterSquare />
            </Link>
            <Link href="#0" className="socialicon">
              <FaFacebookSquare />
            </Link>
          </div>
          <div>
            <hr style={{ padding: "0" }} />
          </div>
        </div>
      </div>

    

     
    </>
  );
};

export default Newspara;
