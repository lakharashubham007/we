import BackToTop from "@/app/backToTop";
import QuizWithPoinLayout from "./(point)";

export const metadata = {
  title: "",
  description: "",
};

const LessonLayout = () => {
  return (
    <>
      <QuizWithPoinLayout />
      <BackToTop />
    </>
  );
};

export default LessonLayout;
