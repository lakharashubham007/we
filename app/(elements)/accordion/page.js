import BackToTop from "@/app/backToTop";
import AccordionPage from "./(accordion)";

export const metadata = {
  title: "",
  description: "",
};

const AccordionLayout = () => {
  return (
    <>
      <AccordionPage />

      <BackToTop />
    </>
  );
};

export default AccordionLayout;
