import React from "react";

export default function Header() {
  return (
    <div className="h-[89vh] w-screen">
      <video
        className="h-full w-screen object-cover"
        preload="auto"
        loop
        autoPlay
        playsInline
        muted
        data-desktop-vid="https://res.cloudinary.com/dbgt948uj/video/upload/v1764530361/Dise%C3%B1o_sin_t%C3%ADtulo_qnpeqx.mp4"
        data-mobile-vid="https://res.cloudinary.com/dbgt948uj/video/upload/v1764530361/Dise%C3%B1o_sin_t%C3%ADtulo_qnpeqx.mp4"
      >
        <source
          src="https://res.cloudinary.com/dbgt948uj/video/upload/v1764530361/Dise%C3%B1o_sin_t%C3%ADtulo_qnpeqx.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
