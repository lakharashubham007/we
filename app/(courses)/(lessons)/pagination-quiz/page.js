import BackToTop from "@/app/backToTop";
import PaginationQuizLayout from "./(pagination)";

export const metadata = {
  title: "Pagination Quiz - WeWagad",
  description: "WeWagad",
};

const LessonLayout = () => {
  return (
    <>
      <PaginationQuizLayout />
      <BackToTop />
    </>
  );
};

export default LessonLayout;
