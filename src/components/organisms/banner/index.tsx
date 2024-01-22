"use client";
import React, { useEffect } from "react";
import "./styles.scss";

export default function Banner() {
  useEffect(() => {
    const elements = document.querySelectorAll(".banner-container figure");
    elements.forEach((element) => {
      element.classList.add("active");
    });
  }, []);

  return (
    <section className="banner-container">
      <figure className="banner-figure-2 mb-0">
        <img src="https://res.cloudinary.com/dlp5ey53k/image/upload/v1705850076/asset_1_rwf0jo.png" />
      </figure>
      <figure className="banner-figure-3 mb-0">
        <img src="https://res.cloudinary.com/dlp5ey53k/image/upload/v1705850077/asset_2_yw2zon.png" />
      </figure>
      <div className="banner-bg">Dali</div>
      <figure className="banner-figure-1 mb-0">
        <img src="https://res.cloudinary.com/dlp5ey53k/image/upload/v1705850077/asset_3_lpnh2z.png" />
      </figure>
      <figure className="banner-person mb-0">
        <img src="https://res.cloudinary.com/dlp5ey53k/image/upload/v1705850078/person_uuauyb.png" />
      </figure>
      <figure className="banner-figure-4 mb-0">
        <img src="https://res.cloudinary.com/dlp5ey53k/image/upload/v1705850077/dali-logo_mhgvts.png" />
      </figure>
    </section>
  );
}
