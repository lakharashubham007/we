import BackToTop from "@/app/backToTop";
import CourseWithSidebarLayout from "./index";

export const metadata = {
  title: "",
  description: "",
};

const CourseWithSidebarPage = () => {
  return (
    <>
      <CourseWithSidebarLayout />

      <BackToTop />
    </>
  );
};

export default CourseWithSidebarPage;
