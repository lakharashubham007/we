import BackToTop from "@/app/backToTop";
import LessonQuizResultLayout from "./(quiz-result)";

export const metadata = {
  title: "Lesson Quiz Result - WeWagad",
  description: "WeWagad",
};

const LessonQuizResultPage = () => {
  return (
    <>
      <LessonQuizResultLayout />
      <BackToTop />
    </>
  );
};

export default LessonQuizResultPage;
