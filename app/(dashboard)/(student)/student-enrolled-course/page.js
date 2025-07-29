import BackToTop from "@/app/backToTop";
import EnrolledCoursePage from "./(enrolled-course)";

export const metadata = {
  title: "",
  description: "",
};

const EnrolledCourseLayout = () => {
  return (
    <>
      <EnrolledCoursePage />

      <BackToTop />
    </>
  );
};

export default EnrolledCourseLayout;
