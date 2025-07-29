import BackToTop from "@/app/backToTop";
import InstructorDashboard from "./(dashboard)";

export const metadata = {
  title: "",
  description: "",
};

const InstructorDashboardLayout = () => {
  return (
    <>
      <InstructorDashboard />
      <BackToTop />
    </>
  );
};

export default InstructorDashboardLayout;
