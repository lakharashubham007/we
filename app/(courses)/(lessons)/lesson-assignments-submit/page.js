import BackToTop from "@/app/backToTop";
import AssignmentsSubmitPage from "./(assignments-submit)";

export const metadata = {
  title: "Lesson Quiz Result - WeWagad",
  description: "WeWagad",
};

const AssignmentsSubmitLayout = () => {
  return (
    <>
      <AssignmentsSubmitPage />
      <BackToTop />
    </>
  );
};

export default AssignmentsSubmitLayout;
