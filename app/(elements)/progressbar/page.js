import BackToTop from "@/app/backToTop";
import ProgressbarPage from "./(progressbar)";

export const metadata = {
  title: "",
  description: "",
};

const ProgressbarLayout = () => {
  return (
    <>
      <ProgressbarPage />

      <BackToTop />
    </>
  );
};

export default ProgressbarLayout;
