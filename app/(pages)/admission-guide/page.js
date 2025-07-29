import BackToTop from "@/app/backToTop";
import AdmissionGuidePage from "./(admission-guide)";

export const metadata = {
  title: "",
  description: "",
};

const AdmissionGuideLayout = () => {
  return (
    <>
      <AdmissionGuidePage />

      <BackToTop />
    </>
  );
};

export default AdmissionGuideLayout;
