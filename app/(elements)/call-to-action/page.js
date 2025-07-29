import BackToTop from "@/app/backToTop";
import CallToActionPage from "./(call-to-action)";

export const metadata = {
  title: "",
  description: "",
};

const CallToActionLayout = () => {
  return (
    <>
      <CallToActionPage />

      <BackToTop />
    </>
  );
};

export default CallToActionLayout;
