"use client";

import { Provider } from "react-redux";
import Context from "@/context/Context";
import Store from "@/redux/store";

import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import ModernUniversity from "@/components/19-modern-university/ModernUniversity";
import HeaderStyleFour from "@/components/Header/HeaderStyle-Four";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";

const ModernUniversityPage = ({ getAllBlogs }) => {

  return (
    <>
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          {/* <HeaderStyleFour
            headerType=""
            btnText="Register Now"
            parentClass="rbt-header-4-container-var"
            borderTop=""
            isShadow="shadow-none"
            isContainerFluid={false}
          /> */}
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />

          <ModernUniversity blogdata={getAllBlogs} />
          <Cart />

          <FooterOne newsletterBorder={true} />
        </Context>
      </Provider>
    </>
  );
};

export default ModernUniversityPage;
