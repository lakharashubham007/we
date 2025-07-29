import BackToTop from "@/app/backToTop";
import BrandPage from "./(brand)";

export const metadata = {
  title: "",
  description: "",
};

const BrandLayout = () => {
  return (
    <>
      <BrandPage />

      <BackToTop />
    </>
  );
};

export default BrandLayout;
