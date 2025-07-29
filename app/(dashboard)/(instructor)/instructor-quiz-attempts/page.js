import BackToTop from "@/app/backToTop";
import QuizAttemptsPage from "./(quiz-attempts)";

export const metadata = {
  title: "",
  description: "",
};

const QuizAttemptsLayout = () => {
  return (
    <>
      <QuizAttemptsPage />
      <BackToTop />
    </>
  );
};

export default QuizAttemptsLayout;
