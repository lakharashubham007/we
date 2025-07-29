import BackToTop from "@/app/backToTop";
import LessonPage from "./(lesson)";

export const metadata = {
  title:
    "Questions Below Each Other - WeWagad",
  description: "WeWagad Online",
};

const LessonLayout = () => {
  return (
    <>
      <LessonPage />
      <BackToTop />
    </>
  );
};

export default LessonLayout;
