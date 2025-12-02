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
        data-desktop-vid="https://res.cloudinary.com/dbgt948uj/video/upload/q_auto:best/f_mp4/headerDesktop_vz0vko.mp4"
        data-mobile-vid="https://res.cloudinary.com/dbgt948uj/video/upload/q_auto:best/f_mp4/headerDesktop_vz0vko.mp4"
      >
        <source
          src="https://res.cloudinary.com/dbgt948uj/video/upload/q_auto:best/f_mp4/headerDesktop_vz0vko.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
