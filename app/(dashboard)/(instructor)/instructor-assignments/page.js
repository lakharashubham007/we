import BackToTop from "@/app/backToTop";
import AssignmentsPage from "./(assignments)";

export const metadata = {
  title: "",
  description: "",
};

const AssignmentsLayout = () => {
  return (
    <>
      <AssignmentsPage />

      <BackToTop />
    </>
  );
};

export default AssignmentsLayout;
