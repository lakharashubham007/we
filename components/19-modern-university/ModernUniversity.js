import React, { useEffect, useState } from "react";
import ModernUniversityBanner from "./ModernUniversity-Banner";
import Link from "next/link";
import Image from "next/image";

import "venobox/dist/venobox.min.css";

import EventData from "../../data/events.json";
import CourseData from "../../data/elements/accordion.json";
import CourseDetails from "../../data/course-details/courseData.json";
import useCategoryCount from "@/context/useCategoryCount";

import BlogGrid from "../Blogs/BlogGrid";
import TestimonialFour from "../Testimonials/Testimonial-Four";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import brand1 from "../../public/images/brand/partner-5.webp";
import brand2 from "../../public/images/brand/partner-1.webp";
import brand3 from "../../public/images/brand/partner-6.webp";
import brand4 from "../../public/images/brand/partner-3.webp";
import shape from "../../public/images/shape/v-union.png";
import accordionImg from "../../public/images/others/accordion-01.png";
import videoDotImg from "../../public/images/shape/video-dot-01.png";
import videoImg from "../../public/images/others/video-10.jpg";
import videoIcon from "../../public/images/icons/video-icon-01.png";
import starIcon from "../../public/images/shape/v-star.png";
import shapeIcon from "../../public/images/shape/o-icon-2.png";
// import singnature from "../../public/images/others/signature-01.png";
import mfShape from "../../public/images/shape/mf-shape-01.png";
import awardImg from "../../public/images/icons/award-01.png";
// import bannerImg from "../../public/images/others/m-banner-men.png";
import TeamEight from "../Team/TeamEight";
import TeamEightNew from "../Team/TeamEightNew";
import bannerImg from "../../public/images/members/pj1.png";
import singnature from "../../public/images/members/pj-sign.png";
import CounterFive from "../Counters/Counter-Five";
import bgImage18 from "../../public/images/members/countbanner5.png"
import sponsorbg from "../../public/images/members/sponsorbg.png"
import shape1 from "../../public/images/shape/event-shape-01.png";
import shape2 from "../../public/images/shape/event-shape-02.png";
import shape3 from "../../public/images/shape/event-shape-03.png";
import shape4 from "../../public/images/shape/ac-shape-01.png";
import shape5 from "../../public/images/shape/ac-shape-02.png";
import shadow from "../../public/images/shape/ac-c-shadow.png";
import TeamTwo from "../Team/TeamTwo";
import EventCarouse from "../Events/EventCarouse";
import Testimonial from "../Testimonials/Testimonial";
import Gallery from "../Gallery/Gallery";
import CountDownTwo from "../Counters/CountDownTwo";

