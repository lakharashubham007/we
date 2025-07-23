import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import TeamData from "../../data/elements/team.json";
import TeamHead from "./TeamHead";
import newsShadow from "../../public/images/shape/newsletter-shadow-01.png";
import union from "../../public/images/shape/v-union.png";

import "swiper/css";
import "swiper/css/navigation";

const TeamEightNew = ({ head }) => {
  return (
    <div
      style={{
        width: "100%",
        background: "transparent",
        padding: "40px 20px",
        display: "flex",
        justifyContent: "center",



      }}
    >
      {/* <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          background: "rgba(255,255,255,0.9)",
          borderRadius: "12px",
          padding: "20px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          position: "relative",
            border: "3px solid transparent",
    borderRadius: "12px",
    backgroundImage: `
      linear-gradient(white, white),
      linear-gradient(to right, #3a0ca3, #7209b7, #4361ee)
    `,
    backgroundOrigin: "border-box",
    backgroundClip: "padding-box, border-box",
        // Optional: Transparent inner background
    backgroundColor: "transparent",
        }}
      > */}
      <div className="rbt-newsletter-area newsletter-section-02"

      >
        <div className="container newsletter-style-3" style={{
          padding: '30px',

          // border: "3px solid transparent",
          borderRadius: "12px",
          backgroundImage: `
            linear-gradient(white, white),
            linear-gradient(to right, #3a0ca3, #7209b7, #4361ee)
          `,
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
          // Optional: Transparent inner background
          backgroundColor: "transparent",

        }}>
          <div className="shape-1">
            <Image src={newsShadow} width={350} height={307} alt="Shape" />
          </div>
          <div className="shape-union">
            <Image src={union} width={93} height={93} alt="Shape" />
          </div>
          {/* <div className="shape-2"></div> */}


          {/* Custom Heading */}
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "700",
                background: "linear-gradient(90deg, #007CF0, #7928CA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "8px",
              }}
            >
              We Wagad Latest Story
            </h2>

            <p
              style={{
                fontSize: "14px",
                color: "black",
                margin: 0,
              }}
            >
              Explore we wagad association digital platform.
            </p>
            <div
              style={{
                height: "3px",
                width: "60px",
                margin: "0 auto 10px",
                borderRadius: "6px",
                background: "linear-gradient(to right, #7F00FF, #E100FF)",
                marginTop: '10px'
              }}
            />
          </div>

          {/* Team Cards Carousel */}
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
              480: { slidesPerView: 2.5 },
              768: { slidesPerView: 3.5 },
              1024: { slidesPerView: 5 },
            }}
            style={{ padding: "5px 90px" }}
          >
            {TeamData?.team?.slice(0, 8).map((group, i) =>
              group.details.map((item, j) => (
                <SwiperSlide key={`${i}-${j}`}>
                  <div
                    style={{
                      width: "140px",
                      height: "220px",
                      borderRadius: "10px",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      background: "#fff",
                      padding: "1px",
                      border: "1px solid transparent",
                      backgroundClip: "padding-box, border-box",
                      backgroundOrigin: "border-box",
                      backgroundImage:
                        "linear-gradient(white, white), linear-gradient(to right, #007CF0, #7928CA)",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                    }}
                  >
                    <div style={{ height: "150px", overflow: "hidden" }}>
                      <Link href="#">
                        <Image
                          src={item.img}
                          alt={item.name}
                          width={140}
                          height={150}
                          style={{ objectFit: "cover" }}
                        />
                      </Link>
                    </div>
                    <div style={{ textAlign: "center", padding: "6px 8px" }}>
                      <h5
                        style={{
                          fontSize: "13px",
                          margin: "5px 0 2px",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        <Link href="#">{item.name}</Link>
                      </h5>
                      <p
                        style={{
                          fontSize: "11px",
                          color: "#666",
                          margin: 0,
                        }}
                      >
                        {item.type}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </div>
      </div>
    </div>

  );
};

export default TeamEightNew;
