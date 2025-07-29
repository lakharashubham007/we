import BackToTop from "@/app/backToTop";
import AboutPage from "./(about)";

export const metadata = {
  title: "",
  description: "",
};

const AboutLayout = () => {
  return (
    <>
      <AboutPage />

      <BackToTop />
    </>
  );
};

export default AboutLayout;
