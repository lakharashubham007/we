import BackToTop from "@/app/backToTop";
import CourseFilterTwoPage from "./index";

export const metadata = {
  title: "",
  description: "",
};

const CourseOneToggleLayout = () => {
  return (
    <>
      <CourseFilterTwoPage />

      <BackToTop />
    </>
  );
};

export default CourseOneToggleLayout;
