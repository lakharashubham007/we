import BackToTop from "@/app/backToTop";
import LessonIntroPage from "./(intro)";

export const metadata = {
  title: "Lesson Intro - WeWagad",
  description: "WeWagad",
};

const LessonIntroLayout = () => {
  return (
    <>
      <LessonIntroPage />
      <BackToTop />
    </>
  );
};

export default LessonIntroLayout;
