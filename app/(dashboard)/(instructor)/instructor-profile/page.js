import BackToTop from "@/app/backToTop";
import InstructorProfile from "./(profile)";

export const metadata = {
  title: "",
  description: "",
};

const InstructorProfileLayout = () => {
  return (
    <>
      <InstructorProfile />
      <BackToTop />
    </>
  );
};

export default InstructorProfileLayout;
