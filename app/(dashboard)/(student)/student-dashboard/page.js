import BackToTop from "@/app/backToTop";
import StudentDashboard from "./(dashboard)";

export const metadata = {
  title: "",
  description: "",
};

const StudentDashboardLayout = () => {
  return (
    <>
      <StudentDashboard />
      <BackToTop />
    </>
  );
};

export default StudentDashboardLayout;
