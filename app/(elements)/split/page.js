import BackToTop from "@/app/backToTop";
import SplitPage from "./(split)";

export const metadata = {
  title: "",
  description: "",
};

const SplitLayout = () => {
  return (
    <>
      <SplitPage />
      <BackToTop />
    </>
  );
};

export default SplitLayout;
