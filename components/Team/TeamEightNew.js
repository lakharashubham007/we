"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import TeamData from "../../data/elements/team.json";
import newsShadow from "../../public/images/shape/newsletter-shadow-01.png";
import union from "../../public/images/shape/v-union.png";

import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

import Reel1 from '../../public/images/reels/reel1.png'
import Reel2 from '../../public/images/reels/reel2.png'
import Reel3 from '../../public/images/reels/reel3.png'
import Reel4 from '../../public/images/reels/reel4.png'

const shortVideos = [
  {
    name: "RCCL Match 1",
    img: Reel1, // Replace with your image thumbnail
    type: "YouTube Shorts",
    link: "https://www.youtube.com/shorts/GxsMPQ2l1BQ",
  },
  {
    name: "RCCL Match 2",
    img: Reel2, // Replace with your image thumbnail
    type: "YouTube Shorts",
    link: "https://www.youtube.com/shorts/SMZLb1EMysU",
  },
  {
    name: "RCCL Match 2",
    img: Reel3, // Replace with your image thumbnail
    type: "YouTube Shorts",
    link: "https://www.youtube.com/shorts/Y_PhZAmpJwo",
  },
  {
    name: "RCCL Match 2",
    img: Reel4, // Replace with your image thumbnail
    type: "YouTube Shorts",
    link: "https://www.youtube.com/shorts/1geXaDZqIAA",
  },
 {
    name: "RCCL Match 1",
    img: Reel1, // Replace with your image thumbnail
    type: "YouTube Shorts",
    link: "https://www.youtube.com/shorts/GxsMPQ2l1BQ",
  },
  {
    name: "RCCL Match 2",
    img: Reel2, // Replace with your image thumbnail
    type: "YouTube Shorts",
    link: "https://www.youtube.com/shorts/SMZLb1EMysU",
  },
  {
    name: "RCCL Match 2",
    img: Reel3, // Replace with your image thumbnail
    type: "YouTube Shorts",
    link: "https://www.youtube.com/shorts/Y_PhZAmpJwo",
  },
  {
    name: "RCCL Match 2",
    img: Reel4, // Replace with your image thumbnail
    type: "YouTube Shorts",
    link: "https://www.youtube.com/shorts/1geXaDZqIAA",
  },
];


