import BackToTop from "@/app/backToTop";
import ReviewPage from "./(reviews)";

export const metadata = {
  title: "",
  description: "",
};

const ReviewLayout = () => {
  return (
    <>
      <ReviewPage />

      <BackToTop />
    </>
  );
};

export default ReviewLayout;
