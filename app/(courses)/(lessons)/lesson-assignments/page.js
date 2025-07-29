import BackToTop from "@/app/backToTop";
import LessonAssignmentPage from "./(lesson-assignments)";

export const metadata = {
  title: "Lesson Assignment - WeWagad",
  description: "WeWagad",
};

const LessonAssignmentLayout = () => {
  return (
    <>
      <LessonAssignmentPage />
      <BackToTop />
    </>
  );
};

export default LessonAssignmentLayout;
