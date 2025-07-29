import BackToTop from "@/app/backToTop";
import QuizWithTimeLayout from "./(timer)";

export const metadata = {
  title:
    "Quiz With Custom Timer - WeWagad",
  description: "WeWagad",
};

const LessonLayout = () => {
  return (
    <>
      <QuizWithTimeLayout />
      <BackToTop />
    </>
  );
};

export default LessonLayout;
