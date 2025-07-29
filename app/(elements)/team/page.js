import BackToTop from "@/app/backToTop";
import InstructorPage from "./(team)";

export const metadata = {
  title: "",
  description: "",
};

const InstructorLayout = () => {
  return (
    <>
      <InstructorPage />
      <BackToTop />
    </>
  );
};

export default InstructorLayout;
