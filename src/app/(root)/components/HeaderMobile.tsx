import React from "react";

export default function HeaderMobile() {
  return (
    <div className="h-[89vh] w-screen">
      <video
        className="h-full w-screen object-cover"
        preload="auto"
        loop
        autoPlay
        playsInline
        muted
        data-desktop-vid="https://res.cloudinary.com/dbgt948uj/video/upload/v1764630122/headerMobile_ohnpml.mp4"
        data-mobile-vid="https://res.cloudinary.com/dbgt948uj/video/upload/v1764630122/headerMobile_ohnpml.mp4"
      >
        <source
          src="https://res.cloudinary.com/dbgt948uj/video/upload/v1764630122/headerMobile_ohnpml.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
