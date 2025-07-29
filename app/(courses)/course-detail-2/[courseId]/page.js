import BackToTop from "@/app/backToTop";
import SingleCourse from "../index";

export const metadata = {
  title: "",
  description: "",
};

const SingleCourseLayoutTwo = ({ params }) => {
  return (
    <>
      <SingleCourse getParams={params} />
      <BackToTop />
    </>
  );
};

export default SingleCourseLayoutTwo;
