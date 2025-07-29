import BackToTop from "@/app/backToTop";
import AllQuestionsLayout from "./(question)";

export const metadata = {
  title: "Lesson - WeWagad",
  description: "WeWagad Digital",
};

const LessonLayout = () => {
  return (
    <>
      <AllQuestionsLayout />
      <BackToTop />
    </>
  );
};

export default LessonLayout;
