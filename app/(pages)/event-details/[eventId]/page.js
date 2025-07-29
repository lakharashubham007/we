import BackToTop from "@/app/backToTop";
import SingleEvent from "../index";

export const metadata = {
  title: "",
  description: "",
};

const SingleEventLayout = ({ params }) => {
  return (
    <>
      <SingleEvent getParams={params} />
      <BackToTop />
    </>
  );
};

export default SingleEventLayout;
