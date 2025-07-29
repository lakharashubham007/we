import BackToTop from "@/app/backToTop";
import AdvanceTabPage from "./(advance-tab)";

export const metadata = {
  title: "",
  description: "",
};

const AdvanceTabLayout = () => {
  return (
    <>
      <AdvanceTabPage />

      <BackToTop />
    </>
  );
};

export default AdvanceTabLayout;
