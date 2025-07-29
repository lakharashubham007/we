import BackToTop from "@/app/backToTop";
import StyleGuidePage from "./(style-guide)";

export const metadata = {
  title: "",
  description: "",
};;

const StyleGuideLayout = () => {
  return (
    <>
      <StyleGuidePage />
      <BackToTop />
    </>
  );
};

export default StyleGuideLayout;
