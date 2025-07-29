import BackToTop from "@/app/backToTop";
import TestimonialPage from "./(testimonial)";

export const metadata = {
  title: "",
  description: "",
};

const TestimonialLayout = () => {
  return (
    <>
      <TestimonialPage />

      <BackToTop />
    </>
  );
};

export default TestimonialLayout;
