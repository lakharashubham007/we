import BackToTop from "@/app/backToTop";
import StudentReviews from "./(reviews)";

export const metadata = {
  title: "",
  description: "",
};

const ReviewLayout = () => {
  return (
    <>
      <StudentReviews />

      <BackToTop />
    </>
  );
};

export default ReviewLayout;
