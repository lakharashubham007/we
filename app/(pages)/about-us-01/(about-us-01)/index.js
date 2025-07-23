"use client";

import Context from "@/context/Context";
import Link from "next/link";
import { Provider } from "react-redux";
import { ParallaxProvider } from "react-scroll-parallax";
import Store from "@/redux/store";

import Banner from "@/components/About-Us-01/Banner";
import Teacher from "@/components/About-Us-01/Teacher";
import About from "@/components/Abouts/About";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import NewsletterTwo from "@/components/Newsletters/Newsletter-Two";
import SplitTwo from "@/components/Split/Split-Two";
import TestimonialSix from "@/components/Testimonials/Testimonial-Six";

const AboutUsPage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <MobileMenu />
          <Cart />

          <div
            className="slider-area rbt-banner-10 height-750 bg_image bg_image--11"
            data-black-overlay="5"
          >
            <Banner />
          </div>
          <div className="rbt-about-area about-style-1 bg-color-white rbt-section-gapTop">
            <ParallaxProvider>
              <About />
            </ParallaxProvider>
          </div>
          <div className="rbt-video-area rbt-section-gapBottom pt--50 bg-color-white">
            <div className="container">
              <SplitTwo isImg={false} />
            </div>
          </div>

          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default AboutUsPage;
