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
      <div className="banner-bg d-flex align-items-center">
        <figure className="banner-logo">
          <img src="https://res.cloudinary.com/dlp5ey53k/image/upload/v1705954710/dali_logo_pun3zp.png" />
          <figcaption className="dl-comp-text-nano mt-4">
            React v.2.3.0, Angular v.2.3.0, Android v.2.3.4
          </figcaption>
        </figure>
      </div>
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
