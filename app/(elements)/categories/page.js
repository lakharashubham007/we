import BackToTop from "@/app/backToTop";
import CategoriesPage from "./(categories)";

export const metadata = {
  title: "",
  description: "",
};
const CategoriesLayout = () => {
  return (
    <>
      <CategoriesPage />

      <BackToTop />
    </>
  );
};

export default CategoriesLayout;
