import React, { useState } from "react";
// import { shortsData } from "@/data/shorts"; // Assuming your videos are stored here
export const shortsData = [
  {
    title: "Category 1",
    videos: [
      { link: "https://www.youtube.com/watch?v=abc123" },
      { link: "/videos/myvideo1.mp4" }
    ]
  },
  {
    title: "Category 2",
    videos: [
      { link: "https://www.youtube.com/watch?v=xyz456" }
    ]
  },{
    title: "Category 1",
    videos: [
      { link: "https://www.youtube.com/watch?v=abc123" },
      { link: "/videos/myvideo1.mp4" }
    ]
  },
  {
    title: "Category 2",
    videos: [
      { link: "https://www.youtube.com/watch?v=xyz456" }
    ]
  },{
    title: "Category 1",
    videos: [
      { link: "https://www.youtube.com/watch?v=abc123" },
      { link: "/videos/myvideo1.mp4" }
    ]
  },
  {
    title: "Category 2",
    videos: [
      { link: "https://www.youtube.com/watch?v=xyz456" }
    ]
  }
];


const ShortsGallery = () => {
  const [modalIndex, setModalIndex] = useState(null);

  const openModal = (index) => setModalIndex(index);
  const closeModal = () => setModalIndex(null);

  const next = () => setModalIndex((modalIndex + 1) % flattenedVideos.length);
  const prev = () => setModalIndex((modalIndex - 1 + flattenedVideos.length) % flattenedVideos.length);

  const flattenedVideos = shortsData.flatMap(category =>
    category.videos.map(video => ({ ...video, category: category.title }))
  );

  const getVideoSrc = (video) => {
    if (video.link.includes("youtube")) {
      const videoId = video.link.split("v=")[1] || video.link.split("/").pop();
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    }
    return video.link;
  };

  const navButtonStyle = (side) => ({
    position: "absolute",
    top: "50%",
    [side]: "10px",
    transform: "translateY(-50%)",
    background: "rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.3)",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    color: "#fff",
    fontSize: "24px",
    cursor: "pointer",
    zIndex: 10
  });

  return (
    <>
      {/* Grid View */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {flattenedVideos.map((video, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden cursor-pointer relative group"
            onClick={() => openModal(index)}
          >
            <div className="w-full h-64 overflow-hidden relative">
              {video.link.includes("youtube") ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={getVideoSrc(video).replace("?autoplay=1&rel=0", "")}
                  title={`Video ${index}`}
                  className="w-full h-full object-cover pointer-events-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              ) : (
                <video
                  src={getVideoSrc(video)}
                  className="w-full h-full object-cover pointer-events-none"
                  muted
                  loop
                  autoPlay
                />
              )}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white text-xs p-2 opacity-0 group-hover:opacity-100 transition">
                {video.category}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal View */}
      {modalIndex !== null && (
        <div style={{
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
          <div style={{
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
              flattenedVideos[modalIndex].link.includes("youtube") ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={getVideoSrc(flattenedVideos[modalIndex])}
                  style={{ border: "none" }}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              ) : (
                <video
                  controls
                  autoPlay
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                >
                  <source src={getVideoSrc(flattenedVideos[modalIndex])} />
                </video>
              )
            }

            {/* Navigation */}
            <button onClick={prev} style={navButtonStyle("left")}>‹</button>
            <button onClick={next} style={navButtonStyle("right")}>›</button>

            {/* Close Button */}
            <button onClick={closeModal} style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              background: "transparent",
              color: "#fff",
              fontSize: "22px",
              border: "none",
              cursor: "pointer"
            }}>✕</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ShortsGallery;
