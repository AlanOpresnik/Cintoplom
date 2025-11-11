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
        data-desktop-vid="https://res.cloudinary.com/dbgt948uj/video/upload/v1760548807/whatsapp-video-2025-09-23-at-55306-am-1_Nqz6jURe_x0ppn5.mp4"
        data-mobile-vid="https://res.cloudinary.com/dbgt948uj/video/upload/v1760548807/whatsapp-video-2025-09-23-at-55306-am-1_Nqz6jURe_x0ppn5.mp4"
      >
        <source
          src="https://res.cloudinary.com/dbgt948uj/video/upload/v1760548807/whatsapp-video-2025-09-23-at-55306-am-1_Nqz6jURe_x0ppn5.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
