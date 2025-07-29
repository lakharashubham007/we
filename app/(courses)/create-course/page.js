import BackToTop from "@/app/backToTop";
import CreateCoursePage from "./index";

export const metadata = {
  title: "",
  description: "",
};

const CreateCourseLayout = () => {
  return (
    <>
      <CreateCoursePage />

      <BackToTop />
    </>
  );
};

export default CreateCourseLayout;