const ModernUniversity = ({ blogdata }) => {
  let getAllCourse = JSON.parse(JSON.stringify(CourseDetails.courseDetails));
  const { categoryCounts } = useCategoryCount(CourseDetails.courseDetails);

  const [courseFilter, setCourseFilter] = useState(getAllCourse);
  const [activeTab, setActiveTab] = useState("All Course");

  const filterItem = (types) => {
    const updateItem = getAllCourse.filter((curElm) => {
      return curElm.courseType === types;
    });

    if (types !== "All Course") {
      setCourseFilter(updateItem);
    } else {
      setCourseFilter(getAllCourse);
    }
  };

  const handleButtonClick = (courseType) => {
    setCourseFilter(getAllCourse);
    setActiveTab(courseType);
    filterItem(courseType);
  };

  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
      });
    });
  }, []);
  return (
    <>
      <main className="rbt-main-wrapper">

        <div >
          {/* banner */}
          <ModernUniversityBanner />
          {/* Reels */}
          <div style={{
            position: 'relative',
            marginTop: '-1%',  // 40% overlap from the banner bottom
            zIndex: 5,
          }}>
            <TeamEightNew head={false} />
          </div>
        </div>

        <div className="rbt-about-area rbt-section-gapTop overflow-hidden">
          <div className="about-style-4">
            <div className="container">
              <div className="row row--40 mt_dec--40">
                <div className="col-xl-6 col-12 mt--40">
                  <div className="content">
                    <div className="section-title">
                      <h6 className="b2 mb--15">
                        <span className="theme-gradient">
                          Welcome To We Wagad Association
                        </span>
                      </h6>
                      <h2 className="title w-600">
                        Creators of Joy,   <br />{" "}
                        <svg
                          width="40"
                          height="30"
                          viewBox="0 0 40 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2 16.8032C7.91578 16.9588 13.8152 14.5642 17.3757 9.31372C18.7544 7.28056 19.2564 4.87202 19.6736 2.5C20.006 12.1364 30.1484 15.4819 38 16.8227C30.9581 16.3571 23.3519 20.0182 22.65 27.5C18.2438 20.052 10.1583 17.4958 2 16.8032Z"
                            fill="white"
                            stroke="url(#paint0_linear_100_66)"
                            strokeWidth="4"
                            strokeMiterlimit="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_100_66"
                              x1="18.2"
                              y1="2.5"
                              x2="18.2"
                              y2="27.5"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0" stopColor="#2F57EF" />
                              <stop offset="1" stopColor="#C586EE" />
                            </linearGradient>
                          </defs>
                        </svg>{" "}
                        From Wagad to the World.
                      </h2>
                      <p className="mt--20">
                        At Wewagad Association, we believe creativity has no borders. Rooted in the vibrant spirit of Wagad, we’re building a movement of storytellers, entertainers, and dreamers — crafting joy that echoes far beyond our hometown. Together, we’re not just creating content — we’re shaping a culture the world can feel.
                      </p>
                      <ul className="mt--30 mb--25">
                        <li>
                          <span className="icon bg-primary-opacity">
                            <i className="feather-heart"></i>
                          </span>
                          <span className="text">Live Events</span>
                        </li>
                        <li>
                          <span className="icon bg-secondary-opacity">
                            <i className="feather-book"></i>
                          </span>
                          <span className="text">Lights, Camera, Wewagad!</span>
                        </li>
                      </ul>
                      <div className="d-flex align-items-center gap-5 flex-wrap">
                        <a
                          className="rbt-btn btn-gradient hover-icon-reverse"
                          href="#"
                        >
                          <span className="icon-reverse-wrapper">
                            <span className="btn-text">Explore More</span>
                            <span className="btn-icon">
                              <i className="feather-arrow-right"></i>
                            </span>
                            <span className="btn-icon">
                              <i className="feather-arrow-right"></i>
                            </span>
                          </span>
                        </a>
                        <div>
                          <Image
                            src={singnature}
                            width={250}
                            height={106}
                            alt="Signature"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-12 mt--40">
                  <div className="about-thumb">
                    <div className="shape-1">
                      <Image src={mfShape} width={82} height={31} alt="Shape" />
                    </div>
                    <div className="shape-2">
                      <Image src={shape} width={136} height={136} alt="Shape" />
                    </div>
                    <div className="since">
                      <span>
                        <Image
                          src={awardImg}
                          width={36}
                          height={51}
                          alt="Award Icon"
                        />
                      </span>
                      <div className="title-wrap">
                        <h4 className="number">
                          <span
                            className="odometer rbt-font-primary"
                            data-count="1890"
                          >
                            2025
                          </span>
                        </h4>
                        <h6 className="subtitle">Launched - WeWagad</h6>
                      </div>
                    </div>
                    <div className="thumb-1">
                      <Image
                        src={bannerImg}
                        width={600}
                        height={500}
                        unoptimized={true}
                        alt="Thumb"
                      />
                    </div>
                    <h6 className="title">Founder Pankaj Joshi - We Wagad Association</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* website counters */}
        <div
          style={{
            backgroundImage: `url(${bgImage18?.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          className="rbt-counterup-area bg_image bg_image_fixed ptb--170 ptb_md--50 ptb_sm--50 bg-black-overlay"
          data-black-overlay="1"
        >
          <CounterFive />
        </div>

        {/* Events */}
        <div className="rbt-event-area event-section-01 bg-color-extra2 rbt-section-gap">
          <div className="shapes">
            <div className="shape-1">
              <Image
                src={shape1}
                width={630}
                height={275}
                unoptimized={true}
                alt="Shape"
              />
            </div>
            <div className="shape-2">
              <Image
                src={shape2}
                width={290}
                height={404}
                unoptimized={true}
                alt="Shape"
              />
            </div>
            <div className="shape-3">
              <Image
                src={shape3}
                width={113}
                height={121}
                unoptimized={true}
                alt="Shape"
              />
            </div>
          </div>
          <div className="container">
            <div className="row gx-5 gy-3 rbt-index-upper">
              <div className="col-12 col-xl-6">

                {/* <div className="section-title mb--60 mb_sm--50">
                  <h6 className="b2 mb--15">
                    <span className="theme-gradient">Our Events</span>
                  </h6>
                  <h2 className="title w-600">
                    Upcoming Event <br /> For{" "}
                    <span className="theme-gradient">Everyone</span>
                  </h2>
                 
                </div> */}
                <div className="section-title mb--60 mb_sm--50">
                  <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-2">
                    <h1 className="b2 mb-0 fs-1">
                      <span className="theme-gradient">Our Events</span>
                    </h1>

                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="read-more-btn text-start text-md-end">
                        <Link
                          className="rbt-btn btn-gradient hover-icon-reverse radius-round"
                          href="/event-sidebar"
                        >
                          <div className="icon-reverse-wrapper">
                            <span className="btn-text">VIEW ALL EVENTS</span>
                            <span className="btn-icon">
                              <i className="feather-arrow-right"></i>
                            </span>
                            <span className="btn-icon">
                              <i className="feather-arrow-right"></i>
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <h2 className="title w-600">
                    WeWagad Events
                    <br />{" "}
                    <span className="theme-gradient">You're Invited 🙏</span>
                  </h2>
                </div>




                {EventData.events.slice(3, 4).map((data, index) => (
                  <div
                    className="rbt-card rbt-card-latest rbt-hover mb-xl-0 mb-4"
                    key={index}
                  >
                    <div className="rbt-card-img">
                      <Link href={`/event-details/${data.id}`}>
                        <Image
                          src={data.img}
                          width={638}
                          height={300}
                          alt="Card image"
                        />
                        <div className="rbt-badge-3 bg-white">
                          <span>{data.badgeDate}</span>
                          <span>{data.badgeYear}</span>
                        </div>
                      </Link>
                    </div>
                    <div className="rbt-card-body">
                      <div>
                        <ul className="rbt-meta">
                          <li>
                            <i className="feather-map-pin"></i>
                            {data.location}
                          </li>
                          <li>
                            <i className="feather-clock"></i> {data.time}
                          </li>
                        </ul>
                        <h4 className="rbt-card-title mb_mobile--10 mb--0">
                          <Link href={`/event-details/${data.id}`}>                          
                             {data.title}
                          </Link>
                        </h4>
                      </div>

                      <div className="read-more-btn">
                        <a
                          className="rbt-btn btn-border hover-icon-reverse btn-sm radius-round"
                          href={`/event-details/${data.id}`}
                        >
                          <span className="icon-reverse-wrapper">
                            <span className="btn-text">Register Now</span>
                            <span className="btn-icon">
                              <i className="feather-arrow-right"></i>
                            </span>
                            <span className="btn-icon">
                              <i className="feather-arrow-right"></i>
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="col-12 col-xl-6">
                <div className="row g-3">
                  {EventData.events.slice(4, 7).map((data, index) => (
                    <div className="col-12 col-xl-12 col-sm-6" key={index}>
                      <div className="rbt-card card-list-2 event-list-card variation-01 rbt-hover">
                        <div className="rbt-card-img">
                          <Link href={`/event-details/${data.id}`}>
                            <Image
                              src={data.img}
                              width={231}
                              height={156}
                              alt="Card image"
                            />
                          </Link>
                        </div>
                        <div className="rbt-card-body">
                          <ul className="rbt-meta">
                            <li>
                              <i className="feather-map-pin"></i>
                              {data.location}
                            </li>
                            <li>
                              <i className="feather-clock"></i> {data.time}
                            </li>
                          </ul>
                          <h4 className="rbt-card-title">
                            <Link href={`/event-details/${data.id}`}>
                              {data.title}
                            </Link>
                          </h4>
                          <div className="read-more-btn">
                            <Link
                              className="rbt-btn btn-border hover-icon-reverse btn-sm radius-round"
                              href={`/event-details/${data.id}`}
                            >
                              <span className="icon-reverse-wrapper">
                                <span className="btn-text">Explore</span>
                                <span className="btn-icon">
                                  <i className="feather-arrow-right"></i>
                                </span>
                                <span className="btn-icon">
                                  <i className="feather-arrow-right"></i>
                                </span>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>


        {/*  Upcoming Series */}
        <div className="rbt-event-area rbt-section-gap bg-gradient-3">
          <div className="container">
            <div className="row mb--55">
              <div className="section-title text-center">
                <span className="subtitle bg-white-opacity">
                 We Wagad Presents Shorts Fun Series 
                </span>
                <h2 className="title color-white">💎 वागड़ ना हीरा 💎</h2>
                <h6>Explore Fun || Dhamal || Masti || Total - 11 episodes</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <EventCarouse />
              </div>
            </div>
          </div>
        </div>


        {/* <div className="rbt-categories-area rbt-section-gap">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-8 col-md-7 col-12">
                <div className="section-title">
                  <h2 className="title">
                    Best Platform To{" "}
                    <span>
                      <Image
                        src={shapeIcon}
                        width={41}
                        height={31}
                        alt="Cap Icon"
                      />
                    </span>{" "}
                    Learn Everything
                  </h2>
                </div>
              </div>
              <div className="col-lg-4 col-md-5 col-12 d-none d-md-block">
                <div className="d-flex justify-content-end gap-3 rbt-arrow-between">
                  <div className="rbt-swiper-arrow style_2 rbt-arrow-left opacity-100">
                    <div className="custom-overfolow">
                      <i className="rbt-icon feather-arrow-left"></i>
                      <i className="rbt-icon-top feather-arrow-left"></i>
                    </div>
                  </div>

                  <div className="rbt-swiper-arrow style_2 rbt-arrow-right opacity-100">
                    <div className="custom-overfolow">
                      <i className="rbt-icon feather-arrow-right"></i>
                      <i className="rbt-icon-top feather-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="category-activation-four swiper pt--50">
              <Swiper
                className="swiper-wrapper py-3"
                modules={[Navigation]}
                loop={true}
                slidesPerView={1}
                spaceBetween={30}
                navigation={{
                  nextEl: ".rbt-arrow-right",
                  prevEl: ".rbt-arrow-left",
                  clickable: true,
                }}
                scrollbar={{
                  el: ".swiper-scrollbar",
                  draggable: true,
                  hide: true,
                  snapOnRelease: true,
                }}
                breakpoints={{
                  480: {
                    slidesPerView: 1,
                  },
                  481: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                }}
              >
                {CourseDetails &&
                  CourseDetails.courseDetails.map((item, innerIndex) => {
                    const count = categoryCounts[item.category] || 0;
                    return (
                      <SwiperSlide className="swiper-slide" key={innerIndex}>
                        <div className="rbt-cat-box rbt-cat-box-1 variation-3 text-center">
                          <div className="inner">
                            <div className="thumbnail">
                              <Link
                                href={`/course-filter-one-toggle/${item.category}`}
                              >
                                <Image
                                  src={item.cateBigImg}
                                  width={304}
                                  height={166}
                                  unoptimized={true}
                                  alt="Category Images"
                                />
                                <div className="read-more-btn">
                                  <span className="rbt-btn btn-sm btn-white radius-round">
                                    {count} Course{count !== 1 ? "s" : ""}
                                  </span>
                                </div>
                              </Link>
                            </div>
                            <div className="content">
                              <h5 className="title">
                                <Link
                                  href={`/course-filter-one-toggle/${item.category}`}
                                >
                                  {item.category}
                                </Link>
                              </h5>
                              <p className="description">{item.cateDesc}</p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}

                <div className="d-flex justify-content-center gap-3 rbt-arrow-between mt--30 d-md-none">
                  <div className="rbt-swiper-arrow style_2 rbt-arrow-left">
                    <div className="custom-overfolow">
                      <i className="rbt-icon feather-arrow-left"></i>
                      <i className="rbt-icon-top feather-arrow-left"></i>
                    </div>
                  </div>

                  <div className="rbt-swiper-arrow style_2 rbt-arrow-right">
                    <div className="custom-overfolow">
                      <i className="rbt-icon feather-arrow-right"></i>
                      <i className="rbt-icon-top feather-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div> */}

        {/* <div className="rbt-course-area rbt-sec-cir-shadow-1 bg-color-extra2 rbt-section-gap">
          <div className="gradient-shape-top"></div>
          <div className="gradient-shape-bottom"></div>
          <div className="container">
            <div className="row mb--30">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <h6 className="b2 mb--15">
                    <span className="theme-gradient">Admission</span>
                  </h6>
                  <h2 className="title w-600">
                    Academic Programs <br />{" "}
                    <span className="theme-gradient">At Histudy</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row mb--40">
              <div className="col-lg-12">
                <div className="rbt-course-tab-button-wrap">
                  <ul
                    className="rbt-course-tab-button nav nav-tabs"
                    id="rbt-myTab"
                    role="tablist"
                  >
                    {[
                      "All Course",
                      "featured",
                      "popular",
                      "trending",
                      "latest",
                    ].map((courseType, index) => (
                      <li key={index} className="nav-item" role="presentation">
                        <button
                          className={activeTab === courseType ? "active" : ""}
                          type="button"
                          onClick={() => handleButtonClick(courseType)}
                        >
                          <span className="filter-text text-capitalize">
                            {courseType}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="row mb--40">
              <div className="col-lg-12">
                <div className="tab-content" id="rbt-myTabContent">
                  <div className="row g-5">
                    {courseFilter.slice(0, 3).map((data, index) => (
                      <div className={`col-lg-4 col-md-6 col-12`} key={index}>
                        <div className="rbt-card variation-04 rbt-hover">
                          <div className="rbt-card-img">
                            <Link href={`/course-details/${data.id}`}>
                              <Image
                                src={data.courseImg}
                                width={355}
                                height={244}
                                alt="Card image"
                              />
                              {data.offPrice > 0 ? (
                                <div className="rbt-badge-3 bg-white">
                                  <span>-{data.offPrice}%</span>
                                  <span>Off</span>
                                </div>
                              ) : (
                                ""
                              )}
                            </Link>
                          </div>
                          <div className="rbt-card-body">
                            <ul className="rbt-meta">
                              <li>
                                <i className="feather-book"></i>
                                {data.lesson} Lessons
                              </li>
                              <li>
                                <i className="feather-users"></i>
                                {data.student} Students
                              </li>
                            </ul>
                            <h4 className="rbt-card-title">
                              <Link href={`/course-details/${data.id}`}>
                                {data.courseTitle}
                              </Link>
                            </h4>
                            <p className="rbt-card-text">{data.desc}</p>

                            <div className="rbt-review">
                              <div className="rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </div>
                              <span className="rating-count">
                                ({data.review} Reviews)
                              </span>
                            </div>

                            <div className="rbt-card-bottom">
                              <div className="rbt-price">
                                <span className="current-price mb-0">
                                  ${data.price}
                                </span>
                                <span className="off-price version-02">
                                  ${data.offPrice}
                                </span>
                              </div>

                              <Link
                                className="rbt-btn-link color-primary"
                                href={`/course-details/${data.id}`}
                              >
                                Enroll Course
                                <i className="feather-arrow-right"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt--55 mt_sm--50">
              <div className="col-lg-12">
                <div className="load-more-btn text-center">
                  <Link
                    className="rbt-btn btn-gradient btn-lg btn-mobile hover-icon-reverse"
                    href="/course-with-tab-two"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">View All Courses</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rbt-video-area video-section-02 bg-color-white rbt-section-gap">
          <div className="shape-1">
            <Image src={starIcon} width={84} height={126} alt="Star Shape" />
          </div>
          <div className="container">
            <div className="row row--35 align-items-center mt_dec--50">
              <div className="col-xl-6 col-12 mt--50">
                <div className="video-popup-wrapper version-02">
                  <div className="v-shape-1">
                    <Image
                      src={videoDotImg}
                      width={32}
                      height={83}
                      unoptimized={true}
                      alt="Shape"
                    />
                  </div>
                  <div className="feature-1">
                    <Image
                      src={videoIcon}
                      width={41}
                      height={41}
                      unoptimized={true}
                      alt="Icon"
                    />
                    <div>
                      <h5 className="number">99%</h5>
                      <h6 className="subtitle">Satisfied</h6>
                    </div>
                  </div>
                  <Image
                    className="w-100 rbt-radius"
                    src={videoImg}
                    width={618}
                    height={566}
                    unoptimized={true}
                    alt="Video Images"
                  />
                  <Link
                    className="rbt-btn btn-white rounded-player-2 popup-video with-animation position-to-top"
                    data-vbtype="video"
                    href="https://www.youtube.com/watch?v=nA1Aqp0sPQo"
                  >
                    <span className="play-icon"></span>
                  </Link>
                </div>
              </div>
              <div className="col-xl-5 col-12 mt--50">
                <div className="inner">
                  <div className="section-title text-start">
                    <h6 className="b2 mb--15">
                      <span className="theme-gradient">Histudy</span>
                    </h6>
                    <h2 className="title w-600">Campus Life</h2>
                  </div>

                  <div className="rbt-feature-wrapper mt--30 ml_dec_20">
                    <div className="rbt-feature feature-style-2 rbt-radius">
                      <div className="icon bg-pink-opacity">
                        <i className="feather-heart"></i>
                      </div>
                      <div className="feature-content">
                        <h6 className="feature-title">Flexible Classes</h6>
                        <p className="feature-description">
                          It is a long established fact that a reader will be
                          distracted by this on readable content of when looking
                          at its layout.
                        </p>
                      </div>
                    </div>

                    <div className="rbt-feature feature-style-2 rbt-radius">
                      <div className="icon bg-primary-opacity">
                        <i className="feather-book"></i>
                      </div>
                      <div className="feature-content">
                        <h6 className="feature-title">Learn From Anywhere</h6>
                        <p className="feature-description">
                          Sed distinctio repudiandae eos recusandae laborum
                          eaque non eius iure suscipit laborum eaque non eius
                          iure suscipit.
                        </p>
                      </div>
                    </div>

                    <div className="rbt-feature feature-style-2 rbt-radius">
                      <div className="icon bg-secondary-opacity">
                        <i className="feather-award"></i>
                      </div>
                      <div className="feature-content">
                        <h6 className="feature-title">Skill-Based Learning</h6>
                        <p className="feature-description">
                          It is a long established fact that a reader will be
                          distracted by this on readable content of when looking
                          at its layout.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="rbt-accordion-area accordion-style-1 accordion-section-02 bg-color-white rbt-section-gapBottom">
          <div className="container">
            <div className="row mb--60">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <h6 className="b2 mb--15">
                    <span className="theme-gradient">University Cost</span>
                  </h6>
                  <h2 className="title w-600">University Tuition & Fees</h2>
                </div>
              </div>
            </div>
            {CourseData &&
              CourseData.course.map((data, index) => (
                <div className="row g-5 align-items-start" key={index}>
                  <div className="col-lg-7 order-2 order-lg-1">
                    <div className="rbt-accordion-style rbt-accordion-01 rbt-accordion-06 accordion">
                      <div className="accordion" id="tutionaccordionExamplea1">
                        {data.courseBody.map((item, innerIndex) => (
                          <div className="accordion-item card" key={innerIndex}>
                            <h2
                              className="accordion-header card-header"
                              id={item.heading}
                            >
                              <button
                                className={`accordion-button ${!item.collapsed ? "collapsed" : ""
                                  }`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#${item.collapse}`}
                                aria-expanded={item.expanded}
                                aria-controls={item.collapse}
                              >
                                {item.subTitle}
                              </button>
                            </h2>
                            <div
                              id={item.collapse}
                              className={`accordion-collapse collapse ${item.show ? "show" : ""
                                }`}
                              aria-labelledby={item.heading}
                              data-bs-parent="#tutionaccordionExamplea1"
                            >
                              <div className="accordion-body card-body">
                                <h6 className="title">{item.text}</h6>
                                <div className="table-responsive mobile-table-750">
                                  <table className="rbt-table table table-borderless">
                                    <thead>
                                      <tr>
                                        <th>Program Term</th>
                                        <th>Tuition Cost</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <th>Term 1-6</th>
                                        <td>${item.cost}</td>
                                      </tr>
                                    </tbody>
                                    <tfoot>
                                      <tr>
                                        <th>Total</th>
                                        <th>${item.cost}</th>
                                      </tr>
                                    </tfoot>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 order-1 order-lg-2">
                    <div className="position-relative">
                      <div className="union-shape">
                        <Image
                          src={shape}
                          width={136}
                          height={136}
                          unoptimized={true}
                          alt="Shape"
                        />
                      </div>
                      <div className="thumbnail">
                        <Image
                          className="radius-6"
                          src={accordionImg}
                          width={526}
                          height={569}
                          unoptimized={true}
                          alt="histudy image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div> */}



        {/* Enetertainment for Everyone  */}
        <div className="rbt-testimonial-area bg-color-light rbt-section-gap overflow-hidden">
          <div className="wrapper mb--60">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center">
                    <span className="subtitle bg-primary-opacity">
                      Wagad Creators That Inspire
                    </span>
                    <h2 className="title">
                    Stars Who Light Up Your Screen <br /> From reels to real impact – meet the names you follow.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Testimonial />
        </div>

        {/* Sponser  */}
        <div
          style={{
            backgroundImage: `url(${sponsorbg?.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          className="rbt-countdown-area bg_image  bg_image_fixed rbt-section-gap"
          data-black-overlay="5"
        >
          <div className="container">
            <CountDownTwo />
          </div>
        </div>

        {/* Our Creater  */}
        <div className="rbt-team-area bg-color-white rbt-section-gap">
          <div className="container">
            <div className="row mb--0">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle bg-primary-opacity">
                    Inside WeWagad: The Gallery
                  </span>
                  <h2 className="title">Moments from WeWagad That You’ll Love</h2>
                </div>
              </div>
            </div>
            {/* <TeamTwo /> */}
          </div>
        </div>

        <Gallery />

      

        {/* News and Blogs */}
        <div className="rbt-rbt-blog-area rbt-section-gap bg-color-extra2 rbt-sec-cir-shadow-1">
          <div className="gradient-shape-top version-02"></div>
          <div className="gradient-shape-bottom version-02"></div>
          <div className="container">
            <div className="row mb--60 mb_sm--50 g-5 align-items-end">
              <div className="col-lg-8 col-md-8 col-12">
                <div className="section-title text-start">
                  <h6 className="b2 mb--15">
                    <span className="theme-gradient">News & Blog</span>
                  </h6>
                  <h2 className="title">
                    Have a Look on
                    <span className="theme-gradient ms-2">Our Update</span>
                  </h2>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <div className="load-more-btn text-start text-md-end">
                  <Link
                    className="rbt-btn btn-gradient hover-icon-reverse"
                    href="#"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">View All Posts</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <BlogGrid
              isPagination={false}
              top={false}
              start={0}
              end={3}
              blogdata={blogdata}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default ModernUniversity;
