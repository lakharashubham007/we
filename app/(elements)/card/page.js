import BackToTop from "@/app/backToTop";
import CardPage from "./(card)";

export const metadata = {
  title: "",
  description: "",
};

const CardLayout = () => {
  return (
    <>
      <CardPage />

      <BackToTop />
    </>
  );
};

export default CardLayout;
