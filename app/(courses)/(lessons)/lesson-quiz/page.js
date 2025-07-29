import BackToTop from "@/app/backToTop";
import LessonQuizLayout from "./(quiz)";

export const metadata = {
  title: "Lesson Quiz - WeWagad",
  description: "WeWagad",
};

const LessonQuizPage = () => {
  return (
    <>
      <LessonQuizLayout />
      <BackToTop />
    </>
  );
};

export default LessonQuizPage;
