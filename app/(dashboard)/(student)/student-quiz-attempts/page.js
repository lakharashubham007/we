import BackToTop from "@/app/backToTop";
import StudentQuiz from "./(quiz-attempts)";

export const metadata = {
  title: "",
  description: "",
};

const QuizAttemptsLayout = () => {
  return (
    <>
      <StudentQuiz />
      <BackToTop />
    </>
  );
};

export default QuizAttemptsLayout;
