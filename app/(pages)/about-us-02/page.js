import BackToTop from "@/app/backToTop";
import AboutUsPage from "./(about-us-02)/index";

export const metadata = {
  title: "",
  description: "",
};

const AboutUsLayout = () => {
  return (
    <>
      <AboutUsPage />
      <BackToTop />
    </>
  );
};

export default AboutUsLayout;
