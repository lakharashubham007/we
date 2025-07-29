import BackToTop from "@/app/backToTop";
import SingleQuestionLayout from "./(single)";

export const metadata = {
 title: "",
  description: "",
};

const LessonLayout = () => {
  return (
    <>
      <SingleQuestionLayout />
      <BackToTop />
    </>
  );
};

export default LessonLayout;