const TeamEightNew = () => {
  const [modalIndex, setModalIndex] = useState(null); // index of selected video

  // const flattenedVideos = TeamData?.team?.flatMap((group) => group.details);
  const flattenedVideos = shortVideos;

  const openModal = (index) => setModalIndex(index);
  const closeModal = () => setModalIndex(null);
  const next = () => setModalIndex((prev) => (prev + 1) % flattenedVideos.length);
  const prev = () => setModalIndex((prev) => (prev - 1 + flattenedVideos.length) % flattenedVideos.length);

  const getVideoSrc = (item) => {
    if (item.link?.includes("youtube.com") || item.link?.includes("youtu.be")) {
      const match = item.link.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
      return `https://www.youtube.com/embed/${match?.[1]}?autoplay=1`;
    }
    // Handle Instagram Reels (embed as iframe)
    if (item?.link?.includes("instagram.com/reel/")) {
      const reelId = item?.link.split("/reel/")[1]?.split("/")[0];
      return `https://www.instagram.com/reel/${reelId}/embed`;
    }
    return item.link; // MP4 or Instagram fallback
  };

  useEffect(() => {
  if (modalIndex !== null && flattenedVideos[modalIndex]?.link?.includes("instagram.com")) {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }
}, [modalIndex]);



  return (
    <div style={{ width: "100%", background: "transparent", padding: "40px 20px", display: "flex", justifyContent: "center" }}>
      <div className="rbt-newsletter-area newsletter-section-02"
        style={{
          width: "100%",
          maxWidth: "1280px",
          // margin: "0 auto",
          background: "transparent",
          // padding: "40px 16px",
        }}
      >
        <div className="container newsletter-style-3"
          style={{
            padding: '30px',
            borderRadius: "12px",
            backgroundImage: `linear-gradient(white, white), linear-gradient(to right, #3a0ca3, #7209b7, #4361ee)`,
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
            backgroundColor: "transparent",
            position: "relative",
          }}>
          <div className="shape-1"><Image src={newsShadow} width={350} height={307} alt="Shape" /></div>
          <div className="shape-union"><Image src={union} width={93} height={93} alt="Shape" /></div>

          {/* Heading */}
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <h2 style={{
              fontSize: "24px",
              fontWeight: "700",
              background: "linear-gradient(90deg, #007CF0, #7928CA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "8px",
            }}>We Wagad Latest Story</h2>
            <p style={{ fontSize: "14px", color: "black", margin: 0 }}>
              Explore we wagad association digital platform.
            </p>
            <div style={{
              height: "3px", width: "60px", margin: "0 auto 10px", borderRadius: "6px",
              background: "linear-gradient(to right, #7F00FF, #E100FF)", marginTop: '10px'
            }} />
          </div>

          {/* Swiper Carousel */}
          <Swiper
            className="team-swiper"
            loop={false}
            spaceBetween={12}
            slidesPerView={2}
            grabCursor={true}
            modules={[Navigation]}
            navigation={{
              nextEl: ".rbt-arrow-left",
              prevEl: ".rbt-arrow-right",
            }}

            breakpoints={{
              320: { slidesPerView: 1.1 },   // iPhone SE, narrow mobile
              375: { slidesPerView: 1.2 },   // iPhone 11, 12, 13
              425: { slidesPerView: 1.4 },   // wider phones
              480: { slidesPerView: 1.8 },
              640: { slidesPerView: 2.2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
          // style={{ padding: "5px 90px" }}
          >
            {flattenedVideos.map((item, index) => (
              <SwiperSlide key={index}>
                {/* <div
                  onClick={() => openModal(index)}
                  style={{
                    width: "140px",
                    height: "220px",
                    borderRadius: "10px",
                    overflow: "hidden",
                    background: "#fff",
                    padding: "1px",
                    border: "1px solid transparent",
                    backgroundClip: "padding-box, border-box",
                    backgroundOrigin: "border-box",
                    backgroundImage: "linear-gradient(white, white), linear-gradient(to right, #007CF0, #7928CA)",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                    cursor: "pointer",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                >
                  <div style={{ height: "220px", overflow: "hidden" }}>
                    <Image src={item.img} alt={item.name} width={140} height={150} style={{ objectFit: "cover" }} />
                  </div>
                  
                </div> */}
                <div
                  onClick={() => openModal(index)}
                  style={{
                    width: "140px",
                    height: "220px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    background: "#fff",
                    padding: "2px",
                    border: "1px solid transparent",
                    backgroundClip: "padding-box, border-box",
                    backgroundOrigin: "border-box",
                    backgroundImage: "linear-gradient(white, white), linear-gradient(to right, #007CF0, #7928CA)",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.08)",
                    cursor: "pointer",
                    position: "relative",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.querySelector(".hover-overlay").style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.querySelector(".hover-overlay").style.opacity = "0";
                  }}
                >
                  {/* Image */}
                  <div style={{ width: "100%", height: "100%", position: "relative", borderRadius: "inherit", overflow: "hidden" }}>
                    <Image
                      src={item?.img}
                      alt={item.name}
                      fill
                      style={{
                        objectFit: "cover",
                        transition: "transform 0.3s ease",
                      }}
                    />

                    {/* Overlay with Play Icon */}
                    <div
                      className="hover-overlay"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: "rgba(0, 0, 0, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                      }}
                    >
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* MODAL VIEW */}
      {modalIndex !== null && (
        <div
          onClick={closeModal} // Clicking on overlay will close the modal
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px"
          }}>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "min(90vw, 360px)",
              height: "640px",
              background: "#000",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
            {
              flattenedVideos[modalIndex].link.includes("youtube") || flattenedVideos[modalIndex].link.includes("instagram.com/reel") ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={getVideoSrc(flattenedVideos[modalIndex])}
                  style={{ border: "none" }}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              ) : (
                <video controls autoPlay style={{ width: "100%", height: "100%", objectFit: "cover" }}>
                  <source src={getVideoSrc(flattenedVideos[modalIndex])} />
                </video>
              )
            }

            {/* Navigation Buttons */}
            <button onClick={prev} style={navButtonStyle("left")}>‹</button>
            <button onClick={next} style={navButtonStyle("right")}>›</button>
            <button onClick={closeModal} style={{
              position: "absolute", top: "10px", right: "10px", background: "transparent",
              color: "#fff", fontSize: "22px", border: "none", cursor: "pointer"
            }}>✕</button>
          </div>
        </div>
      )}

    </div>
  );
};

// Reusable nav button style
const navButtonStyle = (side) => ({
  position: "absolute",
  top: "50%",
  [side]: "10px",
  transform: "translateY(-50%)",
  background: "rgba(255,255,255,0.2)",
  color: "#fff",
  border: "none",
  borderRadius: "50%",
  fontSize: "15px",
  width: "45px",
  height: "45px",
  cursor: "pointer",
  zIndex: 10
});

export default TeamEightNew;
